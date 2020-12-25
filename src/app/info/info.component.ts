import { Component, OnInit, HostListener } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    gsap.from(".info-container", {
      scrollTrigger: {
        trigger: '.info-container',
        start: "Top bottom"
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
    })


    gsap.from(".avatar", {
      scrollTrigger: {
        trigger: '.avatar',
        start: "Top bottom"
      },
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      scale: 0.5,
      rotation: 20
    })

    gsap.from(".content", {
      scrollTrigger: {
        trigger: '.content',
        start: "Top bottom"
      },
      y: -50,
      opacity: 0,
      duration: 1.2,
      delay: 1,
      scale: 0.1,
    })

  }

}
