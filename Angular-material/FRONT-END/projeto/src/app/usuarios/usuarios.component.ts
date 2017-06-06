import { Broker } from 'eits-ng2';
import { Router } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }
  novoUsuario(){
      this.router.navigate(['usuarios/new']);
  }

}
