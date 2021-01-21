import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    DonationInfo,
    Supports,
    SupportDetails,
    SupportList2,
    SupportExpense,
    SupprtIncome,
} from '@app/shared/models';

const sum = (prev: number, current: number) => prev + current;

@Injectable({
    providedIn: 'root',
})
export class DonationService {
    BASE_URL = 'https://api.sayobot.cn/';
    total: number = 0; // 收入 - 支出
    target: number = 0; // 每月支出平均

    constructor(private http: HttpClient) {}

    getDonationInfo(): Observable<DonationInfo> {
        return this.http
            .get(`${this.BASE_URL}support`)
            .pipe(map((res: { data: DonationInfo }) => res.data));
    }

    getSupperList(): Observable<Supports[]> {
        return this.http
            .get(`${this.BASE_URL}static/supportlist`)
            .pipe(map((res: { data: Supports[] }) => res.data));
    }

    getSupperDetail(link: string): Observable<SupportDetails[]> {
        return this.http
            .get(link)
            .pipe(map((res: { data: SupportDetails[] }) => res.data));
    }

    getSupperV2() {
        return this.http.get(`${this.BASE_URL}v2/support`);
    }

    setDonationInfo(data: SupportList2[]) {
        this.total = this.getBalance(data);
        this.target = this.getFixed2(this.getAverage(data));
    }

    private getBalance(data: SupportList2[]) {
        const income = this.getFixed2(this.getTotal(data, 'income_details'));
        const expense = this.getFixed2(this.getTotal(data, 'expense_details'));
        return income - expense;
    }

    private getTotal(data: SupportList2[], type: string) {
        return data
            .map((item: SupportList2) => {
                if (item[type].length === 0) return 0;
                return item[type]
                    .map((item: SupportExpense | SupprtIncome) => {
                        if (type === 'income_details') {
                            return (item as SupprtIncome).rmb;
                        }
                        if (type === 'expense_details') {
                            return (item as SupportExpense).cost;
                        }
                    })
                    .reduce(sum);
            })
            .reduce(sum);
    }

    private getAverage(data: SupportList2[]): number {
        return this.getTotal(data, 'expense_details') / data.length;
    }

    private getFixed2(n: number) {
        return Number(n.toFixed(2));
    }
}
