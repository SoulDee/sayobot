import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'app/shared';
import { TranslateModule } from '@ngx-translate/core';
import { translateConfig } from '@shared/translate';

// 注册全局图标
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgIconResources } from '@app/utils';

import {
    HeaderComponent,
    FooterComponent,
    HelpDialogComponent,
    AnnounceComponent,
} from './components';
import { PRIVIDER_CONFIG } from './providers';

const components = [
    HeaderComponent,
    FooterComponent,
    HelpDialogComponent,
    AnnounceComponent,
];

@NgModule({
    declarations: [...components],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        TranslateModule.forRoot(translateConfig),
    ],
    exports: [SharedModule, AppRoutingModule, ...components],
    providers: PRIVIDER_CONFIG,
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parent: CoreModule,
        ir: MatIconRegistry,
        ds: DomSanitizer
    ) {
        if (parent) {
            throw new Error(
                'CoreModule already exists and cannot be loaded again!'
            );
        }

        // 注册全局自定义 svg 图标
        loadSvgIconResources(ir, ds);
    }
}
