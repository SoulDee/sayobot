import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

// 组件导入
import {
    AboutDialogComponent,
    HelpDialogComponent,
    MapDetailComponent,
    NotFoundMapDialogComponent,
    SupportSayobotComponent,
    UpdateLogDialogComponent
} from '../../components';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        public dialog: MatDialog
    ) { }

    supprot() {
        const supportDilog = this.dialog.open(
            SupportSayobotComponent, {
                maxHeight: '96%',
                width: '600px',
            });
    }

    // 打开帮助弹窗
    help() {
        const helpDialog = this.dialog.open(
            HelpDialogComponent, {
                maxWidth: '40vw'
            }
        );
    }

    // 打开关于小夜的弹窗
    about() {
        const aboutDialg = this.dialog.open(
            AboutDialogComponent, {
                maxHeight: '90vh',
                height: '90vh',
                maxWidth: '600px'
            });
    }

    // 打开更新日志的弹窗
    updateLog() {
        const UpdateLog = this.dialog.open(
            UpdateLogDialogComponent,
            {
                maxHeight: '90vh',
                height: '70vh',
                maxWidth: '600px'
            });
    }

    // 未找到
    notFoundMap(str) {
        const notFoundMap = this.dialog.open(
            NotFoundMapDialogComponent,
            {
                data: {
                    key: str,
                }
            }
        );
    }

    // 铺面详情
    mapDetail(id, detail) {
        const mapDetail = this.dialog.open(
            MapDetailComponent, {
                panelClass: 'no-padding-dialog',
                maxWidth: '96vw',
                maxHeight: '90vh',
                data: {
                    id: id,
                    content: detail
                }
            }
        );
    }
}
