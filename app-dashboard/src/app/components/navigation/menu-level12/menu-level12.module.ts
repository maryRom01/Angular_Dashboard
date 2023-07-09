import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLevel12Component } from './menu-level12.component';
import { MenuLevel12RoutingModule } from './menu-level12-routing.module';

@NgModule({
  declarations: [
    MenuLevel12Component
  ],
  imports: [
    CommonModule,
    MenuLevel12RoutingModule
  ],
  providers: [],
  bootstrap: [ MenuLevel12Component ],
  exports: [ MenuLevel12Component ]
})
export class MenuLevel12Module { }
