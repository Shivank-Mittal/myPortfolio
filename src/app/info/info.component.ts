import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  _name = "Shivank Mittal"; 
  _shape= this.sanitizer.bypassSecurityTrustStyle("circle(200px at 45% 40% )");
  _imagePosition = "relative";  
  public picture = "./assets/pictures/webppPic.jpg";

  
  constructor(private sanitizer: DomSanitizer) { }
  

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onPicScroll(ElementType) {
    var value  = window.scrollY+200 ;
    if( value !> 200){
      this._shape = this.sanitizer.
      bypassSecurityTrustStyle("circle("+value + "px at 45% 40%  )");
    }
  }

  ngOnInit() {
    
  }

}
