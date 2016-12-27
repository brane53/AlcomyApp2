import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardMedicationsComponent } from './dashboard-medications/dashboard-medications.component';
import { CareComponent } from './care/care.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'medications',
        component: DashboardMedicationsComponent
      },
      {
        path: 'care',
        component: CareComponent
      },
      {
        path: 'watchlist',
        component: WatchlistComponent
      }
    ]
  }
];