import { Component, OnInit } from '@angular/core';
import { SupportList2, SupportExpense, SupprtIncome } from '@app/shared/models';
import { DonationService } from '@app/core/service';
import { sum } from '@app/utils/math.utils';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
    displayedIncomeColumns: string[] = ['name', 'from', 'rmb', 'time', 'msg'];
    displayedExpenseColumns: string[] = ['item', 'cost', 'note'];
    dataSource: SupportExpense[] | SupprtIncome[] = [];
    supportList: SupportList2[];

    currentLink: string;
    currentType: string = 'income_details';

    loading: boolean;

    currentIncome: number = 0;
    currentExpense: number = 0;

    constructor(private donation: DonationService) {
        this.loading = true;
    }

    ngOnInit() {
        this.donation
            .getSupperV2()
            .subscribe((res: { data: SupportList2[] }) => {
                const firstMonth = res.data[0];
                this.supportList = res.data;
                this.currentLink = firstMonth.title;
                this.dataSource = firstMonth[this.currentType];
                this.changeCurrentData(firstMonth);
                this.loading = false;
            });
    }

    changeCurrentData(data: SupportList2) {
        this.currentExpense =
            data.expense_details.length > 0
                ? Number(
                      data.expense_details
                          .map((item: SupportExpense) => item.cost)
                          .reduce(sum)
                          .toFixed(2)
                  )
                : 0;

        this.currentIncome =
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
        const match = this.supportList.filter(
            (item: SupportList2) => item.title === this.currentLink
        )[0];
        this.dataSource = match[this.currentType];
        this.changeCurrentData(match);
    }
}
