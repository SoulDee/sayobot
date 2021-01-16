import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryOptions, RangeSlider } from '@app/types';
import { SEARCH_OPTIONS_CATEGORY, SEARCH_RANGE_OPTIONS } from '@core/config';

@Component({
    selector: 'app-search-advance-options',
    templateUrl: './search-advance-options.component.html',
    styleUrls: ['./search-advance-options.component.scss'],
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
