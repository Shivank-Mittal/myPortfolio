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

  downloadButton = false;


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

  onDownloadButtonClick() {
    this.downloadButton = !this.downloadButton;
  }

  onpenSocialPage(page) {
    const Linkedin_url = "https://www.linkedin.com/in/shivank-mittal-09055ba3/"
    const Github_url = "https://github.com/Shivank-Mittal"
    const Facebook_url = "https://www.facebook.com/shivank.mittal.7"
    const twitter_url = "https://twitter.com/shivankmittal"

    switch (page) {
      case "facebook":
        window.open(Facebook_url, '_blank');
        break;
      case "twitter":
        window.open(twitter_url, '_blank');
        break;
      case "github":
        window.open(Github_url, '_blank');
        break;
      case "lnkedin":
        window.open(Linkedin_url, '_blank');
        break;

      default:
        break;
    }
  }

}
