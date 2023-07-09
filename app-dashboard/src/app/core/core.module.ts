import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CoreComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    CoreComponent
  ]
})
export class CoreModule { }
