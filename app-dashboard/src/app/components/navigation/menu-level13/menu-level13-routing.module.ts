import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLevel13Component } from './menu-level13.component';

const routes: Routes = [
  {
    path: '',
    component: MenuLevel13Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuLevel13RoutingModule { }
