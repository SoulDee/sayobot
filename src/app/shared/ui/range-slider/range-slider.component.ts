import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RangeItem } from '@app/types';

type Level = 'ten' | 'hundred' | 'thousand';
interface Range {
    low: number;
    high: number;
}

const RangeOpts: { [key: string]: Range } = {
    ten: { low: 0, high: 10 },
    hundred: { low: 0, high: 100 },
    thousand: { low: 0, high: 1000 },
};

const DefaulOpt = { floor: 0, ceil: 10, step: 0.1 };

@Component({
    selector: 'sayo-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements OnInit {
    @Input() low: number;
    @Input() high: number;
    @Input() checked: boolean = true;
    @Input() level: Level;

    @Output() change = new EventEmitter<RangeItem>();

    rangeOpt = 'ten';
    options: Options;
    _checked = true;
    lowValue = 0;
    highValue = 10;

    ngOnInit() {
        this.lowValue = this.low;
        this.highValue = this.high;
        this._checked = this.checked;

        setTimeout(() => {
            const range = this._getRange();
            this._updateOptions(range);
        }, 200);
    }

    _toggleState(checked: boolean) {
        this._checked = checked;
        this._changeValue();
    }

    _changeValue() {
        const rangeItem = {
            low: this.lowValue,
            high: this.highValue,
            checked: this._checked,
        };
        this.change.emit(rangeItem);
    }

    _changeRange(type: string) {
        this._updateOptions(RangeOpts[type]);
    }

    private _updateOptions(range: Range) {
        this.options = { ...DefaulOpt, floor: range.low, ceil: range.high };
    }

    private _getRange() {
        let range: Range;
        if (this.high <= 10) {
            range = RangeOpts.ten;
            this.rangeOpt = 'ten';
        } else if (this.high <= 100) {
            range = RangeOpts.hundred;
            this.rangeOpt = 'hundred';
        } else {
            range = RangeOpts.thousand;
            this.rangeOpt = 'thousand';
        }
        return range;
    }
}
