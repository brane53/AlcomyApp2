import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerticalToolbarComponent } from './vertical-toolbar/vertical-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    VerticalToolbarComponent
  ],
  exports: [
    VerticalToolbarComponent
  ]
})
export class SharedModule { }
