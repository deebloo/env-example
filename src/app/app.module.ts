import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CONFIG_PATH } from './config-path';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: CONFIG_PATH, useValue: environment.configPath }],
  bootstrap: [AppComponent]
})
export class AppModule {}
