import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertBytes } from './pipes/convert-bytes.pipe';

@NgModule({
  declarations: [
    ConvertBytes
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [  ],
  exports: [
    ConvertBytes
  ]
})
export class SharedModule { }
