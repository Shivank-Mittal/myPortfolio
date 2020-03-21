import { Component, OnInit } from '@angular/core';
import { icons } from '../icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public socialMediaAcountIcons = [icons.Email, icons.Linkedin,icons.github , icons.facebook, icons.instagram];
  constructor() { }

  ngOnInit() {
  }

  public goToLink(url : string){

  switch(url){
    case icons.Email :
      console.log(icons.Email);
      break;
    case icons.Linkedin :
      console.log(icons.Linkedin);
      break;
    case icons.github :
      window.open("https://github.com/Shivank-Mittal");
      break;
    case icons.facebook :
      console.log(icons.Linkedin);
      break;
    case icons.instagram :
      console.log(icons.Linkedin);
      break;   
      
    
  }
  }

}
