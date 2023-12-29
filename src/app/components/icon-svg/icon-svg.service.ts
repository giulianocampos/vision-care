import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const icons = [
  'warning',
  'check_circle'
];

@Injectable({
  providedIn: 'root'
})
export class IconSvgService {

  constructor(
    iconReg: MatIconRegistry,
		sanitizer: DomSanitizer
  ) {
      icons.map(
        name =>
          iconReg.addSvgIcon(
            name,
            sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`)
          )
      );
    }
}