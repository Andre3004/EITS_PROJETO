import { UserService } from './../service/user.service';
import { User } from './User';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService implements CanActivate
{
  userCurrent : User;

  constructor ( public userService: UserService, public router: Router)
  {
    userService.getCurrentUser().subscribe(user => 
    { 
      this.userCurrent = user;
    }, 
    erro => console.log(erro));
  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> 
  {
    if ( this.userCurrent.permission == 'ROLE_ADMIN' )
    {
      return true;
    }
      this.router.navigate(['']);
      
      return false;
  }
}
