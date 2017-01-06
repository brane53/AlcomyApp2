import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { companyRoutes } from './company.routing'


@NgModule({
  imports: [
    RouterModule.forChild(companyRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // guard and resolver service providers
  ]
})
export class CompanyRoutingModule { }