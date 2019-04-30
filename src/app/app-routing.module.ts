import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component'
import { AdminComponent } from './layouts/admin/admin.component'

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin/admin.module#AdminModule'
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth/auth.module#AuthModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'default'
  }
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
