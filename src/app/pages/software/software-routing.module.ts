import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoftwareComponent } from './software.component';

const routes: Routes = [
    {
        path: '',
        component: SoftwareComponent,
        data: { title: '软件下载' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SoftwareRoutingModule {}
