import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UpdataInstance {
    time: string;
    detail: string[];
}
@Injectable({
    providedIn: 'root',
})
export class UpdatedLogService {
    constructor(private http: HttpClient) {}

    getUpdatedData() {
        return this.http.get<UpdataInstance[]>('/assets/updateData.json');
    }
}
