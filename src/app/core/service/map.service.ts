import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
    MapSidDetail,
    MapInfoResult,
    SearchMapResult,
} from 'app/shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapSearchListParams } from '@app/types';

@Injectable({
    providedIn: 'root',
})
export class MapService {
    BASE_URL: string = 'https://api.sayobot.cn';

    private readonly postApi = 'https://api.sayobot.cn/?post';

    constructor(private http: HttpClient) {}

    getMapInfo(sid: number | string): Observable<MapSidDetail> {
        const params = new HttpParams({ fromString: `0=${sid}` });
        return this.http
            .get(`${this.BASE_URL}/v2/beatmapinfo`, {
                responseType: 'json',
                params,
            })
            .pipe(map((res: MapInfoResult) => res.data));
    }

    getMaplistV2(params: MapSearchListParams) {
        const cmd = { cmd: 'beatmaplist', ...params };
        return this.http.post<SearchMapResult>(
            this.postApi,
            JSON.stringify(cmd)
        );
    }
}
