import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ThemeService {

  currentTheme: Subject<string> = new BehaviorSubject<string>(null);

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {

      let urlSegments = val.url.split('/');

      if (urlSegments[1] === 'dashboard') {
        this.setTheme('dashboard-theme');
      } else if (urlSegments[1] === 'residents') {
        this.setTheme('residents-theme');
      } else if (urlSegments[1] === 'staff') {
        this.setTheme('staff-theme');
      } else if (urlSegments[1] === 'company') {
        this.setTheme('company-theme');
      }

    });
  }

  setTheme(theme: string): void {
    this.currentTheme.next(theme);
  }


}
