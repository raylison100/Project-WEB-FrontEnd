import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../../componets/pages/login/login.component';
import { RegisterComponent } from '../../componets/pages/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginService } from 'src/app/services/auth/login.service';
import { SharedService } from 'src/app/services/shared.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
 
  ],
  providers: [
    SharedService,
    LoginService
  ],

})
export class AuthModule { }
