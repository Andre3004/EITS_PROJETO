import { Injectable } from '@angular/core';
@Injectable()
export class UsuariosService {

  private usuarios: any[] = [
    {id: 1, nome: 'Admin', email: 'admin@gmail.com', tipo: 'Administrador'},
    {id: 2, nome: 'Usuario 2', email: 'usuario02@gmail.com', tipo: 'Engenheiro'},
    {id: 3, nome: 'Usuario 3', email: 'usuario03@gmail.com', tipo: 'Engenheiro'}
  ];


  getUsuarios(){
    return this.usuarios;
  }
  getUsuario(id:number){
    for(let i=0; i<this.usuarios.length; i++){
      let usuario = this.usuarios[i];
      if( usuario.id == id ){
        return usuario;
      }
    }
    return null;
  }
  constructor() { }

}
