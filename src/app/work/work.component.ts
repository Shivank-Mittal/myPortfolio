import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    gsap.from(".transtition2", {
      scrollTrigger: {
        trigger: '.transtition2',
        start: "Top bottom"
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
    })
  }

}
