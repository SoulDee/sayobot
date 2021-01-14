import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MapSearchModule } from './map-search/map-search.module';
import { DonationCardComponent } from './donation-card/donation-card.component';
import { AdsBoxComponent } from './ads-box/ads-box.component';
import { MapDetailModule } from './map-detail/map-detail.module';
import {
    SearchAdvanceOptionsComponent,
    CategoryOptionsComponent,
} from './components';

@NgModule({
    declarations: [
        HomeComponent,
        DonationCardComponent,
        AdsBoxComponent,
        SearchAdvanceOptionsComponent,
        CategoryOptionsComponent,
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,
        MapSearchModule,
        MapDetailModule,
    ],
})
export class HomeModule {}
