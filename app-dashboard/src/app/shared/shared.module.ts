import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertBytes } from './pipes/convert-bytes.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    ConvertBytes,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [  ],
  exports: [
    ConvertBytes,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
