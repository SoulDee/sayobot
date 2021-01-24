import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UpdataInstance, UpdatedLogService } from '@app/core/service';
import { Observable } from 'rxjs';

@Component({
    template: `
        <ng-container *ngIf="updateData$ | async as dataSource">
            <mat-list>
                <ng-container *ngFor="let updata of dataSource">
                    <div mat-subheader>{{ updata.time }}</div>
                    <mat-list-item *ngFor="let item of updata.detail">
                        <div mat-line>{{ item }}</div>
                    </mat-list-item>
                    <mat-divider></mat-divider>
                </ng-container>
            </mat-list>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnInit {
    updateData$: Observable<UpdataInstance[]>;

    constructor(private updated: UpdatedLogService) {}

    ngOnInit() {
        this.updateData$ = this.updated.getUpdatedData();
    }
}
