import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RangeSliderModule } from './range-slider/range-slider.module';
import { MusicPlayerModule } from './music-player/music-player.module';
import { LoadingModule } from './loading/loading.module';
import { ScrollTopModule } from './scrollTop/scroll-top.module';

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
    ScrollTopModule,
];

@NgModule({
    imports: UI,
    exports: UI,
})
export class UiModule {}
