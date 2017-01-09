import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'alc-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}
}
