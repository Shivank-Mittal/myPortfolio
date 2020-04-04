import { Component, OnInit } from '@angular/core';
import { icons, socialAccounts } from '../icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public socialMediaAcountIcons = [icons.Email, icons.Linkedin, icons.github , icons.facebook, icons.instagram];
  public dasboardMenue = ["ABOUT","WORK","CONTACT","COVID-19"];
  constructor() { }

  ngOnInit() {
  }

  public goToLink(clickedIcon : string){

    if(clickedIcon != icons.Email){

      window.open(socialAccounts[clickedIcon]);
    }
    else{
      const selBox = document.createElement('textarea');
      selBox.value = "mittal.shivank@gmail.com";
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);

    }
}
  public toLoacation( item : string)
  {
    console.log("test");
    console.log(item)
    document.getElementById(item).scrollIntoView({behavior:"smooth"});
  }


}
