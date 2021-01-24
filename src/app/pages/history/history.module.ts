import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [HistoryComponent],
    imports: [CommonModule, MatListModule, HistoryRoutingModule],
})
export class HistoryModule {}
