import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  // guard and resolver service providers
  providers: [

  ]
})
export class AppRoutingModule {}