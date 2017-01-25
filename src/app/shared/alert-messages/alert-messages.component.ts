import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../core/messages.service';
import { FirebaseError } from '../../common/models';

@Component({
  selector: 'alc-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.scss']
})
export class AlertMessagesDialogComponent implements OnInit {

  message: FirebaseError;

  constructor() { }

  ngOnInit() {
  }

}
