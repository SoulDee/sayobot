import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    OnDestroy,
} from '@angular/core';
import { MessageService } from '@app/core/service';
import { Notice } from '@app/shared/models';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { IResponse } from '@app/types';
import { takeUntil, throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app-announce',
    templateUrl: './announce.component.html',
    styleUrls: ['./announce.component.scss'],
})
export class AnnounceComponent implements OnInit, OnDestroy {
    wrapperWidth: string = '500px';
    messages$: Observable<IResponse<Notice[]>>;
    destory$ = new Subject();

    @Output() close = new EventEmitter<boolean>();

    constructor(
        private messageServe: MessageService,
        private breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit() {
        this.messages$ = this.messageServe.getNewList();
        this.breakpointObserver
            .observe(['(max-width: 500px)'])
            .pipe(takeUntil(this.destory$), throttleTime(17))
            .subscribe((result) => {
                this.wrapperWidth = result.matches ? '100%' : '500px';
            });
    }

    ngOnDestroy() {
        this.destory$.next();
        this.destory$.complete();
    }
}
