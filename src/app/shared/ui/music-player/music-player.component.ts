import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MusicInstance } from './music-player.model';
import { MusicPlayerService } from './music-player.service';

type PlayerMode = 'icon' | 'mini';
@Component({
    selector: 'sayo-music-player',
    templateUrl: './music-player.component.html',
    styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
    _playList: MusicInstance[] = [];
    _current: MusicInstance;
    currentIndex: number = 0;
    isOpenQueue: boolean = false;
    isPlay: boolean = false;

    mode: PlayerMode;

    constructor(public player: MusicPlayerService) {
        const mode = localStorage.getItem('playerMode') as PlayerMode;
        this.mode = mode || 'mini';
    }

    ngOnInit(): void {
        this.player.playerList$.subscribe((res) => {
            this._playList = res;
            this.currentIndex = res.length - 1;
        });
        this.player.instance$.subscribe((res) => (this._current = res));
        this.player.isPlay$.subscribe((res) => (this.isPlay = res));

        fromEvent(this.player._player, 'ended').subscribe(() => this.next());
    }

    play() {
        if (this._current) {
            this.player.play();
        }
    }

    pause() {
        this.player.pause();
    }

    selectAndPlay(ins: MusicInstance, index: number) {
        this.currentIndex = index;
        this.player.select(ins);
    }

    prev() {
        if (this._playList.length <= 1) return;
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this._playList.length - 1;
        }

        this.selectAndPlay(this.currentInstance, this.currentIndex);
    }

    next() {
        if (this._playList.length <= 1) return;
        this.currentIndex += 1;
        if (this.currentIndex > this._playList.length - 1) {
            this.currentIndex = 0;
        }

        this.selectAndPlay(this.currentInstance, this.currentIndex);
    }

    changePlayerMode(mode: string) {
        this.mode = mode as PlayerMode;
        localStorage.setItem('playerMode', mode);
    }

    trackByFn(_index: number, ins: MusicInstance) {
        return ins.sid;
    }

    private get currentInstance() {
        return this._playList[this.currentIndex];
    }
}
