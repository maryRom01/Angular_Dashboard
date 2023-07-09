import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsUiComponent } from './components-ui.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsUIRoutingModule { }
