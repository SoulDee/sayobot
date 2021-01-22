import { Component } from '@angular/core';
import { PLAYER_KEY } from '@app/core/config';
import { StorageService } from '@app/core/service/storage.service';
import { MusicPlayerService } from '../music-player.service';

@Component({
    selector: 'player-volume-control',
    templateUrl: './player-volume-control.component.html',
    styleUrls: ['./player-volume-control.component.scss'],
})
export class PlayerVolumeControlComponent {
    value: number;

    constructor(
        private player: MusicPlayerService,
        private storage: StorageService
    ) {
        this.value = Number(storage.getChild<number>(PLAYER_KEY, 'volume'));
        this.setVolume();
    }

    setQuiet() {
        this.savePrevVolume(this.value);
        this.value = 0;
        this.setVolume();
    }

    openVolume() {
        this.value =
            this.storage.getChild<number>(PLAYER_KEY, 'prevVolume') || 50;
        this.setVolume();
    }

    setVolume() {
        this.storage.saveChild(PLAYER_KEY, 'volume', this.value);
        this.player.setVolume(this.value / 100);
    }

    private savePrevVolume(n: number) {
        this.storage.saveChild(PLAYER_KEY, 'prevVolume', this.value);
    }
}
