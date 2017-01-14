import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    MaterialModule.forRoot(),
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent,
    SummaryComponent,
    PaymentComponent
  ]
})
export class AccountModule { }
