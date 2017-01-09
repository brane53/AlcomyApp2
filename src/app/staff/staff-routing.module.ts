import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { staffRoutes } from './staff.routing';

@NgModule({
  imports: [
    RouterModule.forChild(staffRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // guard and resolver service providers
  ]

})
export class StaffRoutingModule { }
