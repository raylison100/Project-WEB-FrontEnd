import { Routes } from '@angular/router';

import { DefaultComponent } from '../../pages/default/default.component';
import { PosterComponent } from '../../pages/poster/poster.component';
import { ProfileComponent } from '../../pages/profile/profile.component';

export const AdminRoutes: Routes = [
    { path: 'default',      component: DefaultComponent },
    { path: 'poster',       component: PosterComponent },
    { path: 'profile',      component: ProfileComponent },
];
