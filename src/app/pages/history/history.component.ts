import { Component, OnInit } from '@angular/core';
import { UpdatedLogService, UpdateData } from '@app/core/service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-history',
    template: `
        <div class="page" *ngIf="updateData">
            <mat-list>
                <ng-container *ngFor="let updata of updateData">
                    <div mat-subheader>{{ updata.time }}</div>
                    <mat-list-item *ngFor="let item of updata.detail">
                        <div mat-line>{{ item }}</div>
                    </mat-list-item>
                    <mat-divider></mat-divider>
                </ng-container>
            </mat-list>
        </div>
    `,
})
export class HistoryComponent implements OnInit {
    updateData: UpdateData[];

    constructor(private updated: UpdatedLogService) {}

    ngOnInit() {
        this.updated.getUpdatedData().subscribe((res: UpdateData[]) => {
            this.updateData = res;
        });
    }
}
