import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) : Observable<boolean> | boolean{

    if (this.authService.usuarioEstaAutenticado() === true){
      console.log(this.authService.usuarioEstaAutenticado() );
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
