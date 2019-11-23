import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SupermarketService {

    constructor(public http: HttpClient) {}
    getSuperMarketsEndpoint = 'http://damp-inlet-23657.herokuapp.com/getHotspots/city/0';

    httpHeaders = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Access-Control-Allow-Headers', '*,Content-Type, Authorization')
            .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
            .append('Access-Control-Allow-Origin', '*');

    getSupermarkets() {
        return this.http.get(this.getSuperMarketsEndpoint,
            {headers: this.httpHeaders})
            .toPromise()
            .then(response => {
                return response;
            }).catch(error => {
                return null;
            });
    }
}
