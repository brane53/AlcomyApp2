import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NewResidentDialogComponent } from './new-resident-dialog/new-resident-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VerticalToolbarComponent } from './vertical-toolbar/vertical-toolbar.component';
import { NewFacilityDialogComponent } from './new-facility-dialog/new-facility-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    VerticalToolbarComponent,
    PageNotFoundComponent,
    NewResidentDialogComponent,
    NewFacilityDialogComponent
  ],
  entryComponents: [
    NewResidentDialogComponent,
    NewFacilityDialogComponent
  ],
  exports: [
    VerticalToolbarComponent
  ]
})
export class SharedModule { }
