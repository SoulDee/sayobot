import {
    Component,
    OnInit,
    Inject,
    OnDestroy,
    ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { downloadFile } from '@app/utils';
import { MapSidDetail, MapBidDetail } from '@app/shared/models';
import { Clipboard } from '@angular/cdk/clipboard';
import { MusicPlayerService } from '@app/shared/ui/music-player/music-player.service';
import { StorageService } from '@app/core/service/storage.service';
import { SETTING_KEY, SETTING_DEFAULT_SERVER } from '@app/core/config';

@Component({
    selector: 'map-detail-container',
    templateUrl: './map-detail-container.component.html',
    styleUrls: ['./map-detail-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDetailContainerComponent implements OnInit, OnDestroy {
    BASE_URL = 'https://txy1.sayobot.cn/beatmaps/download/';
    mapDetail: MapSidDetail; // 铺面详情
    imgUrl: string; // 图片链接

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
        private _dialog: MatDialogRef<MapDetailContainerComponent>,
        private player: MusicPlayerService,
        private snackBar: MatSnackBar,
        private clipboard: Clipboard,
        private storage: StorageService
    ) {}

    ngOnInit() {
        this.mapDetail = this.data.content;
        this.detailInfo = this.mapDetail.bid_data[0];
        this.imgUrl = `https://a.sayobot.cn/beatmaps/${this.mapDetail.sid}/covers/cover.webp?0`;
    }

    close() {
        this._dialog.close();
    }

    get link() {
        return `http://osugame.online/preview.html?sid=${this.mapDetail.sid}&bid=${this.detailInfo.bid}`;
    }

    // 点击下载事件
    onDownLoad(url: string) {
        downloadFile(
            `${this.BASE_URL}${url}/${
                this.mapDetail.sid
            }?server=${this.getServer()}`
        );

        this.isMapDownload = true;
        this.mapTimer = setTimeout(() => {
            this.isMapDownload = false;
            clearTimeout(this.mapTimer);
        }, 15000);
    }

    // 点击下载不带视频的事件
    onUnvedioDownload(url: string) {
        downloadFile(
            `${this.BASE_URL}${url}/${
                this.mapDetail.sid
            }?server=${this.getServer()}`
        );
        this.isMapUnvedioDownload = true;
        this.mapUnvedioTimer = setTimeout(() => {
            this.isMapUnvedioDownload = false;
            clearTimeout(this.mapUnvedioTimer);
        }, 15000);
    }

    play() {
        const ins = {
            title: this.mapDetail.title,
            sid: this.mapDetail.sid,
            url: `https://dl.sayobot.cn/beatmaps/files/${this.mapDetail.sid}/${this.detailInfo.audio}`,
            bg: `https://a.sayobot.cn/beatmaps/${this.mapDetail.sid}/covers/cover.webp?0`,
        };
        this.player.add(ins);
    }

    shared() {
        const sharedInfo = `https://osu.sayobot.cn/?search=${this.mapDetail.sid}`;
        this.clipboard.copy(sharedInfo);
        this.snackBar.open('已复制：', sharedInfo);
    }

    ngOnDestroy() {
        clearTimeout(this.mapTimer);
        clearTimeout(this.musicTimer);
    }

    private getServer() {
        return (
            this.storage.getChild(SETTING_KEY, 'server') ||
            SETTING_DEFAULT_SERVER
        );
    }
}
