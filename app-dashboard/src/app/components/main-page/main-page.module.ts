import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ],
  providers: [],
  bootstrap: [ MainPageComponent ],
  exports: [ MainPageComponent ]
})
export class MainPageModule { }
