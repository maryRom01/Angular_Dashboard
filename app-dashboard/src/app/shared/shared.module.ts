import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertBytes } from './pipes/convert-bytes.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    ConvertBytes,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [  ],
  exports: [
    ConvertBytes,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
