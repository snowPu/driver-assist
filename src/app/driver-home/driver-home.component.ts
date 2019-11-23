import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { GeoLocationService } from 'src/shared/services/geo-location.service';

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.scss']
})
export class DriverHomeComponent implements OnInit {

  coordinates = {longitude: 0, latitude: 0};
  zoom = 10;
  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;
  red = '#FF0000';

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
  }];

  zones = [
    {paths: [{lat: 48.135, lng: 11.582},
    {lat: 48.5, lng: 12},
    {lat: 47.5, lng: 12}]}
  ];

  constructor(public geoLocationService: GeoLocationService) {
    // if (navigator) {
    //   navigator.geolocation.getCurrentPosition( pos => {
    //     console.log(pos.coords.longitude);
    //     this.coordinates.longitude = +pos.coords.longitude;
    //     this.coordinates.latitude = +pos.coords.latitude;
    //   });
    // }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  ngOnInit() {
    this.geoLocationService.getPosition().subscribe(
    (pos: Position) => {
        this.coordinates = {
          latitude:  +(pos.coords.latitude),
          longitude: +(pos.coords.longitude)
        };
    });
  }
}

// just an interface for type safety.
interface Marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}
