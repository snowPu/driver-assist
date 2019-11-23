import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ClustersService {

    constructor(public http: HttpClient) {}
    getClustersEndPoint = 'https://damp-inlet-23657.herokuapp.com/getClusters';
    confirmClusterEndpoint = 'https://damp-inlet-23657.herokuapp.com/confirmClusters/';
    updateClusterEndpoint = 'https://damp-inlet-23657.herokuapp.com/updateWeightByCluster/';
    datetimeClusterEndpoint = 'https://damp-inlet-23657.herokuapp.com/getClustersByDate/';

    httpHeaders = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Access-Control-Allow-Headers', '*,Content-Type, Authorization')
            .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
            .append('Access-Control-Allow-Origin', '*');

    getClusters() {
        return this.http.get(this.getClustersEndPoint,
            {headers: this.httpHeaders})
            .toPromise()
            .then(response => {
                return response;
            }).catch(error => {
                return null;
            });
    }

    confirmCluster(id) {
        const url = this.confirmClusterEndpoint + id + '/driver/100';
        return this.http.get(url,
            {headers: this.httpHeaders})
            .toPromise()
            .then(response => {
                return response;
            }).catch(error => {
                return null;
            });
    }

    updateClusterWeight(id, weight) {
        const url = this.updateClusterEndpoint + id + '/weight/' + weight;
        return this.http.get(url,
            {headers: this.httpHeaders})
            .toPromise()
            .then(response => {
                return response;
            }).catch(error => {
                return null;
            });
    }

    getBusyClusters(time) {
        const url = this.datetimeClusterEndpoint + time.toString();
        return this.http.get(url,
            {headers: this.httpHeaders})
            .toPromise()
            .then(response => {
                return response;
            }).catch(error => {
                return null;
            });
    }
}
