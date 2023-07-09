import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MenuLevel11Component } from './menu-level11/menu-level11.component';
import { MenuLevel12Component } from './menu-level12/menu-level12.component';
import { MenuLevel13Component } from './menu-level13/menu-level13.component';
import { MenuLevel1Component } from './menu-level1.component';

@NgModule({
  declarations: [
    MenuLevel11Component,
    MenuLevel12Component,
    MenuLevel13Component,
    MenuLevel1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ MenuLevel1Component ],
  exports: [
    MenuLevel11Component,
    MenuLevel12Component,
    MenuLevel13Component,
    MenuLevel1Component
  ]
})
export class MenuLevel1Module { }
