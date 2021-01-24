import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GENRE_META_OPTIONS, LANGUAGE_META_OPTIONS } from '@app/core/config';
import { Approved, MapBidDetail, MapSidDetail } from '@app/shared/models';
@Component({
    selector: 'map-detail-info',
    templateUrl: './map-detail-info.component.html',
    styleUrls: ['./map-detail-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDetailInfoComponent {
    @Input() detail: MapSidDetail;
    @Input() info: MapBidDetail;

    getLanguage(index: string) {
        return LANGUAGE_META_OPTIONS[index];
    }

    getGenre(index: string) {
        return GENRE_META_OPTIONS[index];
    }

    get approved() {
        return Approved[this.detail.approved];
    }
}
