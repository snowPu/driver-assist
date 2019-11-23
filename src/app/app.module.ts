import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DriverHomeComponent
  ],
  imports: [
    AgmSnazzyInfoWindowModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAd1JRFXwAPZ1AgFg11qRlPWlyZp-K2PzE'
    })
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
