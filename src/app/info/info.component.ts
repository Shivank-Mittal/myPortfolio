import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

 
 // _shape= this.sanitizer.bypassSecurityTrustStyle("circle(100px at 43% 40% )");
  _imagePosition = "relative";  
  public picture = "./assets/pictures/SM.jpg";

  
  constructor(private sanitizer: DomSanitizer) { }
  

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onPicScroll(ElementType) {
  //   var value  = window.scrollY+100 ;
  //   if( value !> 100){
  //     this._shape = this.sanitizer.
  //     bypassSecurityTrustStyle("circle("+value + "px at 43% 40%  )");
  //   }
  // }

  ngOnInit() {
    
  }

}
