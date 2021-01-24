import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerItem } from '@app/shared/models';
import { API_CONFIG } from '../providers/api';
import { IResponse } from '@app/types';

@Injectable({
    providedIn: 'root',
})
export class ServerMangeService {
    constructor(
        @Inject(API_CONFIG) private api: string,
        private http: HttpClient
    ) {}

    getServerList() {
        return this.http.get<IResponse<ServerItem[]>>(
            `${this.api}/static/servers`
        );
    }
}
