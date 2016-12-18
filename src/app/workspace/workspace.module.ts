import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WorkspaceRoutingModule } from './workspace-routing.module';

import { WorkspaceComponent } from './workspace.component';



@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    WorkspaceComponent
  ]
})
export class WorkspaceModule { }
