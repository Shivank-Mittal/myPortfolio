import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    gsap.from(".transition2", {
      scrollTrigger: {
        trigger: '.transition2',
        start: "Top bottom"
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: .3
    })

    gsap.from(".transition3", {
      scrollTrigger: {
        trigger: '.transition3',
        start: "Top bottom"
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: .3
    })

    gsap.from(".transition4", {
      scrollTrigger: {
        trigger: '.transition4',
        start: "Top bottom"
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: .3
    })
  }

}
