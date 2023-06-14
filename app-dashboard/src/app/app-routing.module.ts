import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComponentsUiComponent } from './components/components-ui/components-ui.component';
import { TablesComponent } from './components/tables/tables.component';
import { MapsComponent } from './components/maps/maps/maps.component';
import { MenuLevel11Component } from './components/menu-level/menu-level11/menu-level11.component';
import { MenuLevel12Component } from './components/menu-level/menu-level12/menu-level12.component';
import { MenuLevel13Component } from './components/menu-level/menu-level13/menu-level13.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'components', component: ComponentsUiComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'menu-level11', component: MenuLevel11Component},
  {path: 'menu-level12', component: MenuLevel12Component},
  {path: 'menu-level13', component: MenuLevel13Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
