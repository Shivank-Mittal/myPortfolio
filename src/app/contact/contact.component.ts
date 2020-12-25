import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  ngOnInit() {

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
