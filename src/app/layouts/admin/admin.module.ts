import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';
import { DefaultComponent } from '../../pages/default/default.component';
import { PosterComponent } from '../../pages/poster/poster.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { FooterComponent } from '../../componets/footer/footer.component';


@NgModule({
  declarations: [
    DefaultComponent,
    PosterComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
