import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

@NgModule({
    declarations: [SettingComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        SettingRoutingModule,
    ],
})
export class SettingModule {}
