import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
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
        path: '',
        redirectTo: '/account/summary',
        pathMatch: 'full'
      }
    ]
  }
];
