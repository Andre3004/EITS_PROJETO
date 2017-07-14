import { PageRequest } from './../model/PageRequest';
import { User } from './../model/User';


import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

/**
 * 
 */
@Injectable()
export class UserService 
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
  url: String = '/projeto/api/user/';

 
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
   * @param user 
   */
  insertUser(user): Observable<Response>
  {
    if(user.id != undefined )
    {
       return this.http.put(this.url + 'updateUser', JSON.stringify(user), { headers: this.headers });
    }
    else 
    {
       return this.http.post(this.url + 'insertUser', JSON.stringify(user), { headers: this.headers });
    }
  }
  /**
   * 
   * @param user 
   */
  updateUsertoActivate(user): Observable<Response>
  {
    return this.http.patch(this.url + 'updateUsertoActivate/' + user.id, JSON.stringify(user), { headers: this.headers });
  }
  /**
   * 
   * @param user 
   */
  updateUsertoDeactivate(user): Observable<Response>
  {
    return this.http.patch(this.url + 'updateUsertoDeactivate/' + user.id, JSON.stringify(user), { headers: this.headers });
  }
  /**
   * 
   * @param id 
   */
  findUserbyId(id): Observable<User>
  {
    return this.http.get(this.url + 'findUserById/' + id).map(res => res.json());;
  }
  /**
   * 
   */
  getCurrentUser(): Observable<User>
  {
    return this.http.get(this.url + 'getCurrentUser').map(res => res.json());;
  } 
  /**
   * 
   * @param user 
   */
  updateUserToPassword(user): Observable<Response>
  {
    return this.http.put(this.url + 'updateUserToPassword', JSON.stringify(user), { headers: this.headers });
  }
  /**
   * 
   * @param page 
   * @param size 
   * @param property 
   * @param order 
   * @param textSearch 
   */
  listUsersByFilters(page: number, size: number, property: String, order: String, textSearch: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listUsersByFilters/'+ page + '/' + size + '/' + property + '/' + order + '/' + textSearch).map(res => res.json());
  } 
}