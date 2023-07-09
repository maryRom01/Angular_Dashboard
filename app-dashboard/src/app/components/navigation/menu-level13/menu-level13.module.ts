import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLevel13Component } from './menu-level13.component';
import { MenuLevel13RoutingModule } from './menu-level13-routing.module';

@NgModule({
  declarations: [
    MenuLevel13Component
  ],
  imports: [
    CommonModule,
    MenuLevel13RoutingModule
  ],
  providers: [],
  bootstrap: [ MenuLevel13Component ],
  exports: [ MenuLevel13Component ]
})
export class MenuLevel13Module { }
