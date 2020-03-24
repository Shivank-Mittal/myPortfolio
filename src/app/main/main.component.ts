import { Component, OnInit } from '@angular/core';
import { icons } from '../icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public socialMediaAcountIcons = [icons.Email, icons.Linkedin, icons.github , icons.facebook, icons.instagram];
  public dasboardMenue = ["About","Experence","Education", "Skills"];
  constructor() { }

  ngOnInit() {
  }

  public goToLink(url : string){

  switch(url)
  {
    case icons.Email :
      const selBox = document.createElement('textarea');
      selBox.value = "mittal.shivank@gmail.com";
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      break;
    case icons.Linkedin :
      window.open("https://www.linkedin.com/in/shivank-mittal-09055ba3");
      break;
    case icons.github :
      window.open("https://github.com/Shivank-Mittal");
      break;
    case icons.facebook :
      window.open("https://www.facebook.com/shivank.mittal.7");
      break;
    case icons.instagram :
      window.open("https://www.instagram.com/shivank.m/");
      break; }
  }

  public toLoacation( item : string)
  {
    document.getElementById(item).scrollIntoView({behavior:"smooth"});
  }


}
