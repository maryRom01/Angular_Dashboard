import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLevel11Component } from './menu-level11.component';

const routes: Routes = [
  {
    path: '',
    component: MenuLevel11Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuLevel11RoutingModule { }
