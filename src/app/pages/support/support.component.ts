import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { SupportList2, SupportExpense, SupprtIncome } from '@app/shared/models';
import { DonationService } from '@app/core/service';
import { sum } from '@app/utils/math.utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportComponent implements OnInit, OnDestroy {
    displayedIncomeColumns: string[] = ['name', 'from', 'rmb', 'time', 'msg'];
    displayedExpenseColumns: string[] = ['item', 'cost', 'note'];
    dataSource: SupportExpense[] | SupprtIncome[] = [];
    supportList: SupportList2[];

    currentLink: string;
    currentType: string = 'income_details';

    loading: boolean = true;

    income: number = 0;
    expense: number = 0;

    destory$ = new Subject();

    constructor(
        private donation: DonationService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.donation
            .getSupperV2()
            .pipe(takeUntil(this.destory$))
            .subscribe((res) => {
                const firstMonth = res.data[0];
                this.supportList = res.data;
                this.currentLink = firstMonth.title;
                this.dataSource = firstMonth[this.currentType];
                this.changeCurrentData(firstMonth);
                this.loading = false;
                this.cdr.markForCheck();
            });
    }

    changeCurrentData(data: SupportList2) {
        this.expense =
            data.expense_details.length > 0
                ? Number(
                      data.expense_details
                          .map((item: SupportExpense) => item.cost)
                          .reduce(sum)
                          .toFixed(2)
                  )
                : 0;

        this.income =
            data.income_details.length > 0
                ? Number(
                      data.income_details
                          .map((item: SupprtIncome) => item.rmb)
                          .reduce(sum)
                          .toFixed(2)
                  )
                : 0;
    }

    onSelectLink() {
        const match = this.supportList.find(
            (item) => item.title === this.currentLink
        );
        this.dataSource = match[this.currentType];
        this.changeCurrentData(match);
    }

    ngOnDestroy() {
        this.destory$.next();
        this.destory$.complete();
    }
}
