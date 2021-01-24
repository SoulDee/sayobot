import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-help-dialog',
    template: `
        <div class="help-box">
            <h1 mat-dialog-title>使用帮助</h1>
            <mat-dialog-content>
                <p class="content">
                    Sayobot.cn是全球最大、地图存储量最多（超过2000GB）的第三方osu!镜像站（不接受反驳，血猫全站才300GB多一点，且无法下载收藏数量小于2的图包或最新上传的图），
                    致力于为广大玩家提供osu!周边的服务，包括但不限于osu!地图的搜索下载、提供osu!外设（小键盘和数位板）、图包&皮肤分享/下载、osu!
                    QQ机器人等。本网站由_BlackC（夜麻麻）和SoulDee等人共同维护（SoulDee：_BlackC你的API又双叒叕炸掉了）
                </p>

                <p class="content">
                    没有登陆要求，没有冷却时间，更没有反人类的搜索设定！可以下载包括Ranked、Unrank、WIP和坟图在内的任何地图！（已被官方删除的图如果无法下载请上传到
                    <a
                        class="link-btn"
                        href="https://sayo.sayobot.cn/kod"
                        target="_black"
                        >这里</a
                    >，看到后会手动添加）
                </p>

                <p class="content">
                    你可以在搜索框中粘贴地址链接、输入地图id来精确定位地图，或者输入其他关键词来获取一个地图列表，
                    包括但不限于标题、作曲家、作图者、标签、难度名等。或者，使用更方便简单的插件从官网直达，
                    点击
                    <a
                        class="link-btn"
                        href="https://osu.sayobot.cn"
                        target="_black"
                        >这里</a
                    >了解更多
                </p>

                <p class="content">
                    如果有其他的问题或者建议，请发送邮件到<span
                        class="high-light-text"
                        >Sayobot@qq.com</span
                    >或加群<span class="high-light-text">807472391</span
                    >和群主取得联系。
                </p>

                <p class="content">
                    如果页面变成空白或无法使用，请及时加群<span
                        class="high-light-text"
                        >807472391</span
                    >反馈，谢谢。一般故障会在几分钟内恢复。你可以暂时使用其他网站如
                    <a
                        class="link-btn"
                        href="https://bloodcat.com/osu"
                        target="_black"
                        >血猫</a
                    >&nbsp;
                    <a class="link-btn" href="http://inso.link" target="_black"
                        >inso</a
                    >
                </p>

                <p class="content">
                    运营这个镜像站要好多好多好多钱啊！！！！！如果有能力的话还是支持一下把！点击右上角的支持来为Sayobot的稳定运行贡献一份力量！
                </p>
            </mat-dialog-content>

            <div class="no-show">
                <mat-checkbox [(ngModel)]="checked" (change)="statusChange()"
                    >不再显示(可以从右上角再次打开)</mat-checkbox
                >
            </div>

            <mat-dialog-actions>
                <div class="flex-center actions">
                    <button mat-raised-button color="accent" mat-dialog-close>
                        确定
                    </button>
                </div>
            </mat-dialog-actions>
        </div>
    `,
    styles: [
        `
            .content {
                text-indent: 2rem;
                line-height: 2rem;
            }

            .no-show {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

            .actions {
                padding: 2em;
                width: 100%;
            }

            .link-btn {
                display: inline-block;
                text-align: center;
                padding: 0 0.5em;
                text-indent: 0;
                border: 1px solid #000;
                border-radius: 5px;
                margin: 0 5px;
                color: #ad2b58;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpDialogComponent implements OnInit {
    checked: boolean;

    ngOnInit() {
        this.checked = localStorage.getItem('isShow') === 'true' ? true : false;
    }

    statusChange() {
        localStorage.setItem('isShow', this.checked.toString());
    }
}
