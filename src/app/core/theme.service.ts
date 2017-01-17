import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ThemeService {

  currentTheme: Subject<string>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  changeTheme(theme: string){
    this.currentTheme = theme;
  }


}
