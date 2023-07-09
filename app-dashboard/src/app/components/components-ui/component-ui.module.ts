import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsUiComponent } from './components-ui.component';
import { ComponentsUIRoutingModule } from './components-ui-routing.module';

@NgModule({
  declarations: [
    ComponentsUiComponent
  ],
  imports: [
    CommonModule,
    ComponentsUIRoutingModule
  ],
  providers: [],
  bootstrap: [ ComponentsUiComponent ],
  exports: [ ComponentsUiComponent ]
})
export class ComponentUiModule { }
