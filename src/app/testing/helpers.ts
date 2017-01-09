/*
 * MusicTestHelpers - this file helps configure boilerplate for setting up
 * routing testing for this app. 
 * 
 * See also: https://github.com/angular/angular/blame/9883e19e2e2839043557ae89740a8f6b299680d2/modules/@angular/router/test/integration.spec.ts#L11
 */
import { Component, NgModule } from '@angular/core';
import { tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, Routes, provideRoutes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from '../workspace/workspace.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ResidentsComponent } from '../residents/residents.component';
import { StaffComponent } from '../staff/staff.component';
import { CompanyComponent } from '../company/company.component';

@Component({
  selector: 'blank-cmp',
  template: ``
})
export class BlankComponent {
}

@Component({
  selector: 'root-cmp',
  template: `<router-outlet></router-outlet>`
})
export class RootComponent {
}

// export const routerConfig: Routes = [
//   { path: '', component: BlankCmp },
//   { path: 'search', component: SearchComponent },
//   { path: 'artists/:id', component: ArtistComponent },
//   { path: 'tracks/:id', component: TrackComponent },
//   { path: 'albums/:id', component: AlbumComponent }
// ];

export function advance(fixture: ComponentFixture<any>): void {
  tick();
  fixture.detectChanges();
}

export function createRoot(router: Router,
                           componentType: any): ComponentFixture<any> {
  const f = TestBed.createComponent(componentType);
  advance(f);
  (<any>router).initialNavigation();
  advance(f);
  return f;
}

export function configureRoutedTests(routes: Routes) {

  TestBed.configureTestingModule({
    imports: [
      { // TODO RouterTestingModule.withRoutes coming soon
        ngModule: RouterTestingModule,
        providers: [provideRoutes(routes)]
      },
      TestModule
    ],
    providers: [
      {
        provide: ActivatedRoute,
        useFactory: (r: Router) => r.routerState.root, deps: [ Router ]
      }
    ]
  });
}

@NgModule({
  imports: [RouterTestingModule, CommonModule],
  entryComponents: [
    BlankComponent,
    RootComponent,
    WorkspaceComponent,
    DashboardComponent,
    ResidentsComponent,
    StaffComponent,
    CompanyComponent
  ],
  exports: [
    BlankComponent,
    RootComponent,
    WorkspaceComponent,
    DashboardComponent,
    ResidentsComponent,
    StaffComponent,
    CompanyComponent
  ],
  declarations: [
    BlankComponent,
    RootComponent,
    WorkspaceComponent,
    DashboardComponent,
    ResidentsComponent,
    StaffComponent,
    CompanyComponent
  ]
})
class TestModule {
}
