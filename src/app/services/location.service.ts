
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocationService {

  path: string = "http://localhost:33001/api/Location";

  constructor(private http: HttpClient) { }
  
  public GetAllLocations(){
    return this.http.get<any>(this.path + "/GetAllLocations");
  }

  public GetAllEmergencyLocations(){
    return this.http.get<any>(this.path + "/GetAllEmergencyLocations");
  }
}