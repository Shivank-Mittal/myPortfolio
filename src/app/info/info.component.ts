import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  _imagePosition = "relative";  
  public picture = "./assets/pictures/SMMicro.jpg";

  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

}
