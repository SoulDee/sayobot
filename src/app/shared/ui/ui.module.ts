import { NgModule } from '@angular/core';
import { ScrollTopComponent } from './scroll-top.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RangeSliderModule } from './range-slider/range-slider.module';
import { MusicPlayerModule } from './music-player/music-player.module';
import { LoadingModule } from './loading/loading.module';

const DEPENDEN_LIST = [
    CommonModule,
    TranslateModule,
    DragDropModule,
    MatIconModule,
    MatTooltipModule,
];

const UI = [
    ...DEPENDEN_LIST,
    RangeSliderModule,
    MusicPlayerModule,
    LoadingModule,
];

const COMPONENTS = [ScrollTopComponent];

@NgModule({
    declarations: COMPONENTS,
    imports: UI,
    exports: [...UI, ...COMPONENTS],
})
export class UiModule {}
