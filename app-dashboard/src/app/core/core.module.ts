import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MenuLevel1Module } from '../components/menu-level1/menu-level1.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuLevel1Module
  ],
  providers: [],
  bootstrap: [CoreComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    CoreComponent
  ]
})
export class CoreModule { }
