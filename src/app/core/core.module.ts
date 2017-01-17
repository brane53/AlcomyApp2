// Angular Modules
import { NgModule } from '@angular/core';
// Alcomy Service Providers
import { EmployeeService } from './employee.service';
import { FacilityService } from './facility.service';
import { MedicationService } from './medication.service';
import { ResidentsService } from './residents.service';
import { ThemeService } from './theme.service';
import { UserService } from './user.service';


@NgModule({
  providers: [
    // Core application-wide service providers
    FacilityService,
    MedicationService,
    ResidentsService,
    ThemeService,
    UserService
  ]
})
export class CoreModule {}
