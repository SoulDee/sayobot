import { Component, OnInit } from '@angular/core';
import { MapService } from '@app/core/service';
import { PreMap, MapSidDetail } from '@app/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MapDetailContainerComponent } from '../../map-detail/map-detail-container';
import { SEARCH_CHECKED_KEY, SEARCH_SLIDER_KEY } from '@app/core/config';
import { SearchType } from '@app/types';

@Component({
    selector: 'map-search-container',
    templateUrl: './map-search-container.component.html',
    styleUrls: ['./map-search-container.component.scss'],
})
export class MapSearchContainerComponent implements OnInit {
    keyword: string = '';

    results: PreMap[];

    offset: number = 0;
    pageSize: number = 20;

    loading: boolean = false;

    searchType: SearchType = SearchType.Search;

    constructor(
        private mapServe: MapService,
        private dialog: MatDialog,
        private activeRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.activeRoute.queryParamMap.subscribe((params) => {
            if (params.get('search')) {
                this.search(params.get('search'));
            }
        });
    }

    search(keyword: any) {
        this.keyword = keyword.replace(/"/g, '').trim();
        this.offset = 0;

        // 是否数字，是的话直接请求单个铺面，否的话请求列表
        if (this.keyword.match(/^\d+$|\/\d+/)) {
            this.mapServe
                .getMapInfo(this.keyword)
                .subscribe((res: MapSidDetail) => {
                    if (res) {
                        this.dialog.open(MapDetailContainerComponent, {
                            panelClass: 'common-dialog',
                            data: { id: res.sid, content: res },
                        });
                    } else {
                        this.onSearch();
                    }
                });
        } else {
            this.onSearch();
        }
    }

    onSearch() {
        this.loading = true;
        const params = this.getParams();
        this.mapServe.getMaplistV2(params).subscribe((res) => {
            this.results = res.data;
            this.offset = res.endid;
            this.loading = false;
        });
    }

    private getParams() {
        let params = {
            limit: this.pageSize,
            offset: this.offset,
            type: this.searchType,
            keyword: this.keyword,
        };

        const checkedOpts = JSON.parse(
            localStorage.getItem(SEARCH_CHECKED_KEY)
        );
        if (checkedOpts) {
            let opts = {};
            Object.keys(checkedOpts).forEach((key) => {
                opts[key] = (checkedOpts[key] as number[]).reduce(
                    (prev, next) => prev + next
                );
            });

            params = { ...params, ...opts };
        }

        const sliderOpts = JSON.parse(localStorage.getItem(SEARCH_SLIDER_KEY));
        if (sliderOpts) {
            let opts = {};
            Object.keys(sliderOpts).forEach((key) => {
                opts[key] = [sliderOpts[key].low, sliderOpts[key].high];
            });
            params = { ...params, ...opts };
        }

        return params;
    }

    // onPagechange(type: string) {
    //     switch (type) {
    //         case 'next':
    //             this.onSearch();
    //             break;
    //         case 'after':
    //             if (this.offset - this.pageSize <= 0) {
    //                 this.snackBar.open(
    //                     'Is already the first pageFirst Page',
    //                     'Close',
    //                     { duration: 2000 }
    //                 );
    //             } else {
    //                 this.offset =
    //                     this.offset - this.pageSize <= 0
    //                         ? 0
    //                         : this.offset - 2 * this.pageSize;
    //                 this.onSearch();
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    // }
}
