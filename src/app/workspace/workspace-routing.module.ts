import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace.component'
import { ResidentsComponent } from '../residents/residents.component'
import { ResidentsModule } from '../residents/residents.module'

const workspaceRoutes: Routes = [
  {
    path: "",
    component: WorkspaceComponent,
    children: [
      {
        path: "residents",
        loadChildren: () => ResidentsModule
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(workspaceRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class WorkspaceRoutingModule { }