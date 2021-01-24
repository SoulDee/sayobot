import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from '@app/shared/models';
import { API_CONFIG } from '../providers/api';
import { IResponse } from '@app/types';

@Injectable({
    providedIn: 'root',
})
export class AdsService {
    constructor(
        @Inject(API_CONFIG) private api: string,
        private http: HttpClient
    ) {}

    getAds() {
        return this.http.get<IResponse<Ad[]>>(`${this.api}/static/ad`);
    }
}
