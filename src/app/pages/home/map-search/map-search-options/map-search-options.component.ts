import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';
import { OPTIONS_META } from '@core/config';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Options, Option } from './options';

// TODO 国际化
// TODO 考虑在设置页面中添加选项的不同模式，select 下拉框，list 列表
// TODO 将选中的设置保存到 localstorage
@Component({
    selector: 'map-search-options',
    templateUrl: './map-search-options.component.html',
    styleUrls: ['./map-search-options.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapSearchOptionsComponent implements OnInit {
    options: Array<Options> = [];

    @Input() isShow: boolean = true;

    @Output() change: EventEmitter<string[]> = new EventEmitter<string[]>();

    constructor(private cdr: ChangeDetectorRef) {
        Object.keys(OPTIONS_META).forEach((value: string) => {
            this.options.push(new Options(OPTIONS_META[value]));
        });
    }

    ngOnInit() {
        this.changeOption();
    }

    optionsAllChange(event: MatCheckboxChange, options: Options) {
        event.checked ? options.allSelect() : options.allClose();
        this.cdr.markForCheck();
    }

    select(event: MatCheckboxChange, option: Option) {
        option.select(event.checked);
        this.cdr.markForCheck();
        this.changeOption();
    }

    changeOption() {
        const result = this.options.map((el) => el.key);
        this.change.emit(result);
    }
}
