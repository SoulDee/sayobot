import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { downloadFile } from '@app/utils';
import { BigPictureComponent } from './big-picture.component';

@Component({
    templateUrl: './software.component.html',
    styleUrls: ['./software.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoftwareComponent {
    softwareList = [
        {
            icon: {
                type: 'icon',
                name: 'assets/img/common/device_setting.png',
            },
            title: 'Sayo Device',
            des: '个性化您的键盘！',
            download: 'https://dl.sayobot.cn/setting.zip',
        },
        {
            icon: {
                type: 'icon',
                name: 'assets/img/common/device_setting_v2.jpg',
            },
            title: 'Sayo Device v2',
            des: '更友好的 UI 设计和交互设计',
            download: 'https://dl.sayobot.cn/setting_v2.zip',
        },
        {
            icon: { type: 'icon', name: 'assets/img/common/osu-icon.png' },
            title: 'osu! 离线客户端',
            des: 'osu! 官方客户端的打包，包括几张地图',
            download: 'https://dl.sayobot.cn/osu.zip',
        },
        {
            icon: { type: 'icon', name: 'assets/img/common/download-icon.png' },
            title: 'osu! 地图下载器',
            des: '一键下载全 Ranked 图包、指定 mapper 下载、爆 bp 等',
            download:
                'https://osu.sayobot.cn/Ranked%e5%9c%b0%e5%9b%be%e4%b8%8b%e8%bd%bd%e5%99%a8.exe',
        },
        {
            icon: { type: 'icon', name: 'assets/img/common/download-icon.png' },
            title: 'Beatmap Service',
            des: 'Android 端 osu! 地图下载器',
            download: 'https://osu.sayobot.cn/qiafan/beatmapservice.apk',
            qrcode:
                'https://osu.sayobot.cn/download/ass/img/beatmap_service_QR_code.png',
        },
    ];

    constructor(private dialog: MatDialog) {}

    download(url: string) {
        downloadFile(url);
    }

    openBigPicture(url: string) {
        this.dialog.open(BigPictureComponent, { data: { url } });
    }
}
