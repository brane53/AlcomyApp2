import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Subscription } from 'rxjs';
import { Facility } from '../../common/models';

@Component({
  selector: 'alc-new-facility-dialog',
  templateUrl: './new-facility-dialog.component.html',
  styleUrls: ['./new-facility-dialog.component.scss']
})
export class NewFacilityDialogComponent implements OnInit {

  theme: string;
  themeSubscription: Subscription;
  facility: Facility = {
    displayName: '',
    name: '',
    licenseNumber: ''
  };

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  get diagnostic() { return JSON.stringify(this.facility); }

}
