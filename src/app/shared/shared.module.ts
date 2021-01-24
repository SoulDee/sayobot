import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnMaterialModule } from './module/own-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { translateConfig } from './translate';
import { UiModule } from './ui/ui.module';
import { NgxEchartsModule } from 'ngx-echarts';

const MODULE = [CommonModule, FormsModule, UiModule, OwnMaterialModule];

@NgModule({
    imports: [
        ...MODULE,
        TranslateModule.forChild(translateConfig),
        NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    ],
    exports: [...MODULE, TranslateModule],
})
export class SharedModule {}
