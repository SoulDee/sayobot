import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';
import { MessageService } from '@app/core/service';
import { Notice } from '@app/shared/models';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { IResponse } from '@app/types';
import { takeUntil, throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app-announce',
    template: `
        <ng-container *ngIf="messages$ | async as dataSource">
            <div class="announce-container" [style.width]="wrapperWidth">
                <div class="header">
                    <span class="title">Message</span>
                    <button mat-stroked-button (click)="close.emit()">
                        Close
                    </button>
                </div>

                <mat-accordion>
                    <mat-expansion-panel *ngFor="let item of dataSource.data">
                        <mat-expansion-panel-header>
                            <mat-panel-title>
                                {{ item.title }}
                            </mat-panel-title>
                            <mat-panel-description>
                                Time： {{ item.date }}
                            </mat-panel-description>
                        </mat-expansion-panel-header>

                        <div class="content">
                            {{ item.content }}
                        </div>
                    </mat-expansion-panel>
                </mat-accordion>
            </div>
        </ng-container>
    `,
    styles: [
        `
            .content {
                font-size: 12px;
                padding: 1rem;
                color: #5d5d5d;
            }

            .header {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .header .title {
                font-size: 2rem;
            }

            .mat-accordion .mat-expansion-panel {
                margin: 0 1rem;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnnounceComponent implements OnInit, OnDestroy {
    wrapperWidth: string = '500px';
    messages$: Observable<IResponse<Notice[]>>;
    destory$ = new Subject();

    @Output() close = new EventEmitter<boolean>();

    constructor(
        private messageServe: MessageService,
        private breakpointObserver: BreakpointObserver,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.messages$ = this.messageServe.getNewList();
        this.breakpointObserver
            .observe(['(max-width: 500px)'])
            .pipe(takeUntil(this.destory$), throttleTime(17))
            .subscribe((result) => {
                this.wrapperWidth = result.matches ? '100%' : '500px';
                this.cdr.markForCheck();
            });
    }

    ngOnDestroy() {
        this.destory$.next();
        this.destory$.complete();
    }
}
