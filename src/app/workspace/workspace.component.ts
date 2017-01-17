import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  theme: string;
  routerEvents;

  constructor(private router: Router) {}

  ngOnInit() {

      this.routerEvents = this.router.events.subscribe((val) => {
        
        let urlSegments = val.url.split('/');

        if (urlSegments[1] === 'dashboard') {
          this.theme = 'dashboard-theme';
        } else if (urlSegments[1] === 'residents') {
          this.theme = 'residents-theme';
        } else if (urlSegments[1] === 'staff') {
          this.theme = 'staff-theme';
        } else if (urlSegments[1] === 'company') {
          this.theme = 'company-theme';
        }
      });


  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe()
  }

  // @temporary - Just used to show off the changing of themes
  // Ideally, we'd only want to change themes after a successful navigation takes place.
  changeTheme(theme) {
  }

}
