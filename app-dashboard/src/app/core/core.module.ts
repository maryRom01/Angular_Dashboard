import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { MenuLevel11Component } from './navigation-panel/menu-level11/menu-level11.component';
import { MenuLevel12Component } from './navigation-panel/menu-level12/menu-level12.component';
import { MenuLevel13Component } from './navigation-panel/menu-level13/menu-level13.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationPanelComponent,
    MenuLevel11Component,
    MenuLevel12Component,
    MenuLevel13Component,
    PageNotFoundComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [CoreComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavigationPanelComponent,
    MenuLevel11Component,
    MenuLevel12Component,
    MenuLevel13Component,
    PageNotFoundComponent,
    CoreComponent
  ]
})
export class CoreModule { }
