// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// Alcomy Modules
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
// Dashboard Module Components
import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardMedicationsComponent } from './dashboard-medications/dashboard-medications.component';
import { CareComponent } from './care/care.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    TasksComponent,
    DashboardMedicationsComponent,
    CareComponent,
    WatchlistComponent
  ]
})
export class DashboardModule { }
