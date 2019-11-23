import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { GeoLocationService } from 'src/shared/services/geo-location.service';
// import { default as zoneJSON } from 'server/clusters.json';
import { tileLayer, latLng } from 'leaflet';
import { ClustersService } from 'src/shared/services/clusters.service';
import { UserService } from 'src/shared/services/user.service';
import { ZonesService } from 'src/shared/services/zones.service';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.scss']
})
export class GodComponent implements OnInit {

  coordinates = {latitude: 48.5, longitude: 12};
  zoom = 12;
  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;
  red = '#FF0000';
  currentZoneID = null;

  options;

  infoWindowPos = {lat: 0, lng: 0};
  infoContent   = '';
  infoWinOpen   = false;


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

  // zones = [
  //   {paths: [{lat: 48.135, lng: 11.582},
  //   {lat: 48.5, lng: 12},
  //   {lat: 47.5, lng: 12},
  //   {lat: 47.1, lng: 13}]},
  //   {paths: [{lat: 11.572380065917969, lng: 48.14524334899598},
  //     {lat: 11.557273864746094, lng: 48.13997423269043},
  //     {lat: 11.564483642578125, lng: 48.130350972491556},
  //     {lat: 11.584396362304688, lng: 48.13447544771421},
  //     {lat: 11.572380065917969, lng: 48.14524334899598}]}
  // ];

  zones: Zone[];

  colorCode = {
    1: '#f7decb',
    2: '#ffb57d',
    3: '#ff9747',
    4: '#ff8a30',
    5: '#FF7D19'
  };
  zoneText = {
    1: 'Very Poor Demand',
    2: 'Poor Demand',
    3: 'Average Demand',
    4: 'High Demand',
    5: 'Very High Demand'
  };

  constructor(public geoLocationService: GeoLocationService,
              public clustersService: ClustersService,
              public zonesService: ZonesService,
              public userService: UserService ) {

    this.userService.setUser({
    firstName: 'Mark',
    lastName: 'Who',
    type: 'god'
    });
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
    // if (this.zonesService.zones.length > 0) {
    //   this.zones = this.zonesService.zones;
    //   console.log(this.zones);
    // }

    this.zonesService.zonesBS.subscribe(zones => {
      console.log(this.zones);
      if (zones.length > 0 && (!this.zones || this.zones.length === 0)) {
        this.zones = zones.slice();
        console.log(this.zones);
      }
    });

    // this.geoLocationService.getPosition().subscribe(
    // (pos: Position) => {
    //     this.coordinates = {
    //       latitude:  +(pos.coords.latitude),
    //       longitude: +(pos.coords.longitude)
    //     };
    //     this.options = {
    //       layers: [
    //         tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
    //       ],
    //       zoom: 5,
    //       center: latLng(this.coordinates.latitude, this.coordinates.longitude)
    //     };
    //     console.log(this.options);
    // });
  }
  getColorCode(weight) {
    return this.colorCode[weight];
  }

  zoneClick(event, center, id, weight) {
    const contentString = 'Zone ' + id + ' - ' + this.zoneText[weight];
    this.infoWindowPos = center;
    this.infoContent = contentString;
    this.infoWinOpen = true;
    this.currentZoneID = id;

    console.log(this.infoWindowPos);
  }

  confirmCluster(id) {
    this.clustersService.confirmCluster(id).then(res => {
      if (res) {
        console.log(res);
        this.zones.filter(zone => zone.id === id)[0].weight = res['Normalized Weight'];
      }
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

interface Zone {
  id: number;
  paths: Coord[];
  weight: number;
  zoneCenter: Coord;
}

interface Coord {
  lat: number;
  lng: number;
}
