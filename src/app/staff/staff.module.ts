// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Alcomy Modules
import { SharedModule } from '../shared/shared.module';
import { StaffRoutingModule } from './staff-routing.module';

// Staff Module Components
import { StaffComponent } from './staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffGroupsComponent } from './staff-groups/staff-groups.component';
import { StaffScheduleComponent } from './staff-schedule/staff-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    SharedModule,
    StaffRoutingModule
  ],
  declarations: [
    StaffComponent,
    StaffListComponent,
    StaffGroupsComponent,
    StaffScheduleComponent
  ]
})
export class StaffModule { }
