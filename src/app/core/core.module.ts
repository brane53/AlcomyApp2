// Angular Modules
import { NgModule } from '@angular/core';
// Alcomy Service Providers
import { EmployeeService } from './employee.service';
import { FacilityService } from './facility.service';
import { MedicationService } from './medication.service';
import { ResidentsService } from './residents.service';
import { ThemeService } from './theme.service';
import { UserService } from './user.service';
import { MessagesService } from './messages.service';
import { AccountService } from './account.service';


@NgModule({
  providers: [
    // Core application-wide service providers
    AccountService,
    EmployeeService,
    FacilityService,
    MedicationService,
    ResidentsService,
    ThemeService,
    UserService,
    MessagesService
  ]
})
export class CoreModule {}
