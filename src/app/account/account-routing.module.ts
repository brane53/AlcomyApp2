import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account.routes';

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ],
  // guard and resolver service providers
  providers: [

  ]
})
export class AccountRoutingModule {}
