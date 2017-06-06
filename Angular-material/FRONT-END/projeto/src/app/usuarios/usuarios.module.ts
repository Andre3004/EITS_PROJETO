import { BrowserModule } from '@angular/platform-browser';
import { UsuariosService } from './usuarios.service';
import { UsuariosDeactivateGuard } from './../guards/usuarios-deactivate.guard';
import { FormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
@NgModule({
    imports: [  CommonModule, UsuariosRoutingModule, FormsModule, BrowserModule ],
    exports:[],
    declarations: [ UsuariosComponent, UsuarioFormComponent, UsuarioDetailComponent ],
    providers: [ UsuariosDeactivateGuard, UsuariosService],

})

export class UsuariosModule{}