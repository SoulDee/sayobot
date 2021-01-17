import { Component, OnInit } from '@angular/core';
import { PlayMusicService, MusicItem } from '@app/core/service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'music-box',
    templateUrl: './music-box.component.html',
    styleUrls: ['./music-box.component.scss'],
})
export class MusicBoxComponent implements OnInit {
    isOpenList: boolean;
    mode: string = 'box';

    constructor(
        public musicBox: PlayMusicService,
        private breakPotintObserver: BreakpointObserver,
        private snackBar: MatSnackBar
    ) {
        this.isOpenList = false;
    }

    ngOnInit() {
        this.breakPotintObserver
            .observe([Breakpoints.XSmall])
            .subscribe((result) => {
                this.mode = result.matches ? 'box' : 'mini';
            });

        fromEvent(this.musicBox.musicEl, 'ended').subscribe(() => {
            this.musicBox.pause();
        });
    }

    get status() {
        return this.musicBox.isPlay ? 'pause_black' : 'play_arrow';
    }

    // 切换播放状态
    switchStatus() {
        if (this.musicBox.empty) {
            this.snackBar.open('select one music', 'Close', { duration: 2000 });
            return false;
        }
        this.musicBox.switch();
    }

    // 切换列表状态
    switchListBox() {
        this.isOpenList = !this.isOpenList;
    }

    // 在已有的列表中切歌
    playNow(music: MusicItem) {
        this.musicBox.playNow(music);
    }

    isMatch(music: MusicItem) {
        return this.musicBox.current === music;
    }
}
