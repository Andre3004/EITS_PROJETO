import { PageRequest } from './../model/PageRequest';
import { User } from './../model/User';


import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService 
{
 
  headers: Headers;
  url: String = '/projeto/user/';

  constructor(public http: Http) 
  { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

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
  listAllUser(): Observable<User[]>
  {
    return this.http.get(this.url + 'listAllUser').map(res => res.json());
  }
  listUsers(page: number, size: number, property: String, order: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listUsers/'+ page + '/' + size + '/' + property + '/' + order).map(res => res.json());
  }
  activateUser(user): Observable<Response>
  {
    return this.http.patch(this.url + 'activateUser/' + user.id, JSON.stringify(user), { headers: this.headers });
  }
  deactivateUser(user): Observable<Response>
  {
    return this.http.patch(this.url + 'deactivateUser/' + user.id, JSON.stringify(user), { headers: this.headers });
  }
  findUserbyId(id): Observable<User>
  {
    return this.http.get(this.url + 'findUserById/' + id).map(res => res.json());;
  }
  getCurrentUser(): Observable<User>
  {
    return this.http.get(this.url + 'getCurrentUser').map(res => res.json());;
  } 
  updateUserToPassword(user): Observable<Response>
  {
    return this.http.put(this.url + 'updateUserToPassword', JSON.stringify(user), { headers: this.headers });
  }
  listUsersByFilters(page: number, size: number, property: String, order: String, textSearch: String): Observable<PageRequest>
  {
    return this.http.get(this.url + 'listUsersByFilters/'+ page + '/' + size + '/' + property + '/' + order + '/' + textSearch).map(res => res.json());
  } 
}