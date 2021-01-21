import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerItem } from '@app/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ServerMangeService {
    BASE_URL: string = 'https://api.sayobot.cn/';

    constructor(private http: HttpClient) {}

    getServerList(): Observable<ServerItem[]> {
        return this.http
            .get(`${this.BASE_URL}static/servers`)
            .pipe(map((res: { data: ServerItem[] }) => res.data));
    }

    set current(server: string) {
        localStorage.setItem('server', server);
    }

    get current() {
        return localStorage.getItem('server') || '0';
    }
}
