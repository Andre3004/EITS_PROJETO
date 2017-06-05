import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService 
{
 
  headers: Headers;
  url: String = 'http://localhost:8083/projeto/user/';

  constructor(public http: Http) 
  { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  insertUser(user): Observable<Response>
  {
    console.log(user.id,'ID FINAL');
    console.log(user);
    if(user.id != undefined )
    {
       return this.http.put(this.url + 'updateUser', JSON.stringify(user), { headers: this.headers });
    }
    else
    {
       return this.http.post(this.url + 'insertUser', JSON.stringify(user), { headers: this.headers });
    }
  }
 
  listAllUser(): Observable<Object[]>
  {
    return this.http.get(this.url + 'listAllUser').map(res => res.json());
  }
  
  activateUser(user): Observable<Response>
  {
    return this.http.patch(this.url + 'activateUser/' + user.id, JSON.stringify(user), { headers: this.headers });
  }
  deactivateUser(user): Observable<Response>
  {
      return this.http.patch(this.url + 'deactivateUser/' + user.id, JSON.stringify(user), { headers: this.headers });
  }
  findUserbyId(id): Observable<Object>
  {
    return this.http.get(this.url + 'findUserById/' + id).map(res => res.json());;
  }



}