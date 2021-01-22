import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MusicPlayerService } from '../music-player.service';
import { addZore } from '@app/utils';

@Component({
    selector: 'player-progress',
    templateUrl: './player-progress.component.html',
    styleUrls: ['./player-progress.component.scss'],
})
export class PlayerProgressComponent implements OnInit {
    disabled: boolean = false;
    max: number = 0;
    value: number = 0;
    time: string = '00:00';

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

        fromEvent(this.player._player, 'canplay').subscribe(() => {
            this.max = this.player._player.duration;
            this.updateTime();
            setInterval(() => {
                if (this.player._player.readyState === 4) {
                    this.updateTime();
                }
            }, 1000);
        });
    }

    setCurrentTime() {
        this.player._player.currentTime = this.value;
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
