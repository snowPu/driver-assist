import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverHomeComponent } from './driver-home/driver-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAd1JRFXwAPZ1AgFg11qRlPWlyZp-K2PzE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
