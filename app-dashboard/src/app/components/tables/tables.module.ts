import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TablesComponent } from './tables.component';

@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ TablesComponent ],
  exports: [ TablesComponent ]
})
export class TablesModule { }
