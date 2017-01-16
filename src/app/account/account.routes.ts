import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminListComponent } from './admin-list/admin-list.component';

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
