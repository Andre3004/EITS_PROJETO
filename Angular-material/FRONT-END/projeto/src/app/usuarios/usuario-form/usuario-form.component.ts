import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { UsuariosService } from './../usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {
    
  usuario: any = {};
  inscricao: Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.usuario = this.usuariosService.getUsuario(id);

        if ( this.usuario === null ){
          this.usuario = {};
        }
      }
    );

  }

  ngOnDestroy(){
     this.inscricao.unsubscribe();
  }
  onInput(){
    this.formMudou = true;
  }
  podeMudarRota(){
    if (this.formMudou){
        if (confirm('Tem certeza que deseja dessa página')){
          return true;
        }else{
          return false;
        }
        } 
    }
  podeDesativar(){
    return this.podeMudarRota();
  }

  

  }
