import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';

@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  providers: [],
  bootstrap: [ TablesComponent ],
  exports: [ TablesComponent ]
})
export class TablesModule { }
