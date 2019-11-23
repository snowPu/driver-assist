import { Component, OnInit } from '@angular/core';
import { ClustersService } from 'src/shared/services/clusters.service';
import { ZonesService } from 'src/shared/services/zones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Driver Assist SixT';
  constructor(private clustersService: ClustersService, private zonesService: ZonesService) {
  }

  ngOnInit() {
    this.clustersService.getClusters().then(res => {
      if (res) {
        console.log(res);
        this.zonesService.processZones(res);
      }
    });
  }
}
