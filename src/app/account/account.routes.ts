import { Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';

export const accountRoutes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'summary',
        component: SummaryComponent
      },
      {
        path: 'facilities',
        component: FacilityListComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'admins',
        component: AdminListComponent
      },
      {
        path: '',
        redirectTo: '/account/summary',
        pathMatch: 'full'
      }
    ]
  }
];
