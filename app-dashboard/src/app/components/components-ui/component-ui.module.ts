import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsUiComponent } from './components-ui.component';

@NgModule({
  declarations: [
    ComponentsUiComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ ComponentsUiComponent ],
  exports: [ ComponentsUiComponent ]
})
export class ComponentUiModule { }
