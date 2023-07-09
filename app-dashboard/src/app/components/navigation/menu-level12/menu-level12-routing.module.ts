import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLevel12Component } from './menu-level12.component';

const routes: Routes = [
  {
    path: '',
    component: MenuLevel12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuLevel12RoutingModule { }
