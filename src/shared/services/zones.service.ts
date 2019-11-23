import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ZonesService {
    zones: Zone[] = [];
    zonesBS = new BehaviorSubject([]);

    processZones(zoneJSON) {
        this.zones = [];
        for (const zone of zoneJSON.features) {
          const paths = [];
          let weight = 0;
          let id = -1;
          let sumLat = 0;
          let sumLong = 0;
          let cnt = 0;
          // console.log(zone);
          if (zone['properties']) {
            id = zone['properties'].id;
            weight = zone['properties'].weight;
          }
          if (zone['geometry']) {
            // console.log(zone['geometry']);
            const allPoints = zone['geometry']['coordinates'][0];
            // console.log(allPoints);
            for (const point of allPoints) {
              paths.push({lng: point[0], lat: point[1]});
              sumLat += point[1];
              sumLong += point[0];
              cnt ++;
            }
          }
          const zoneCenter = {lat: sumLat / cnt, lng: sumLong / cnt};
          this.zones.push({id, paths, weight, zoneCenter});
        }
        console.log(this.zones);
        this.zonesBS.next(this.zones);
    }
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

