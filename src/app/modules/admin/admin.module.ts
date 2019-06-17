import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';
import { DefaultComponent } from '../../components/pages/default/default.component';
import { PosterComponent } from '../../components/pages/poster/poster.component';
import { ProfileComponent } from '../../components/pages/profile/profile.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UserService } from 'src/app/services/user/user.service';
import { SharedService } from 'src/app/services/shared/shared.service';


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
    UserService,
    SharedService
  ]
})
export class AdminModule { }
