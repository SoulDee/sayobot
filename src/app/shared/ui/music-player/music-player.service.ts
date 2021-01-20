import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MusicInstance } from './music-player.model';

@Injectable({
    providedIn: 'root',
})
export class MusicPlayerService {
    _player = new Audio();

    playerList: MusicInstance[] = [];

    playerList$ = new ReplaySubject<MusicInstance[]>(1);
    instance$ = new ReplaySubject<MusicInstance>(1);
    isPlay$ = new ReplaySubject<boolean>(1);

    constructor() {
        this._player.preload = 'auto';
    }

    play() {
        this._player.play();
        this.isPlay$.next(true);
    }

    pause() {
        this._player.pause();
        this.isPlay$.next(false);
    }

    select(ins: MusicInstance) {
        this._player.src = ins.url;
        this.instance$.next(ins);
        this.play();
    }

    add(ins: MusicInstance) {
        const isHas = this.playerList.find((item) => item.sid === ins.sid);
        if (!isHas) {
            this.playerList = [...this.playerList, ins];
            this.playerList$.next(this.playerList);
        }

        this.select(ins);
    }

    remove(ins: MusicInstance) {
        this.playerList = this.playerList.filter(
            (item) => item.sid !== ins.sid
        );
        this.playerList$.next(this.playerList);
    }

    clear() {
        this.playerList = [];
        this.playerList$.next(this.playerList);
    }
}
