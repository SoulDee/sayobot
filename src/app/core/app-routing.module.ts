import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('../pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'history',
        loadChildren: () =>
            import('../pages/history/history.module').then(
                (m) => m.HistoryModule
            ),
    },
    {
        path: 'support',
        loadChildren: () =>
            import('../pages/support/support.module').then(
                (m) => m.SupportModule
            ),
    },
    {
        path: 'about',
        loadChildren: () =>
            import('../pages/about/about.module').then((m) => m.AboutModule),
    },
    {
        path: 'setting',
        loadChildren: () =>
            import('../pages/setting/setting.module').then(
                (m) => m.SettingModule
            ),
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
