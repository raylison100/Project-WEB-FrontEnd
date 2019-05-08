import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';
import { DefaultComponent } from '../../componets/pages/default/default.component';
import { PosterComponent } from '../../componets/pages/poster/poster.component';
import { ProfileComponent } from '../../componets/pages/profile/profile.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { UserService } from 'src/app/services/user.service';


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
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
