// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Alcomy Modules
import { AccountRoutingModule } from './account-routing.module';
// Alcomy Module Components
import { AccountComponent } from './account.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';

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
    PaymentComponent,
    AdminListComponent,
    FacilityListComponent
  ]
})
export class AccountModule { }
