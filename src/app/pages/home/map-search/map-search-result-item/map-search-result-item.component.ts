import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';
import { PreMap, Approved, MapSidDetail } from '@app/shared/models';
import { downloadFile } from '@app/utils';
import { PlayMusicService, MusicItem, MapService } from '@app/core/service';
import { MatDialog } from '@angular/material/dialog';
import { MapDetailContainerComponent } from '@pages/home/map-detail/map-detail-container';
import { MODES_CONFIG } from './modes.meta';

@Component({
    selector: 'map-search-result-item',
    templateUrl: './map-search-result-item.component.html',
    styleUrls: ['./map-search-result-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapSearchResultItemComponent implements OnInit {
    @Input() map: PreMap;

    constructor(
        private musicBox: PlayMusicService,
        private dialog: MatDialog,
        private mapServe: MapService
    ) {}

    ngOnInit() {}

    get imgSrc(): string {
        return `https://a.sayobot.cn/beatmaps/${this.map.sid}/covers/cover.webp?0`;
    }

    get status(): string {
        return Approved[this.map.approved];
    }

    get modes(): string[] {
        const types = ['std', 'taiko', 'catch', 'mania'];
        const result = types.filter((type: string) =>
            MODES_CONFIG[type].includes(this.map.modes)
        );
        return result;
    }

    download(): void {
        const server = localStorage.getItem('server');
        downloadFile(
            `https://txy1.sayobot.cn/beatmaps/download/full/${this.map.sid}?server=${server}`
        );
    }

    addToMusicQueue(): void {
        this.musicBox.switchAndPlay(
            new MusicItem({
                title: this.map.title,
                id: this.map.sid,
            })
        );
    }

    openWithDetail() {
        this.mapServe
            .getMapInfo(this.map.sid)
            .subscribe((res: MapSidDetail) => {
                this.dialog.open(MapDetailContainerComponent, {
                    panelClass: 'common-dialog',
                    data: { content: res },
                    width: '1300px',
                    maxWidth: '100vw',
                });
            });
    }
}
