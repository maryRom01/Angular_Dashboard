import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NavigationPanelComponent } from './core/navigation-panel/navigation-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';
import { ComponentsUiComponent } from './components/components-ui/components-ui.component';
import { MenuLevel11Component } from './core/navigation-panel/menu-level11/menu-level11.component';
import { MenuLevel12Component } from './core/navigation-panel/menu-level12/menu-level12.component';
import { MenuLevel13Component } from './core/navigation-panel/menu-level13/menu-level13.component';
import { MapsComponent } from './components/maps/maps/maps.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationPanelComponent,
    DashboardComponent,
    TablesComponent,
    ComponentsUiComponent,
    MenuLevel11Component,
    MenuLevel12Component,
    MenuLevel13Component,
    MapsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
