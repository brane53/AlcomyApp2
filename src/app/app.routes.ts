import { Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ResidentsComponent } from './residents/residents.component';

export const appRoutes: Routes = [
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: '',
    redirectTo: '/dashboard/tasks',
    pathMatch: 'full'
  }
];
