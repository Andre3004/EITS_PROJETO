
import { UsuariosGuard } from './guards/usuarios.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', loadChildren: 'app/usuarios/usuarios.module#UsuariosModule', 
    canActivate: [AuthGuard],
    canActivateChild: [UsuariosGuard]
  },
  { path: 'equipamentos', component: EquipamentosComponent, canActivate: [AuthGuard] },
  { path: 'localizacao', component: LocalizacaoComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
