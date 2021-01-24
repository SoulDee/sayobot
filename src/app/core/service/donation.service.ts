import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../providers/api';
import { IResponse } from '@app/types';
import { SupportList2 } from '@app/shared/models';

@Injectable({
    providedIn: 'root',
})
export class DonationService {
    constructor(
        @Inject(API_CONFIG) private api: string,
        private http: HttpClient
    ) {}

    getSupperV2() {
        return this.http.get<IResponse<SupportList2[]>>(
            `${this.api}/v2/support`
        );
    }
}
