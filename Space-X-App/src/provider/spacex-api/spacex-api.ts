import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../models/Launch';



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

  getAllLaunchesNext() : Observable<Launch[]>{
    const EndpointUtl = `${this.baseUrl}/launches/upcoming`;
    return this.http.get<Launch[]>(EndpointUtl); 
  }

   getAllLaunchesLatest() : Observable<Launch[]>{
    const EndpointUtl = `${this.baseUrl}/launches`;
    return this.http.get<Launch[]>(EndpointUtl);
  }



}