import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopComponent } from './scroll-top.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ScrollTopComponent],
    imports: [CommonModule, MatIconModule, MatTooltipModule, TranslateModule],
    exports: [ScrollTopComponent],
})
export class ScrollTopModule {}
