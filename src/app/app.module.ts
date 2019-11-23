import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientModule } from '@angular/common/http';
import { GodHomeComponent } from './god-home/god-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DriverHomeComponent,
    GodHomeComponent
  ],
  imports: [
    AgmSnazzyInfoWindowModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAd1JRFXwAPZ1AgFg11qRlPWlyZp-K2PzE'
    }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
