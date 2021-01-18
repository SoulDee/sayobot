import { Component, OnInit } from '@angular/core';
import { ServerMangeService } from '@app/core/service';
import { ServerItem } from '@app/shared/models';

// TODO 设置项添加：是否打开 tip 小提示，让使用者可以关闭
@Component({
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
    serveList: ServerItem[];

    serverCode: string;

    constructor(public serverManage: ServerMangeService) {}

    ngOnInit() {
        this.serverManage.getServerList().subscribe((res: ServerItem[]) => {
            this.serveList = res;
            this.serverCode = this.serverManage.current;
        });
    }

    onServerSelect() {
        this.serverManage.current = this.serverCode;
    }
}
