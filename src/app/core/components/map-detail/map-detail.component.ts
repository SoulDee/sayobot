import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PlayMusicService } from 'app/core/service/PlayMusicService';
import { DownloadService } from 'app/core/service/Download';
import { ServerMangeService } from 'app/core/service/ServerMange';

@Component({
    selector: 'app-map-detail',
    templateUrl: './map-detail.component.html',
    styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {
    // API
    mapUrl = 'https://osu.sayobot.cn/osu.php?s=';                   // 下载
    mapUrlV2 = 'https://txy1.sayobot.cn/download/osz/';             // 下载V2
    mapUnVedio = 'https://txy1.sayobot.cn/download/osz/novideo/';   // 下载不带视频
    addMapUrl = 'https://sayo.sayobot.cn/add/';                     // 上传到服务器
    filenameUrl = 'https://api.sayobot.cn/filename?1=';             // 获取name

    mapDetail: any;     // 铺面详情
    imgUrl: string;     // 图片链接
    parttime: any;      // 试听剩余时间

    // 下载状态
    isMapDownload = false;          // 是否正在下载
    isMapUnvedioDownload = false;   // 不带视频是否在下载

    // 定时器
    musicTimer: any;      // 音乐播放时间
    mapTimer: any;        // 铺面下载定时器
    mapUnvedioTimer: any; // 不带视频铺面下载

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private musicBox: PlayMusicService,
        private download: DownloadService,
        public serverMange: ServerMangeService
    ) { }

    // 点击下载事件
    onDownLoad(url: string) {
        this.download.downloadFile(`${url}${this.mapDetail.sid}?server=${this.serverMange.currentServer}`);
        this.isMapDownload = true;
        this.mapTimer = setTimeout(() => {
            this.isMapDownload = false;
            clearTimeout(this.mapTimer);
        }, 15000);
    }

    // 点击下载不带视频的事件
    onUnvedioDownload(url: string) {
        this.download.downloadFile(this.mapDetail.sid);
        this.isMapUnvedioDownload = true;
        this.mapUnvedioTimer = setTimeout(() => {
            this.isMapUnvedioDownload = false;
            clearTimeout(this.mapUnvedioTimer);
        }, 15000);
    }

    // 试听歌曲
    playPart() {
        this.musicBox.play();
        this.parttime = Math.floor(this.musicBox.musicEl.duration) - Math.floor(this.musicBox.musicEl.currentTime);
        this.musicTimer = setInterval(() => {
            this.parttime = Math.floor(this.musicBox.musicEl.duration) - Math.floor(this.musicBox.musicEl.currentTime) - 1;
            if (this.parttime === 0) {
                clearInterval(this.musicTimer);
                this.musicTimer = null;
            }
        }, 1000);
    }

    // 播放完整音乐
    playComplete() {
        console.log('播放了完整的音乐');
    }

    ngOnInit() {
        this.imgUrl = `https://cdn.sayobot.cn:25225/beatmaps/${this.data.id}/covers/cover.jpg?0`;
        this.mapDetail = this.data.content;
        this.musicBox.setSrc(this.data.id);
    }
}
