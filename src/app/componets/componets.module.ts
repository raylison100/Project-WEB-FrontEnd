import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavComponent
  ]
})
export class ComponetsModule { }
