import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ThemeService } from '../core/theme.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  theme: string;
  themeSubscription: Subscription;
  routerEvents;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {

    this.themeSubscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });

  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  // @temporary - Just used to show off the changing of themes
  // Ideally, we'd only want to change themes after a successful navigation takes place.
  changeTheme(theme) {
  }

}
