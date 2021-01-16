import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MapSearchBoxComponent } from './map-search-box/map-search-box.component';
import { MapSearchContainerComponent } from './map-search-container/map-search-container.component';
import { MapSearchPaginnatorComponent } from './map-search-paginnator/map-search-paginnator.component';
import { MapSearchResultItemComponent } from './map-search-result-item/map-search-result-item.component';
import { MapSearchResultsComponent } from './map-search-results/map-search-results.component';

@NgModule({
    declarations: [
        MapSearchBoxComponent,
        MapSearchContainerComponent,
        MapSearchPaginnatorComponent,
        MapSearchResultItemComponent,
        MapSearchResultsComponent,
    ],
    imports: [SharedModule],
    exports: [MapSearchContainerComponent],
})
export class MapSearchModule {}
