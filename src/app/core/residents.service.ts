import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Resident } from '../residents/shared/resident';

@Injectable()
export class ResidentsService {

  residentList: FirebaseListObservable<Resident[]>;

  constructor(af: AngularFire) {
    this.residentList = af.database.list('/residents');
  }

  getResidents(){
    
  }

}
