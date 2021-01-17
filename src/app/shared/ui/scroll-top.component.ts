import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'scroll-top',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mat-icon
            class="global-icon scroll-icon"
            (click)="scroll()"
            matTooltip="{{ 'other.scrollTop' | translate }}"
            >unarchive</mat-icon
        >
    `,
    styles: [
        `
            .scroll-icon {
                right: 3rem;
                bottom: 5rem;
            }
        `,
    ],
})
export class ScrollTopComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    scroll() {
        window.scrollTo(0, 0);
    }

    // TODO 滚动到顶部的动画
}
