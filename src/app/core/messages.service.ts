import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { AlertMessagesDialogComponent } from '../shared/alert-messages/alert-messages.component';
import { FirebaseError } from '../common/models';


@Injectable()
export class MessagesService {
  dialogRef: MdDialogRef<AlertMessagesDialogComponent>;
  dialogConfig: MdDialogConfig = {
    disableClose: false,

    height: '',
    width: '',
    position: {
      top: '',
      right: '',
      left: '',
      bottom: ''
    }
  };

  constructor(private dialog: MdDialog) { }

  firebaseAlert(error, message?: string) {

    let currentMessage = {
      name: error.name,
      message: error.message,
      code: error.code
    };

    if (message) {
      currentMessage['message'] = message;
    }

    this.dialogRef = this.dialog.open(AlertMessagesDialogComponent, this.dialogConfig);
    this.dialogRef.componentInstance.message = currentMessage;

    this.dialogRef.afterClosed().subscribe(data => {
    });

  }

}
