import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { workspaceRoutes } from './workspace.routing';

@NgModule({
  imports: [
    RouterModule.forChild(workspaceRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // guard and resolver service providers
  ]

})
export class WorkspaceRoutingModule { }