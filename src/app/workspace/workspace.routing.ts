import { Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: 'residents',
        loadChildren: 'app/residents/residents.module#ResidentsModule'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'staff',
        loadChildren: 'app/staff/staff.module#StaffModule'
      }
    ]
  }
];