import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
        <div *ngIf="loading" class="loading-wrap flex-center">
            <div
                class="item"
                [style.animation-delay]="item + 'ms'"
                *ngFor="let item of delayList"
            ></div>
        </div>
    `,
    styles: [
        `
            .loading-wrap {
                margin: 2vw 0;
                height: 6vw;
            }
            .loading-wrap .item {
                height: 5vw;
                width: 1.5vw;
                background: #1d1d1d;
                margin: 0 0.2rem;
                animation: loading 500ms ease-in-out infinite;
            }
        `
    ]
})
export class LoadingComponent implements OnInit {
    @Input() loading: boolean;

    delayList = [0, 50, 100, 150, 200, 250];

    constructor() {}

    ngOnInit() {}
}
