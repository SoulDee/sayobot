import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [RangeSliderComponent],
    imports: [CommonModule, NgxSliderModule, MatSelectModule, TranslateModule],
    exports: [RangeSliderComponent],
})
export class RangeSliderModule {}
