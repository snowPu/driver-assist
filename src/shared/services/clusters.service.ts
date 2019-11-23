import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ClustersService {

    constructor(public http: HttpClient) {}
    endPoint = 'https://damp-inlet-23657.herokuapp.com/getClusters';

    httpHeaders = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Access-Control-Allow-Headers', '*,Content-Type, Authorization')
            .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
            .append('Access-Control-Allow-Origin', '*');

    getClusters() {
        return this.http.get(this.endPoint,
            {headers: this.httpHeaders})
            .toPromise()
            .then(response => {
                return response;
            }).catch(error => {
                return null;
            });
    }
}