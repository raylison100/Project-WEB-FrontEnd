import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../../components/pages/login/login.component';
import { RegisterComponent } from '../../components/pages/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginService } from 'src/app/services/auth/login.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModalService } from 'src/app/services/shared/alert-modal.service';
import { ResetPasswordComponent } from 'src/app/components/pages/reset-password/reset-password.component';
import { ConfirmResetPasswordComponent } from 'src/app/components/pages/confirm-reset-password/confirm-reset-password.component';
import { ConfirmRegisterComponent } from 'src/app/components/pages/confirm-register/confirm-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ConfirmResetPasswordComponent,
    ConfirmRegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [
    SharedService,
    LoginService,
    AlertModalService
  ],
  entryComponents:[
    ResetPasswordComponent,
  ]

})
export class AuthModule { }
