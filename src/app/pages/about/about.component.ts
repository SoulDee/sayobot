import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
    config = {
        kq: 'https://osu.ppy.sh/forum/t/141240',
        imageMagick: 'http://www.imagemagick.org/script/index.php',
        useHelper: 'assets/img/home//qq-sayobot-help.png',
        sayoDown:
            'https://osu.sayobot.cn/%E5%B0%8F%E5%A4%9C%E3%81%AEosu!%E4%B8%8B%E8%BD%BD%E5%99%A8.exe',
        sayoRankDown:
            'https://osu.sayobot.cn/Ranked%e5%9c%b0%e5%9b%be%e4%b8%8b%e8%bd%bd%e5%99%a8.exe',
        buySayo:
            'https://item.taobao.com/item.htm?spm=a230r.1.14.3.77484d6fejowZc&id=579397618209&ns=1&abbucket=11#detail',
        sayoShowPngs: [
            'assets//img/home/Sayobot-O2-pic1.jpg',
            'assets//img/home/Sayobot-O2-pic2.jpg',
            'assets//img/home/Sayobot-O2-pic3.jpg',
            'assets//img/home/Sayobot-O2-pic4.jpg',
        ],
        qqGroup: 693190897,
        qqGroupPng: 'assets//img/home/sayobot-qq.jpg',
    };
}
