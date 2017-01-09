import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { dashboardRoutes } from './dashboard.routing';


@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // guard and resolver service providers
  ]
})
export class DashboardRoutingModule { }
