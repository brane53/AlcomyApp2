import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { NewResidentDialogComponent } from '../../shared/new-resident-dialog/new-resident-dialog.component';
import { ResidentsService } from '../../core/residents.service';
import { Resident } from '../shared/resident';

@Component({
  selector: 'alc-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.scss']
})
export class ResidentListComponent implements OnInit {
  dialogRef: MdDialogRef<NewResidentDialogComponent>;

  dialogConfig: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: ''
  };
  
  newResident: Resident;

  residents: FirebaseListObservable<Resident[]>;

  // residents: Resident[] = [
  //   {
  //     firstName: 'Brane',
  //     lastName: 'Vrajich',
  //     imageUrl: 'assets/images/avatars/brane.jpg'
  //   }
  // ];

  constructor(public dialog: MdDialog, private residentsService: ResidentsService) {

  }

  ngOnInit() {
    this.residents = this.residentsService.residentList;
    console.log('Residents', this.residents);
    this.residents.subscribe((snap) => {
      console.log('Snapshot', snap);
    })
  }

  openNewResidentForm() {
    this.dialogRef = this.dialog.open(NewResidentDialogComponent, this.dialogConfig);

    this.dialogRef.afterClosed().subscribe(newResidentData => {
      this.newResident = newResidentData;
      this.dialogRef = null;
    });
  }

}
