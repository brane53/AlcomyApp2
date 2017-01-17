import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alc-new-resident-dialog',
  templateUrl: './new-resident-dialog.component.html',
  styleUrls: ['./new-resident-dialog.component.scss']
})
export class NewResidentDialogComponent implements OnInit, OnDestroy {
  theme: string;
  themeSubscription: Subscription;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

}
