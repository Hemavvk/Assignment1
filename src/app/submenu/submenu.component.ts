import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  menuItems:string[];

  constructor() { 
  this.menuItems = ['Development','Design','Business','IT & Software','Personal Development','Marketing','Photography'];

  }

  ngOnInit() {
  }

}
