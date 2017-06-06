import { IFormCanDeactivate } from './iform-candeactivate';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { UsuarioFormComponent } from './../usuarios/usuario-form/usuario-form.component';


@Injectable()
export class UsuariosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
        currentUser: any;
        permissions: any;
        
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
               return component.podeDesativar();
    }
}