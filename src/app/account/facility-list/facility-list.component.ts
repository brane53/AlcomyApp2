import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FacilityService } from '../../core/facility.service';
import { Facility } from '../../facility/shared/facility';

@Component({
  selector: 'alc-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.scss']
})
export class FacilityListComponent implements OnInit {

  facilities: FirebaseListObservable<Facility[]>;

  constructor(private facilityService: FacilityService) { }

  ngOnInit() {
    this.facilities = this.facilityService.facilityList;
  }

  // TODO: This is a temporary implementation
  addFacility(facility: Facility){
    this.facilityService.addFacility(facility);
  }

}
