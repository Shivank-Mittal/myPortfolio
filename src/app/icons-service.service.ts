import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { icons } from './icons';

@Injectable({
  providedIn: 'root'
})
export class IconsServiceService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  public registerIcons(): void {
    
     this.loadIcons(Object.values(icons), './assets/svg');
  }
  public loadIcons(iconKeys: string[], iconUrl: string){

    iconKeys.forEach(key => {
      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
    });

  }
}
