import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponetsModule } from '../../componets/componets.module';

import { AdminRoutes } from './admin.routing';
import { DefaultComponent } from '../../pages/default/default.component';
import { PosterComponent } from '../../pages/poster/poster.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    DefaultComponent,
    PosterComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ComponetsModule,
    RouterModule.forChild(AdminRoutes),
  ]
})
export class AdminModule { }
