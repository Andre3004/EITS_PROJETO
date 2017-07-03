import { Location } from './../model/Location';
import { PageRequest } from './../model/PageRequest';

import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

/**
 * 
 */
@Injectable()
export class LocationService 
{
 
  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  headers: Headers;
  /**
   * 
   */
  url: String = '/projeto/location/';


  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  constructor(public http: Http) 
  { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  /*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param location 
   */
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
 
  /**
   * 
   */
  listAllLocation(): Observable<Location[]>
  {
    return this.http.get(this.url + 'listAllLocation').map(res => res.json());
  }
  
  /**
   * 
   * @param id 
   */
  listAllSubLocation(id): Observable<Location[]>
  {
    return this.http.get(this.url + 'listAllSubLocation/' + id).map(res => res.json());
  }
   /**
    * 
    */
  deleteLocation(location): Observable<Response>
  {
    return this.http.delete(this.url + 'deleteLocation/' + location.id);
  }

  /**
   * 
   * @param id 
   */
  findLocationbyId(id): Observable<Location>
  {
    return this.http.get(this.url + 'findLocationById/' + id).map(res => res.json());;
  }

  /**
   * 
   * @param page 
   * @param size 
   * @param property 
   * @param order 
   * @param filter 
   */
  listLocationsByFilters(page: number, size: number, property: String, order: String, filter: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listLocationsByFilters/'+ page + '/' + size + '/' + property + '/' + order + '/' + filter).map(res => res.json());
  }
  
  /**
   * 
   * @param page 
   * @param size 
   * @param property 
   * @param order 
   */
  listLocations(page: number, size: number, property: String, order: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listLocations/'+ page + '/' + size + '/' + property + '/' + order ).map(res => res.json());
  }



} 