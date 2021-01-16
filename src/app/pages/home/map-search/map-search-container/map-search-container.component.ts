import { Component, OnInit } from '@angular/core';
import { MapService } from '@app/core/service';
import { PreMap, MapSidDetail } from '@app/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MapDetailContainerComponent } from '../../map-detail/map-detail-container';
import { SEARCH_CHECKED_KEY, SEARCH_SLIDER_KEY } from '@app/core/config';
import { SearchType, sumByArr } from '@app/types';
import { SearchAdvanceOptionsComponent } from '../../components';

const MAP_PAGE_SIZE = 25;

@Component({
    selector: 'map-search-container',
    templateUrl: './map-search-container.component.html',
    styleUrls: ['./map-search-container.component.scss'],
})
export class MapSearchContainerComponent implements OnInit {
    results: PreMap[];
    keyword: string = '';
    searchType: SearchType = SearchType.Search;

    // 考虑到 map id并不是连续的，而是中间有空缺，因此不能使用通常的翻页逻辑，而是通过一个栈来存储
    offsetStack: number[] = [0];
    loading: boolean = false;

    constructor(
        private _dialog: MatDialog,
        private mapServe: MapService,
        private activeRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.activeRoute.queryParamMap.subscribe((params) => {
            if (params.get('search')) this.search(params.get('search'));
        });

        this.quickSearch(SearchType.New);
    }

    search(keyword: any) {
        this.searchType = SearchType.Search;
        this.keyword = keyword.replace(/"/g, '').trim();
        this.offsetStack = [0];

        const isDigital = this.keyword.match(/^\d+$|\/\d+/);
        isDigital ? this.getMapDetail() : this.getMapList();
    }

    getMapList() {
        this.loading = true;
        const params = this.getParams();
        this.mapServe.getMaplistV2(params).subscribe((res) => {
            this.offsetStack.push(res.endid);
            this.results = res.data;
            this.loading = false;
            this.keyword = '';
        });
    }

    getMapDetail() {
        this.mapServe
            .getMapInfo(this.keyword)
            .subscribe((res: MapSidDetail) => {
                if (res) {
                    this._dialog.open(MapDetailContainerComponent, {
                        panelClass: 'common-dialog',
                        data: { id: res.sid, content: res },
                    });
                    this.keyword = '';
                } else {
                    this.getMapList();
                }
            });
    }

    openAdvanceOptions() {
        this._dialog
            .open(SearchAdvanceOptionsComponent)
            .afterClosed()
            .subscribe(
                (res: { success: boolean }) =>
                    res?.success && this.search(this.keyword)
            );
    }

    quickSearch(type: string) {
        this.searchType = type as SearchType;
        this.offsetStack = [0];
        this.keyword = '';
        this.getMapList();
    }

    prevPage() {
        if (this.offsetStack.length <= 2) return;
        this.offsetStack.pop();
        this.offsetStack.pop();
        this.getMapList();
    }

    private getParams() {
        const offset = this.offsetStack[this.offsetStack.length - 1];
        let params = {
            limit: MAP_PAGE_SIZE,
            offset,
            type: this.searchType,
        };

        if (this.searchType === SearchType.Search) {
            params['keyword'] = this.keyword;

            const checkedOpts = JSON.parse(
                localStorage.getItem(SEARCH_CHECKED_KEY)
            );
            if (checkedOpts) {
                let opts = {};
                Object.keys(checkedOpts).forEach((key) => {
                    opts[key] = (checkedOpts[key] as number[]).reduce(sumByArr);
                });
                params = { ...params, ...opts };
            }

            const sliderOpts = JSON.parse(
                localStorage.getItem(SEARCH_SLIDER_KEY)
            );
            if (sliderOpts) {
                let opts = {};
                Object.keys(sliderOpts).forEach((key) => {
                    opts[key] = [sliderOpts[key].low, sliderOpts[key].high];
                });
                params = { ...params, ...opts };
            }
        }

        return params;
    }
}
