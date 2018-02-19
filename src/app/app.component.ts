import { Component, Inject } from '@angular/core';

import { CONFIG_PATH } from './config-path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(CONFIG_PATH) config) {
    console.log('HEY MARK!', config);
  }
}
