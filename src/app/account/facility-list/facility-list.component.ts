import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { FacilityService } from '../../core/facility.service';
import { Facility } from '../../facility/shared/facility';
import { NewFacilityDialogComponent } from '../../shared/new-facility-dialog/new-facility-dialog.component';

@Component({
  selector: 'alc-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.scss']
})
export class FacilityListComponent implements OnInit {

  dialogRef: MdDialogRef<NewFacilityDialogComponent>;

  dialogConfig: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: ''
  };
  
  newFacility: Facility;

  facilities: FirebaseListObservable<Facility[]>;

  constructor(private facilityService: FacilityService,
              private dialog: MdDialog) {}

  ngOnInit() {
    this.facilities = this.facilityService.facilityList;
  }

  // TODO: This is a temporary implementation
  addFacility(facility: Facility){
    this.facilityService.addFacility(facility);
  }

  openNewFacilityForm() {
    this.dialogRef = this.dialog.open(NewFacilityDialogComponent, this.dialogConfig);

    this.dialogRef.afterClosed().subscribe(newFacilityData => {
      this.newFacility = newFacilityData;
      this.dialogRef = null;
    });
  }

}
