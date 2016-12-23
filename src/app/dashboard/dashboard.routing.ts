import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'tasks',
        component: TasksComponent
      }
    ]
  }
];