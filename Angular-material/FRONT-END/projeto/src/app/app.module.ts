import { UsuariosGuard } from './guards/usuarios.guard';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { HomeComponent } from './home/home.component';
//import { UsuariosModule } from "app/usuarios/usuarios.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { AuthService } from './login/auth.service';
import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocalizacaoComponent,
    EquipamentosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // UsuariosModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
     CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule
  ],
  exports: [
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [AuthService, AuthGuard, UsuariosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }
