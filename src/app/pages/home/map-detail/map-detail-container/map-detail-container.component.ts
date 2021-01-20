import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlayMusicService, MusicItem } from '@app/core/service';
import { downloadFile } from '@app/utils';
import { MapSidDetail, MapBidDetail } from '@app/shared/models';
import { Clipboard } from '@angular/cdk/clipboard';

// TODO 考虑将 level tags info 使用更好的写法来取消拆分
@Component({
    selector: 'map-detail-container',
    templateUrl: './map-detail-container.component.html',
    styleUrls: ['./map-detail-container.component.scss'],
})
export class MapDetailContainerComponent implements OnInit, OnDestroy {
    BASE_URL = 'https://txy1.sayobot.cn/beatmaps/download/';
    mapDetail: MapSidDetail; // 铺面详情
    imgUrl: string; // 图片链接
    parttime: number; // 试听剩余时间
    detailInfo: MapBidDetail;

    // 下载状态
    isMapDownload = false; // 是否正在下载
    isMapUnvedioDownload = false; // 不带视频是否在下载

    // 定时器
    musicTimer = null; // 音乐播放时间
    mapTimer = null; // 铺面下载定时器
    mapUnvedioTimer = null; // 不带视频铺面下载

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService,
        private snackBar: MatSnackBar,
        private clipboard: Clipboard
    ) {}

    ngOnInit() {
        this.mapDetail = this.data.content;
        this.detailInfo = this.mapDetail.bid_data[0];
        this.imgUrl = `https://a.sayobot.cn/beatmaps/${this.mapDetail.sid}/covers/cover.webp?0`;
    }

    get link() {
        return `http://osugame.online/preview.html?sid=${this.mapDetail.sid}&bid=${this.detailInfo.bid}`;
    }

    // 点击下载事件
    onDownLoad(url: string) {
        const server = localStorage.getItem('server');
        downloadFile(
            `${this.BASE_URL}${url}/${this.mapDetail.sid}?server=${server}`
        );

        this.isMapDownload = true;
        this.mapTimer = setTimeout(() => {
            this.isMapDownload = false;
            clearTimeout(this.mapTimer);
        }, 15000);
    }

    // 点击下载不带视频的事件
    onUnvedioDownload(url: string) {
        const server = localStorage.getItem('server');
        downloadFile(
            `${this.BASE_URL}${url}/${this.mapDetail.sid}?server=${
                server || '0'
            }`
        );
        this.isMapUnvedioDownload = true;
        this.mapUnvedioTimer = setTimeout(() => {
            this.isMapUnvedioDownload = false;
            clearTimeout(this.mapUnvedioTimer);
        }, 15000);
    }

    // 试听歌曲
    playPart() {
        this.musicBox.switchAndPlay(
            new MusicItem({
                title: this.mapDetail.title,
                id: this.mapDetail.sid,
            })
        );
        this.parttime =
            Math.floor(this.musicBox.musicEl.duration) -
            Math.floor(this.musicBox.musicEl.currentTime);
        this.musicTimer = setInterval(() => {
            this.parttime =
                Math.floor(this.musicBox.musicEl.duration) -
                Math.floor(this.musicBox.musicEl.currentTime) -
                1;
            if (this.parttime === 0) {
                clearInterval(this.musicTimer);
                this.musicTimer = null;
            }
        }, 1000);
    }

    // 将当前铺面复制到剪切板
    shared() {
        const sharedInfo = `https://osu.sayobot.cn/?search=${this.mapDetail.sid}`;
        this.clipboard.copy(sharedInfo);
        this.snackBar.open('已复制：', sharedInfo);
    }

    ngOnDestroy() {
        clearTimeout(this.mapTimer);
        clearTimeout(this.musicTimer);
    }
}
