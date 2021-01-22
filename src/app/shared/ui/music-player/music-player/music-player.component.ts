import { Component, OnInit } from '@angular/core';
import { PLAYER_KEY } from '@app/core/config';
import { StorageService } from '@app/core/service/storage.service';
import { fromEvent } from 'rxjs';
import { MusicInstance } from '../music-player.model';
import { MusicPlayerService } from '../music-player.service';

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

    constructor(
        private player: MusicPlayerService,
        private storage: StorageService
    ) {
        const mode = storage.getChild<PlayerMode>(PLAYER_KEY, 'mode');
        this.mode = mode || 'mini';

        fromEvent(document.body, 'keyup').subscribe((res: KeyboardEvent) => {
            if (res.ctrlKey) {
                switch (res.key) {
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowRight':
                        this.next();
                        break;
                    default:
                        break;
                }
            }
        });
    }

    ngOnInit(): void {
        this.player.instance$.subscribe((res) => (this._current = res));
        this.player.playerList$.subscribe((res) => {
            this._playList = res;
            const index = this._current
                ? res.findIndex((ins) => ins.sid === this._current.sid)
                : 0;
            this.currentIndex = index === -1 ? 0 : index;
        });

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

    remoteIns(ins: MusicInstance) {
        if (ins === this._current) {
            this.player.pause();
            this.player.instance$.next(null);
        }

        this.player.remove(ins);
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
        this.storage.saveChild(PLAYER_KEY, 'mode', mode);
    }

    trackByFn(_index: number, ins: MusicInstance) {
        return ins.sid;
    }

    private get currentInstance() {
        return this._playList[this.currentIndex];
    }
}
