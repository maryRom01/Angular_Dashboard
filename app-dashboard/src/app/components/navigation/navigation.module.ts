import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MenuLevel11Component } from './menu-level11/menu-level11.component';
import { MenuLevel12Component } from './menu-level12/menu-level12.component';
import { MenuLevel13Component } from './menu-level13/menu-level13.component';
import { NavigationPanel } from './navigation.component';

@NgModule({
  declarations: [
    MenuLevel11Component,
    MenuLevel12Component,
    MenuLevel13Component,
    NavigationPanel
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ NavigationPanel ],
  exports: [
    MenuLevel11Component,
    MenuLevel12Component,
    MenuLevel13Component,
    NavigationPanel
  ]
})
export class NavigationModule { }
