import { Component } from '@angular/core';
import { IconsServiceService } from './icons-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private iconService : IconsServiceService){}

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
  title = 'myWebApplicationUI';
}
