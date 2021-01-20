import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `
        <mat-sidenav-container class="example-container">
            <mat-sidenav
                #sidenav
                mode="over"
                position="end"
                [fixedInViewport]="true"
                [fixedTopGap]="0"
                [fixedBottomGap]="0"
            >
                <app-announce (close)="sidenav.close()"></app-announce>
            </mat-sidenav>

            <mat-sidenav-content>
                <app-header></app-header>
                <main>
                    <router-outlet></router-outlet>
                </main>
                <app-footer></app-footer>
                <sayo-music-player></sayo-music-player>
                <scroll-top></scroll-top>
                <mat-icon
                    class="global-icon mseeage-icon"
                    (click)="sidenav.toggle()"
                    matTooltip="{{ 'other.openMsg' | translate }}"
                    >message</mat-icon
                >
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: [
        `
            .mseeage-icon {
                right: 3rem;
                bottom: 8rem;
            }
        `
    ]
})
export class AppComponent {
    constructor(public translate: TranslateService) {
        translate.setDefaultLang('zh');
    }
}
