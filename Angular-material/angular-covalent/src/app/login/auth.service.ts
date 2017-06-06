import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService 
{

  headers: Headers;
  url: String = '/projeto/login/';

  constructor(public http: Http) 
  { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  doLogin(user)
  {
    return this.http.get(this.url + 'auth/' + user.email);
  }


}
