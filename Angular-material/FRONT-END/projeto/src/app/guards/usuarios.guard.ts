import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class UsuariosGuard implements CanActivateChild {

    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log(route);
            console.log(state);

        if (state.url.includes('edit')){
            
        }
        return true;
        }

} 