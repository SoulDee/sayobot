import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoadingModule } from '@app/shared/ui/loading/loading.module';
import { RangeSliderModule } from '@app/shared/ui/range-slider/range-slider.module';
import { TranslateModule } from '@ngx-translate/core';
import {
    CategoryOptionsComponent,
    RangeOptionComponent,
    SearchAdvanceOptionsComponent,
    MapSearchResultsComponent,
    MapSearchResultItemComponent,
} from './components';
import { MapSearchContainerComponent } from './map-search-container/map-search-container.component';

@NgModule({
    declarations: [
        MapSearchContainerComponent,
        MapSearchResultItemComponent,
        MapSearchResultsComponent,
        SearchAdvanceOptionsComponent,
        RangeOptionComponent,
        CategoryOptionsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatCheckboxModule,
        LoadingModule,
        RangeSliderModule,
        TranslateModule,
    ],
    exports: [MapSearchContainerComponent],
})
export class MapSearchModule {}
