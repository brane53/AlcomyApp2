import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AccountService } from './account.service';
import { Account } from '../account/shared/account';
import { Facility } from '../facility/shared/facility';

@Injectable()
export class FacilityService {

  facilityList: FirebaseListObservable<Facility[]>;
  account: Account;

  constructor(private af: AngularFire) {

    this.facilityList = af.database.list('/facilities');

}

  addFacility(facility: Facility){
    this.af.database.list('/facilities').push(facility);
  }

}
