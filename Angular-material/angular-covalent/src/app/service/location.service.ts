import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocationService 
{
 
  headers: Headers;
  url: String = '/projeto/location/';

  constructor(public http: Http) 
  { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  insertLocation(location): Observable<Response>
  {
    if(location.id != undefined )
    {
       return this.http.put(this.url + 'updateLocation', JSON.stringify(location), { headers: this.headers });
    }
    else
    {
       return this.http.post(this.url + 'insertLocation', JSON.stringify(location), { headers: this.headers });
    }
  }
 
  listAllLocation(): Observable<Object[]>
  {
    return this.http.get(this.url + 'listAllLocation').map(res => res.json());
  }

  listAllSubLocation(id): Observable<Object[]>
  {
    return this.http.get(this.url + 'listAllSubLocation/' + id).map(res => res.json());
  }
  
  deleteLocation(location): Observable<Response>
  {
    return this.http.delete(this.url + 'deleteLocation/' + location.id);
  }

  findLocationbyId(id): Observable<Object>
  {
    return this.http.get(this.url + 'findLocationById/' + id).map(res => res.json());;
  }

  



}