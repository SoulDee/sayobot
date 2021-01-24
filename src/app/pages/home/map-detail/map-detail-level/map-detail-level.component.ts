import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { MODE_META_OPTIONS } from '@app/core/config';
import { MapBidDetail } from '@app/shared/models';

@Component({
    selector: 'map-detail-level',
    templateUrl: './map-detail-level.component.html',
    styleUrls: ['./map-detail-level.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDetailLevelComponent implements OnInit {
    @Input() bidDataList: MapBidDetail[];
    @Output() switch: EventEmitter<MapBidDetail> = new EventEmitter();

    ngOnInit() {
        this.select(this.bidDataList[0]);
    }

    select(bidData: MapBidDetail) {
        this.switch.emit(bidData);
    }

    modeTip(map: MapBidDetail): string {
        return MODE_META_OPTIONS[map.mode];
    }
}
