/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicationService } from './medication.service';

describe('MedicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicationService]
    });
  });

  it('should ...', inject([MedicationService], (service: MedicationService) => {
    expect(service).toBeTruthy();
  }));
});
