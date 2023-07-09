import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main-page', loadChildren: () => import('./components/main-page/main-page.module').then(m => m.MainPageModule)},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'components', loadChildren: () => import('./components/components-ui/component-ui.module').then(m => m.ComponentUiModule)},
  { path: 'tables', loadChildren: () => import('./components/tables/tables.module').then(m => m.TablesModule)},
  { path: 'maps', loadChildren: () => import('./components/maps/maps.module').then(m => m.MapsModule)},

  // { path: '', children: [
  //   { path: 'menu-level11', component: MenuLevel11Component },
  //   { path: 'menu-level12', component: MenuLevel12Component },
  //   { path: 'menu-level13', component: MenuLevel13Component }
  // ]},
  { path: '', redirectTo: '/main-page', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
