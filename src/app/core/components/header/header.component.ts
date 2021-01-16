import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { language } from '@app/core/config';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
    language: Array<any>;

    timer = null;

    constructor(
        private translate: TranslateService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.language = language;

        if (localStorage.getItem('language')) {
            const lang = localStorage.getItem('language');
            this.useLanguage(lang);
        }
    }

    useLanguage(lang: string) {
        localStorage.setItem('language', lang);
        this.translate.setDefaultLang(lang);
    }

    openHelpDialog() {
        this.dialog.open(HelpDialogComponent, {
            maxHeight: '98vh',
            width: '800px',
            maxWidth: '98vw',
        });
    }

    get showHelpDialog() {
        return (
            !localStorage.getItem('isShow') ||
            localStorage.getItem('isShow') === 'false'
        );
    }

    ngAfterViewInit() {
        if (this.showHelpDialog) {
            this.timer = setTimeout(() => {
                this.openHelpDialog();
            }, 0);
        }
    }

    get langIcon() {
        return this.language.filter((lang) => lang.key === this.lang)[0].flag;
    }

    get lang() {
        return localStorage.getItem('language') || 'zh';
    }

    ngOnDestroy() {
        clearTimeout(this.timer);
    }
}
