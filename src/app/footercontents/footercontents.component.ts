import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footercontents',
  templateUrl: './footercontents.component.html',
  styleUrls: ['./footercontents.component.css']
})
export class FootercontentsComponent implements OnInit {
  Items:string[];
  constructor() { 
  this.Items = ['Terms','PrivacyPolicy and Cookie Policy','Intellectual Policy'];

  }

  ngOnInit() {
  }

}
