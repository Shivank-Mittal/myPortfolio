import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  _imagePosition = "relative";
  public picture = "./assets/pictures/SMDesinged.jpg";


  constructor() { }

  ngOnInit() {



    // gsap.from(".info", {
    //   scrollTrigger: {
    //     trigger: '.info',
    //     start: "Top bottom",
    //     markers: true,
    //   },
    //   y: 50,
    //   opacity: 0,
    //   duration: 1.2,
    //   stagger: .3
    // })

  }

}
