import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SEARCH_SLIDER_KEY } from '@app/core/config';
import { StorageService } from '@app/core/service/storage.service';
import { RangeItem, RangeSlider } from '@app/types';

const SEARCH_RANGE_MAX = 1000;
const SEARCH_RANGE_MIN = 0;
@Component({
    selector: 'range-option',
    templateUrl: './range-option.component.html',
    styleUrls: ['./range-option.component.scss'],
})
export class RangeOptionComponent implements OnInit {
    @Input() rangeOpt: RangeSlider;
    @Output() change = new EventEmitter<Object>();

    private _checked!: boolean;
    get checked() {
        return this._checked;
    }
    set checked(checked: boolean) {
        this._checked = checked;
        this.handleChange();
    }

    private _low!: number;
    get low(): number {
        return this._low;
    }
    set low(n: number) {
        this._low = this.getLimit(n);
        this.handleChange();
    }

    private _high!: number;
    get high(): number {
        return this._high;
    }
    set high(n: number) {
        this._high = this.getLimit(n);
        this.handleChange();
    }

    constructor(private storage: StorageService) {}

    ngOnInit(): void {
        const sliderOpt = this.storage.getChild<RangeItem>(
            SEARCH_SLIDER_KEY,
            this.rangeOpt.key
        );
        this._checked = sliderOpt ? sliderOpt.checked : false;
        this.low = sliderOpt ? sliderOpt.low : this.rangeOpt.minDef;
        this.high = sliderOpt ? sliderOpt.high : this.rangeOpt.maxDef;
    }

    _handleRangeChange(rangeItem: RangeItem) {
        this.low = rangeItem.low;
        this.high = rangeItem.high;
        this.checked = rangeItem.checked;
    }

    private getLimit(n: number) {
        if (n <= SEARCH_RANGE_MIN) {
            return SEARCH_RANGE_MIN;
        } else if (n >= SEARCH_RANGE_MAX) {
            return SEARCH_RANGE_MAX;
        } else {
            return n;
        }
    }

    private handleChange() {
        const result = this.getResult();
        this.storage.saveChild(SEARCH_SLIDER_KEY, this.rangeOpt.key, result);
        this.change.emit(result);
    }

    private getResult() {
        return {
            low: Math.min(this.low, this.high),
            high: Math.max(this.low, this.high),
            checked: this.checked,
        };
    }
}
