import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../components/pages/login/login.component';
import { RegisterComponent } from '../../components/pages/register/register.component';
import { ConfirmRegisterComponent } from 'src/app/components/pages/confirm-register/confirm-register.component';
import { ConfirmResetPasswordComponent } from 'src/app/components/pages/confirm-reset-password/confirm-reset-password.component';

export const AuthRoutes: Routes = [
  { path: 'login',                    component: LoginComponent },
  { path: 'register',                 component: RegisterComponent },  
  { path: 'register/confirm/:token',  component: ConfirmRegisterComponent } ,
  { path: 'password/reset/:token',    component: ConfirmResetPasswordComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(AuthRoutes)
    ],
    exports: [RouterModule]
  })
export class AuthRoutingModule { }
