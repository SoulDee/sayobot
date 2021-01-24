import { Component, OnInit } from '@angular/core';
import { SETTING_KEY, SETTING_DEFAULT_SERVER } from '@app/core/config';
import { ServerMangeService } from '@app/core/service';
import { StorageService } from '@app/core/service/storage.service';
import { ServerItem } from '@app/shared/models';
import { IResponse } from '@app/types';
import { Observable } from 'rxjs';

@Component({
    template: `
        <ng-container *ngIf="serveList$ | async as dataSourrce">
            <div class="page">
                <div class="options">
                    <mat-form-field>
                        <mat-select
                            placeholder="请选择服务器"
                            [(value)]="serverCode"
                            (selectionChange)="onServerSelect()"
                        >
                            <mat-option
                                *ngFor="let server of dataSourrce?.data"
                                [value]="server.server"
                            >
                                {{ server.server_nameU }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
        </ng-container>
    `,
    styles: [
        `
            .page {
                padding-top: 2rem;
            }
        `,
    ],
})
export class SettingComponent implements OnInit {
    serveList$: Observable<IResponse<ServerItem[]>>;
    serverCode: string;

    constructor(
        private serverManage: ServerMangeService,
        private storage: StorageService
    ) {}

    ngOnInit() {
        this.serveList$ = this.serverManage.getServerList();
        this.serverCode =
            this.storage.getChild(SETTING_KEY, 'server') ||
            SETTING_DEFAULT_SERVER;
    }

    onServerSelect() {
        this.storage.saveChild(SETTING_KEY, 'server', this.serverCode);
    }
}
