import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { residentRoutes } from './residents.routes';


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
