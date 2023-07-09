import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationPanel } from './navigation.component';

@NgModule({
  declarations: [
    NavigationPanel
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ NavigationPanel ],
  exports: [
    NavigationPanel
  ]
})
export class NavigationModule { }
