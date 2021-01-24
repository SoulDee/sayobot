import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MapSearchModule } from './map-search/map-search.module';
import { MapDetailModule } from './map-detail/map-detail.module';
import { AdsBoxModule } from './ads-box/ads-box.module';
@NgModule({
    declarations: [HomeComponent],
    imports: [
        HomeRoutingModule,
        MapSearchModule,
        MapDetailModule,
        AdsBoxModule,
    ],
})
export class HomeModule {}
