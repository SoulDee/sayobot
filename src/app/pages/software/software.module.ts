import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareRoutingModule } from './software-routing.module';
import { SoftwareComponent } from './software.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BigPictureComponent } from './big-picture.component';

@NgModule({
    declarations: [SoftwareComponent, BigPictureComponent],
    imports: [
        CommonModule,
        SoftwareRoutingModule,
        TranslateModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule,
    ],
})
export class SoftwareModule {}
