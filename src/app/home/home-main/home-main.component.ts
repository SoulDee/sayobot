import { Component, OnInit } from '@angular/core';
import { DialogService, ApiService } from '../../core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
    tabIndex: number;
    url: string;

    constructor(
        public dialog: DialogService,
        public apiService: ApiService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        this.apiService.getSupport();
        this.apiService.getMapList();
        this.apiService.getNewsList();

    }

    opneMapDetail = id => {
        this.apiService.getMapDetail(id);
        this.dialog.mapDetail(id, this.apiService.detail);
    }

    openNotFoundMap = () => this.dialog.notFoundMap();

    search(str) {
        this.url = str.replace(/["\s]/ig, '');
        if( this.url !== '') {
            this.apiService.getSearch(this.url);
            this.tabIndex = 3;
        } else {
            this.dialog.notFoundMap();
        }
    }

    getHotMore() {
        this.apiService.getHotMap();
    }

    getNewMore() {
        this.apiService.getNewMap();
    }

    getSearchMore() {
        this.apiService.getSearchList();
    }
}


