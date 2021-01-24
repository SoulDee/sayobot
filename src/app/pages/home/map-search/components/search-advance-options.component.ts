import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryOptions, RangeSlider } from '@app/types';
import { SEARCH_OPTIONS_CATEGORY, SEARCH_RANGE_OPTIONS } from '@core/config';

@Component({
    template: `
        <div matDialogTitle>高级选项</div>

        <div matDialogContent>
            <ng-container *ngFor="let categoryOpt of categoryList">
                <category-options
                    [categoryList]="categoryOpt"
                ></category-options>
            </ng-container>

            <ng-container *ngFor="let range of rangeList">
                <range-option [rangeOpt]="range"></range-option>
            </ng-container>
        </div>

        <div MatDialogActions align="right">
            <button mat-raised-button color="accent" (click)="search()">
                搜索
            </button>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAdvanceOptionsComponent {
    categoryList: CategoryOptions[] = SEARCH_OPTIONS_CATEGORY;
    rangeList: RangeSlider[] = SEARCH_RANGE_OPTIONS;

    constructor(
        private _dialogRef: MatDialogRef<SearchAdvanceOptionsComponent>
    ) {}

    search() {
        this._dialogRef.close({ success: true });
    }
}
