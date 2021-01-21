import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class UpdateData {
    time: string;
    detail: string[];
}

const config = {
    updateUrl: '/assets/updateData.json'
};

@Injectable({
    providedIn: 'root'
})
export class UpdatedLogService {
    constructor(private http: HttpClient) {}

    getUpdatedData(): Observable<UpdateData[]> {
        return this.http
            .get(config.updateUrl)
            .pipe(map((res: { data: UpdateData[] }) => res.data));
    }
}
