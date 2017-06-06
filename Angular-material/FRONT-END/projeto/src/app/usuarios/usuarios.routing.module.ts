import { UsuariosDeactivateGuard } from './../guards/usuarios-deactivate.guard';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuariosComponent } from './usuarios.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const usuariosRoutes = [
    {path: '', component: UsuariosComponent, children:[
        {path: 'new', component: UsuarioFormComponent, canDeactivate: [UsuariosDeactivateGuard]},
        {path: ':id', component:  UsuarioDetailComponent },
        {path: ':id/edit', component: UsuarioFormComponent, canDeactivate: [UsuariosDeactivateGuard]}
    ]},
    
];



@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]

})


export class UsuariosRoutingModule{}