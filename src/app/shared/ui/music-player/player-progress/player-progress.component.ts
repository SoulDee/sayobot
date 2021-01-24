import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicPlayerService } from '../music-player.service';
import { addZore } from '@app/utils';

@Component({
    selector: 'player-progress',
    templateUrl: './player-progress.component.html',
    styleUrls: ['./player-progress.component.scss'],
})
export class PlayerProgressComponent implements OnInit, OnDestroy {
    disabled: boolean = false;
    max: number = 0;
    value: number = 0;
    time: string = '00:00';

    timer: any;

    constructor(public player: MusicPlayerService) {}

    ngOnInit(): void {
        this.player.instance$.subscribe((res) => {
            if (!res) {
                this.max = 0;
                this.time = '00:00';
                this.value = 0;
                this.disabled = true;
            } else {
                this.disabled = false;
            }
        });

        this.checkCanPlay();
        this.timer = setInterval(() => {
            this.checkCanPlay();
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.timer);
        this.timer = null;
    }

    setCurrentTime() {
        this.player._player.currentTime = this.value;
    }

    private checkCanPlay() {
        if (this.player._player.duration) {
            this.max = this.player._player.duration;
            this.updateTime();
        }
    }

    private updateTime() {
        this.value = this.player._player.currentTime;
        const diff = Math.floor(
            this.player._player.duration - this.player._player.currentTime
        );
        this.time = this.format(diff);
    }

    private format(n: number): string {
        const minute = addZore(Math.floor(n / 60));
        const second = addZore(n % 60);
        return `${minute}:${second}`;
    }
}
