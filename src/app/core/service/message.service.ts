import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notice } from '@app/shared/models';
import { API_CONFIG } from '../providers/api';
import { IResponse } from '@app/types';
@Injectable({
    providedIn: 'root',
})
export class MessageService {
    constructor(
        @Inject(API_CONFIG) private api: string,
        private http: HttpClient
    ) {}

    getNewList() {
        return this.http.get<IResponse<Notice[]>>(`${this.api}/notice`);
    }
}
