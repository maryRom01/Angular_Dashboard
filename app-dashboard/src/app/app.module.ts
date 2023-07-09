import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentUiModule } from './components/components-ui/component-ui.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { TablesModule } from './components/tables/tables.module';
import { MapsModule } from './components/maps/maps.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ComponentUiModule,
    DashboardModule,
    MainPageModule,
    MapsModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
