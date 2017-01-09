import { Routes } from '@angular/router';

import { StaffComponent } from './staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffGroupsComponent } from './staff-groups/staff-groups.component';
import { StaffScheduleComponent } from './staff-schedule/staff-schedule.component';

export const staffRoutes: Routes = [
  {
    path: '',
    component: StaffComponent,
    children: [
      {
        path: 'list',
        component: StaffListComponent
      },
      {
        path: 'groups',
        component: StaffGroupsComponent
      },
      {
        path: 'schedule',
        component: StaffScheduleComponent
      },
      {
        path: '',
        redirectTo: '/staff/list',
        pathMatch: 'full'
      }
    ]
  }
];
