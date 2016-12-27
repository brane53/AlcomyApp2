import { Routes } from '@angular/router';

import { ResidentsComponent } from './residents.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { ResidentGroupsComponent } from './resident-groups/resident-groups.component'

export const residentRoutes: Routes = [
  {
    path: '',
    component: ResidentsComponent,
    children: [
      {
        path: 'list',
        component: ResidentListComponent
      },
      {
        path: 'groups',
        component: ResidentGroupsComponent
      }
    ]
  }
  
];