import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [RangeSliderComponent],
    imports: [
        CommonModule,
        TranslateModule,
        NgxSliderModule,
        MatSelectModule,
        MatCheckboxModule,
    ],
    exports: [RangeSliderComponent],
})
export class RangeSliderModule {}
