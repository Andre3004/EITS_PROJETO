import { UsuariosService } from './../usuarios.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit, OnDestroy {

  usuario: any; 
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.usuario = this.usuariosService.getUsuario(id);
      }
    );

  }
  editarContato(){
    this.router.navigate(['/usuarios', this.usuario.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
 
  }

}
