import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main-page', loadChildren: () => import('./components/main-page/main-page.module').then(m => m.MainPageModule)},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'components', loadChildren: () => import('./components/components-ui/component-ui.module').then(m => m.ComponentUiModule)},
  { path: 'tables', loadChildren: () => import('./components/tables/tables.module').then(m => m.TablesModule)},
  { path: 'maps', loadChildren: () => import('./components/maps/maps.module').then(m => m.MapsModule)},

  { path: '', children: [
    { path: 'menu-level11', loadChildren: () => import('./components/navigation/menu-level11/menu-level11.module').then(m => m.MenuLevel11Module)},
    { path: 'menu-level12', loadChildren: () => import('./components/navigation/menu-level12/menu-level12.module').then(m => m.MenuLevel12Module)},
    { path: 'menu-level13', loadChildren: () => import('./components/navigation/menu-level13/menu-level13.module').then(m => m.MenuLevel13Module)}
  ]},
  { path: '', redirectTo: '/main-page', pathMatch: 'full'},
  { path: '**', loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
