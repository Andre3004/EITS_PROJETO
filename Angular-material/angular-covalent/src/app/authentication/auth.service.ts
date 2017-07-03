import { User } from './../model/User';
import { UserService } from './../service/user.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService implements CanActivate
{
  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
   /**
    * 
    */
   userCurrent : User = new User();
   /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param userService 
   * @param router 
   */
  constructor ( public userService: UserService, public router: Router)
  {
    userService.getCurrentUser().subscribe(user => 
    { 
      this.userCurrent = user;
    }, 
    erro => console.log(erro));
  }
  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  /**
   * 
   * @param route 
   * @param state 
   */
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
