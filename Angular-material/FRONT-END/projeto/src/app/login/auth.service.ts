import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.email === 'a' && usuario.senha === 'a' ){
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
