import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdsBoxComponent } from './ads-box.component';

@NgModule({
    declarations: [AdsBoxComponent],
    imports: [CommonModule],
    exports: [AdsBoxComponent],
})
export class AdsBoxModule {}
