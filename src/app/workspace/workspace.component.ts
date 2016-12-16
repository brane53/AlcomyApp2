import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  theme: string

  constructor() { 
    this.theme = "";
  }

  ngOnInit() {
  }

}
