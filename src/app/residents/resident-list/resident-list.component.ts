import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { NewResidentDialogComponent } from '../../shared/new-resident-dialog/new-resident-dialog.component';
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
    width: '600px',
    height: '400px'
  };

  newResident: Resident;

  residents: Resident[] = [
    {
      firstName: 'Brane',
      lastName: 'Vrajich',
      imageUrl: 'assets/images/avatars/brane.jpg'
    }
  ];

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewResidentForm() {
    this.dialogRef = this.dialog.open(NewResidentDialogComponent, this.dialogConfig);

    this.dialogRef.afterClosed().subscribe(newResidentData => {
      this.newResident = newResidentData;
      this.dialogRef = null;
    });
  }

}
