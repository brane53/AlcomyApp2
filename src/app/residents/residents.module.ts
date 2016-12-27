import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ResidentsRoutingModule } from './residents-routing.module'
import { ResidentsComponent } from './residents.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { SharedModule } from '../shared/shared.module';
import { ResidentGroupsComponent } from './resident-groups/resident-groups.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ResidentsRoutingModule,
    SharedModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    ResidentsComponent, 
    ResidentDetailComponent,
    ResidentListComponent,
    ResidentGroupsComponent
  ]
})
export class ResidentsModule { }
