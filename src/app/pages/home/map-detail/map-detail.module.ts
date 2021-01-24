import { NgModule } from '@angular/core';
import { MapDetailContainerComponent } from './map-detail-container';
import { MapDetailLevelComponent } from './map-detail-level/map-detail-level.component';
import { MapDetailInfoComponent } from './map-detail-info/map-detail-info.component';
import { MapDetailChartsComponent } from './map-detail-charts/map-detail-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    declarations: [
        MapDetailContainerComponent,
        MapDetailLevelComponent,
        MapDetailInfoComponent,
        MapDetailChartsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatProgressBarModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatRadioModule,
        TranslateModule,
        NgxEchartsModule.forChild(),
    ],
    exports: [MapDetailContainerComponent],
})
export class MapDetailModule {}
