import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchAdvanceOptionsComponent } from '../../components';

type KeyWords = number | string;

@Component({
    selector: 'map-search-box',
    templateUrl: './map-search-box.component.html',
    styleUrls: ['./map-search-box.component.scss'],
})
export class MapSearchBoxComponent {
    @Input() keyWords: KeyWords;
    @Output() search = new EventEmitter<KeyWords>();
    @Output() optChange = new EventEmitter<Object>();

    constructor(private _dialog: MatDialog) {}

    onSearch(keyWords: KeyWords) {
        this.search.emit(keyWords);
    }

    openAdvanceOptions() {
        this._dialog.open(SearchAdvanceOptionsComponent);
    }
}
