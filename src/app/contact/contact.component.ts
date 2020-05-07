import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

   NoOfColumnsForGrid ;
   colspan;
   rowHeight;
  ngOnInit() {

    if(window.innerWidth > 780){this.NoOfColumnsForGrid=2; this.colspan=2, this.rowHeight="2:0.5"}
    else {this.NoOfColumnsForGrid=1; this.colspan =1; this.rowHeight="fit"}
  }

}
