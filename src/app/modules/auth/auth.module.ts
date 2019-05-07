import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../../componets/pages/login/login.component';
import { RegisterComponent } from '../../componets/pages/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
