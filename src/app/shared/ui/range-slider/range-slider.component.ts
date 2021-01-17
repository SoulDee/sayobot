import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Range {
    low: number;
    high: number;
}

const RangeOpts: { [key: string]: Range } = {
    ten: {
        low: 0,
        high: 10,
    },
    hundred: {
        low: 0,
        high: 100,
    },
    thousand: {
        low: 0,
        high: 1000,
    },
};

const DefaulOpt = {
    floor: 0,
    ceil: 10,
    step: 0.1,
};

@Component({
    selector: 'sayo-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements OnInit {
    @Input() low: number;
    @Input() high: number;

    @Output() change = new EventEmitter<Range>();

    rangeOpt = 'ten';

    options: Options;

    lowValue = 0;
    highValue = 10;

    ngOnInit() {
        setTimeout(() => {
            this.lowValue = this.low;
            this.highValue = this.high;
            const range = this._getRange();
            this._updateOptions(range);
        }, 100);
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

    _changeValue() {
        this.change.emit({ low: this.lowValue, high: this.highValue });
    }

    _changeRange(type: string) {
        this._updateOptions(RangeOpts[type]);
    }
}
