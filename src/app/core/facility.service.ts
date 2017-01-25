import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AccountService } from './account.service';
import { Account } from '../account/shared/account';
import { Facility } from '../facility/shared/facility';
import { MessagesService } from './messages.service';

@Injectable()
export class FacilityService {

  facilityList: FirebaseListObservable<Facility[]>;
  account: Account;

  constructor(private af: AngularFire,
              private messages: MessagesService) {

    this.facilityList = af.database.list('/facilities');

}

  addFacility(facility: Facility) {
    return this.af.database.list('/facilities').push(facility);
  }

}
