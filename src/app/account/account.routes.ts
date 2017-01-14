import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';

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
        path: '',
        redirectTo: '/account/summary',
        pathMatch: 'full'
      }
    ]
  }
];
