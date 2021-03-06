import { Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'residents',
        loadChildren: 'app/residents/residents.module#ResidentsModule'
      },
      {
        path: 'staff',
        loadChildren: 'app/staff/staff.module#StaffModule'
      },
      {
        path: 'company',
        loadChildren: 'app/company/company.module#CompanyModule'
      }
    ]
  }
];
