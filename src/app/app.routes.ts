import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResidentsComponent } from './residents/residents.component';
import { WorkspaceComponent } from './workspace/workspace.component';

export const appRoutes: Routes = [
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/dashboard/tasks',
    pathMatch: 'full'
  }
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];
