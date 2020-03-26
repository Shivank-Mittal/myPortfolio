import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  _MyInfotmation= " I am a Software Developer living in Paris. A coding lover and game freek. Either backend or frontend, Both are very exiting to me. ";
  constructor() { }


  ngOnInit() {
  }

}
