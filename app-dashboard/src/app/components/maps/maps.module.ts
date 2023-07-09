import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapsComponent } from './maps.component';

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ MapsComponent ],
  exports: [ MapsComponent ]
})
export class MapsModule { }
