import { NgModule }             from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  // guard and resolver service providers
  providers: [

  ]
})
export class AppRoutingModule {}
