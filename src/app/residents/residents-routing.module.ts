import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { residentRoutes } from './residents.routing';


@NgModule({
  imports: [
    RouterModule.forChild(residentRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // guard and resolver service providers
  ]

})
export class ResidentsRoutingModule { }
