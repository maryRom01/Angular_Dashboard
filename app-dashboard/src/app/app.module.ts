import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';
import { ComponentsUiComponent } from './components/components-ui/components-ui.component';
import { MapsComponent } from './components/maps/maps/maps.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CoreModule } from './core/core.module';
import { ConvertBytes } from './shared/pipes/convert-bytes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TablesComponent,
    ComponentsUiComponent,
    MapsComponent,
    MainPageComponent,
    ConvertBytes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
