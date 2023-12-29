import { Component } from '@angular/core';
import { IconSvgService } from './components/icon-svg/icon-svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'visioncare';

  constructor(
    private iconSvgService: IconSvgService
  ) {
  }
}
