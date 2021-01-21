import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notice } from '@app/shared/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.sayobot.cn';
@Injectable({
    providedIn: 'root'
})
export class MessageService {
    supportInfo: any;
    notices: Notice[];

    constructor(private http: HttpClient) {}

    getNewList(): Observable<Notice[]> {
        return this.http
            .get(`${BASE_URL}/notice`)
            .pipe(map((res: { data: Notice[] }) => res.data));
    }
}
