import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-f-routing.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ],
  providers: [],
  bootstrap: [ PageNotFoundComponent ],
  exports: [ PageNotFoundComponent ]
})
export class PageNotFoundModule { }
