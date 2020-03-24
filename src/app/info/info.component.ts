import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  _shape= this.sanitizer.bypassSecurityTrustStyle("circle(250px at 45% 40% )");
   
  public picture = "./assets/pictures/webppPic.jpg";

  
  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    var value  = window.scrollY +250;
    if( value !> 205){
    
    this._shape =this.sanitizer.bypassSecurityTrustStyle("circle("+value + "px at 45% 40%  )");
    }
  }
  ngOnInit() {
    
  }

}
