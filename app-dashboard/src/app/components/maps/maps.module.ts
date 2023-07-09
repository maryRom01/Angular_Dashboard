import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  providers: [],
  bootstrap: [ MapsComponent ],
  exports: [ MapsComponent ]
})
export class MapsModule { }
