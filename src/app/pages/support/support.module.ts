import { NgModule } from '@angular/core';
import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { LoadingModule } from '@app/shared/ui/loading/loading.module';

@NgModule({
    declarations: [SupportComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatRadioModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        LoadingModule,
        SupportRoutingModule,
    ],
})
export class SupportModule {}
