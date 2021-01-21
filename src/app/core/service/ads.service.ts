import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from '@app/shared/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdsService {
    BASE_URL = 'https://api.sayobot.cn/';

    constructor(private http: HttpClient) {}

    getAds(): Observable<Ad[]> {
        return this.http
            .get(`${this.BASE_URL}static/ad`)
            .pipe(map((res: { data: Ad[] }) => res.data));
    }
}
