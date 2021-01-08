import { Component, OnInit } from '@angular/core';
import { MapService } from '@app/core/service';
import { PreMap, SearchMapResult, MapSidDetail } from '@app/shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MapDetailContainerComponent } from '../../map-detail/map-detail-container';

@Component({
    selector: 'map-search-container',
    templateUrl: './map-search-container.component.html',
    styleUrls: ['./map-search-container.component.scss'],
})
export class MapSearchContainerComponent implements OnInit {
    typeCode: number;
    keywords: any = '';

    results: PreMap[];
    searchOptions: string[];

    offset: number = 0;
    pageSize: number = 20;

    loading: boolean = false;

    isShowPanel: boolean = true;

    constructor(
        public mapServe: MapService,
        public snackBar: MatSnackBar,
        public dialog: MatDialog,
        public activeRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.activeRoute.queryParamMap.subscribe((params) => {
            if (params.get('search')) {
                this.search(params.get('search'));
            }
        });

        this.onQuickSearch('new');
    }

    onOptionsChange(results: string[]) {
        this.searchOptions = results;
    }

    onQuickSearch(keyWords: string) {
        this.offset = 0;

        switch (keyWords) {
            case 'new':
                this.typeCode = 2;
                break;
            case 'hot':
                this.typeCode = 1;
                break;
            default:
                this.typeCode = 4;
                this.keywords = keyWords;
                break;
        }

        this.onSearch();
    }

    search(keyWords: any) {
        this.keywords = keyWords
            .replace(/"/g, '')
            .trim();
        this.typeCode = 4;
        this.offset = 0;

        // 是否数字，是的话直接请求单个铺面，否的话请求列表
        if (this.keywords.match(/^\d+$|\/\d+/)) {
            this.mapServe
                .getMapInfo(this.keywords)
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

        let query = [
            `0=${this.pageSize}`,
            `1=${this.offset}`,
            `2=${this.typeCode}`,
            `3=${this.keywords}`,
        ];

        if (this.typeCode === 4) {
            query = query.concat(this.searchOptions);
        }

        this.mapServe.getMapList(query).subscribe((res: SearchMapResult) => {
            this.results = res.data;
            this.offset = res.endid;
            this.loading = false;
        });
    }

    onTogglePanel() {
        this.isShowPanel = !this.isShowPanel;
    }

    onPagechange(type: string) {
        switch (type) {
            case 'next':
                this.onSearch();
                break;
            case 'after':
                if (this.offset - this.pageSize <= 0) {
                    this.snackBar.open(
                        'Is already the first pageFirst Page',
                        'Close',
                        { duration: 2000 }
                    );
                } else {
                    this.offset =
                        this.offset - this.pageSize <= 0
                            ? 0
                            : this.offset - 2 * this.pageSize;
                    this.onSearch();
                }
                break;
            default:
                break;
        }
    }
}
