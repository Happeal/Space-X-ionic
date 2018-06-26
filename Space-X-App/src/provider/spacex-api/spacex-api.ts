import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../models/Launch';
import { Rocket } from '../../models/Rocket';
import { Launchpad } from '../../models/Launchpad';
import { Capsule } from '../../models/Capsule';
import { CapsuleDetail } from '../../models/Capsule';
import { Spacex } from '../../models/Spacex';
import { SpacexHistory } from '../../models/SpacexHistory';




/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {
  baseUrl = 'https://api.spacexdata.com/v2';
  constructor(private http: HttpClient) {
    }

  getInfoOfSpaceX() : Observable<Spacex>{
    const EndpointUtl = `${this.baseUrl}/info`;
    return this.http.get<Spacex>(EndpointUtl);
  }
  getHistoryOfSpaceX() : Observable<SpacexHistory[]>{
    const EndpointUtl = `${this.baseUrl}/info/history`;
    return this.http.get<SpacexHistory[]>(EndpointUtl);

  }
  getAllLaunchesNext() : Observable<Launch[]>{
    const EndpointUtl = `${this.baseUrl}/launches/upcoming`;
    return this.http.get<Launch[]>(EndpointUtl); 
  }
  
   getAllLaunchesLatest() : Observable<Launch[]>{
    const EndpointUtl = `${this.baseUrl}/launches`;
    return this.http.get<Launch[]>(EndpointUtl);
  }

  getAllRockets() : Observable<Rocket[]>{
    const EndpointUtl = `${this.baseUrl}/rockets`;
    return this.http.get<Rocket[]>(EndpointUtl); 
  }

  getLaunchpadByName(name : string) : Observable<Launchpad>{
    const EndpointUtl = `${this.baseUrl}/launchpads/${name}`;
    return this.http.get<Launchpad>(EndpointUtl);
  }

  getAllLaunchpads() : Observable<Launchpad[]>{
    const EndpointUtl = `${this.baseUrl}/launchpads`;
    return this.http.get<Launchpad[]>(EndpointUtl); 
  }

  getRocketById(id : string) : Observable<Rocket>{
    const EndpointUtl = `${this.baseUrl}/rockets/${id}`;
    return this.http.get<Rocket>(EndpointUtl);
  }

  getCapsuleDetailBySerial(serial : string) : Observable<CapsuleDetail>{
    const EndpointUtl = `${this.baseUrl}/parts/caps/${serial}`;
    return this.http.get<CapsuleDetail>(EndpointUtl);
  }
  getCapsuleById(id : string) : Observable<Capsule>{
    const EndpointUtl = `${this.baseUrl}/capsules/${id}`;
    return this.http.get<Capsule>(EndpointUtl);
  }

  getAllCapsule() : Observable<Capsule[]>{
    const EndpointUtl = `${this.baseUrl}/capsules/`;
    return this.http.get<Capsule[]>(EndpointUtl);
  }



}