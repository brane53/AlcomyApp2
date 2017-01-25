import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { FacilityService } from '../../core/facility.service';
import { Facility } from '../../facility/shared/facility';
import { NewFacilityDialogComponent } from '../../shared/new-facility-dialog/new-facility-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alc-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.scss']
})
export class FacilityListComponent implements OnInit, OnDestroy {

  dialogRef: MdDialogRef<NewFacilityDialogComponent>;
  dialogSubscription: Subscription;
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

  ngOnDestroy(){
    this.dialogSubscription.unsubscribe();
  }


  // TODO: This is a temporary implementation
  addFacility(facility: Facility){
    this.facilityService.addFacility(facility);
  }

  openNewFacilityForm() {
    this.dialogRef = this.dialog.open(NewFacilityDialogComponent, this.dialogConfig);

    this.dialogSubscription = this.dialogRef.afterClosed().subscribe(newFacilityData => {
      this.newFacility = newFacilityData;
      console.log(this.newFacility);
      this.dialogRef = null;
    });
  }

}
