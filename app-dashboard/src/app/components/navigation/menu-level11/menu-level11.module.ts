import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLevel11Component } from './menu-level11.component';
import { MenuLevel11RoutingModule } from './menu-level11-routing.module';

@NgModule({
  declarations: [
    MenuLevel11Component
  ],
  imports: [
    CommonModule,
    MenuLevel11RoutingModule
  ],
  providers: [],
  bootstrap: [ MenuLevel11Component ],
  exports: [ MenuLevel11Component ]
})
export class MenuLevel11Module { }
