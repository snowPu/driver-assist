import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GeoLocationService {

  coordinates: any;

  constructor() { }

  public getPosition(): Observable<Position> {
    console.log('getting position');
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => {
        console.log(pos);
        observer.next(pos);
      // tslint:disable-next-line:no-unused-expression
      }), () => { console.log('Position is not available'); },
        // tslint:disable-next-line:no-unused-expression
        {
            enableHighAccuracy: true
        };
        });
    }
}