import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FacilityService } from '../../core/facility.service';
import { ThemeService } from '../../core/theme.service';
import { Subscription } from 'rxjs';
import { Facility } from '../../common/models';
import { MessagesService } from '../../core/messages.service';

@Component({
  selector: 'alc-new-facility-dialog',
  templateUrl: './new-facility-dialog.component.html',
  styleUrls: ['./new-facility-dialog.component.scss']
})
export class NewFacilityDialogComponent implements OnInit {

  theme: string;
  themeSubscription: Subscription;
  facility: Facility = {
    name: '',
    displayName: '',
    licenseNumber: ''
  };

  constructor(public dialogRef: MdDialogRef<NewFacilityDialogComponent>,
              private facilityService: FacilityService,
              private themeService: ThemeService,
              private messages: MessagesService) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  // TODO: implement clean function that will clean the data
  createFacility(){
    // stores the facility object as it stands before processing
    let cleanedFacility: Facility = new Facility(this.facility);

    if (!cleanedFacility.displayName) {
      cleanedFacility.displayName = cleanedFacility.name;
    }

    // TODO: When in offline mode the dialog does not close when  createFacility
    // is called. It is waiting for the promise returned by addFacility to resolve
    // before it closes.
    this.facilityService.addFacility(cleanedFacility)
    .then(_ => {
      console.log('promise data', _);
      this.dialogRef.close(cleanedFacility);
    })
    .catch(e => {
      this.messages.firebaseAlert(e);
    });

    

  }

  get diagnostic() { return JSON.stringify(this.facility); }

}
