import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    SharedModule
  ],
  declarations: [DashboardComponent, TasksComponent]
})
export class DashboardModule { }
