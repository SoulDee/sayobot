import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MapSearchContainerComponent } from './map-search-container/map-search-container.component';
import { MapSearchResultItemComponent } from './map-search-result-item/map-search-result-item.component';
import { MapSearchResultsComponent } from './map-search-results/map-search-results.component';

@NgModule({
    declarations: [
        MapSearchContainerComponent,
        MapSearchResultItemComponent,
        MapSearchResultsComponent,
    ],
    imports: [SharedModule],
    exports: [MapSearchContainerComponent],
})
export class MapSearchModule {}
