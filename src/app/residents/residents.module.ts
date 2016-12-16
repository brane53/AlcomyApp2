import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ResidentsRoutingModule } from './residents-routing.module'

import { ResidentsComponent } from './residents.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';
import { ResidentListComponent } from './resident-list/resident-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ResidentsRoutingModule
  ],
  declarations: [
    ResidentsComponent, 
    ResidentDetailComponent,
    ResidentListComponent
  ]
})
export class ResidentsModule { }
