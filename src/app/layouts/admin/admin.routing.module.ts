import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from '../../componets/pages/default/default.component';
import { PosterComponent } from '../../componets/pages/poster/poster.component';
import { ProfileComponent } from '../../componets/pages/profile/profile.component';

export const AdminRoutes: Routes = [
  { path: 'default',      component: DefaultComponent },
  { path: 'poster',       component: PosterComponent },
  { path: 'profile',      component: ProfileComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(AdminRoutes)
    ],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }