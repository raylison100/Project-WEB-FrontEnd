import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../../components/pages/login/login.component';
import { RegisterComponent } from '../../components/pages/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginService } from 'src/app/services/auth/login.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [
    SharedService,
    LoginService
  ],

})
export class AuthModule { }
