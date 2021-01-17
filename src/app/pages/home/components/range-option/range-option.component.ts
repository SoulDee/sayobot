import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SEARCH_SLIDER_KEY } from '@app/core/config';
import { StorageService } from '@app/core/service/storage.service';
import { RangeItem, RangeSlider } from '@app/types';

@Component({
    selector: 'range-option',
    templateUrl: './range-option.component.html',
    styleUrls: ['./range-option.component.scss'],
})
export class RangeOptionComponent implements OnInit {
    @Input() rangeOpt: RangeSlider = {
        title: 'Start',
        key: 'start',
        min: 0,
        max: 10,
    };

    @Output() change = new EventEmitter<Object>();

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

        this.low = sliderOpt ? sliderOpt.low : 0;
        this.high = sliderOpt ? sliderOpt.high : 10;
    }

    private getLimit(n: number) {
        if (n <= this.rangeOpt.min) {
            return this.rangeOpt.min;
        } else if (n >= this.rangeOpt.max) {
            return this.rangeOpt.max;
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
        };
    }
}
