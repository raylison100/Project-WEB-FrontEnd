import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './layouts/auth/auth.module';
import { AdminModule } from './layouts/admin/admin.module';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full',
  },
   {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    AuthModule,
    AdminModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
