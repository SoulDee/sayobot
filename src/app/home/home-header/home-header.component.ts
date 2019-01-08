import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../core/service/DialogService';

@Component({
    selector: 'home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

    constructor(
        public dialog: DialogService
    ) { }

    ngOnInit() {
    }

    // 打开支持小夜的弹窗
    openSupprotDialog = () => this.dialog.supprot();

    // 打开帮助弹窗
    openHelpDialg = () => this.dialog.help();

    // 打开关于小夜的弹窗
    openAboutDialog = () => this.dialog.about();

    // 打开更新日志的弹窗
    openUpdateLog = () => this.dialog.updateLog();
}
