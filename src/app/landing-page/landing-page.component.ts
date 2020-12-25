import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Power4, Back } from "gsap/all";
import { } from "gsap/all"


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  menu

  constructor() { }

  ngOnInit(): void {

    this.animate();
  }

  animate = () => {
    var t1 = gsap.timeline();
    t1.from(".hero", {
      y: '-30%',
      opacity: '0',
      duration: 2,
      ease: Power4.easeOut
    })

    t1.from(".stagger1", {
      opacity: 0,
      y: -50,
      stagger: .3,
      ease: Power4.easeOut,
      duration: 2
    }, "-=1.5")

    t1.from(".hero-design", {
      opacity: 0, y: 100, ease: Power4.easeOut, duration: 1
    }, "-=2")

    gsap.from(".squarAnim ", { stagger: .1, scale: 0, duration: 2, ease: Back.easeOut.config(1.7), delay: 1 });
    t1.from(" .social-icons", { stagger: .1, scale: 0, duration: 2, ease: Back.easeOut.config(1.7) }, "-=2");

  }

}
