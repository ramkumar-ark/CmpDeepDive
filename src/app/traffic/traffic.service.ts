import { Injectable } from '@angular/core';
import { dummyTrafficData } from '../dummy-traffic-data';

@Injectable({ providedIn: 'root' })
export class TrafficService {
  private trafficData = dummyTrafficData;

  getTrafficData() {
    return this.trafficData;
  }

  getMaxTraffic() {
    return Math.max(...this.trafficData.map((data) => data.value));
  }
}
