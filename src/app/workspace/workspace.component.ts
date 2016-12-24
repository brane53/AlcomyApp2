import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  theme: string;

  constructor() { 
    this.theme = "";
  }

  ngOnInit() {
  }

  // @temporary - Just used to show off the changing of themes
  // Ideally, we'd only want to change themes after a successful navigation takes place.
  changeTheme(theme){
    this.theme = theme;
  }

}
