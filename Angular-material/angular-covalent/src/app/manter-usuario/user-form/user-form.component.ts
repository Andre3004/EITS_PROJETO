import { TdLoadingService, LoadingType, LoadingMode } from '@covalent/core';
import { UserService } from './../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';
import { MdInputModule, MdSnackBar} from '@angular/material';
import { Broker } from 'eits-ng2';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent 
{

    user : Object = {};
          sexs = 
          [
            {value: 'MASCULINO', viewValue: 'Masculino'},
            {value: 'FEMININO', viewValue: 'Feminino'},
            {value: 'OUTRO', viewValue: 'Outro'}
          ];
          roles = 
          [ 
            {value: 'ROLE_ADMIN', viewValue: 'Administrador'},
            {value: 'ROLE_USER', viewValue: 'Engenheiro'},
          ];
          
          constructor(private _loadingService: TdLoadingService, public snackBar: MdSnackBar, public userService: UserService, public router: Router, public activatedRouter: ActivatedRoute)
          {
            activatedRouter.params.subscribe(params => {
               
                let id = params['id'];
                if (id)
                {
                  this.userService.findUserbyId(id).subscribe( user => this.user = user, erro => console.log(erro));
                  console.log(this.user);
                }
                
            });
            this._loadingService.create({
              name: 'configFullscreen',
              mode: LoadingMode.Indeterminate,
              type: LoadingType.Linear,
              color: 'accent',
            });
            
          }

          openSnackBar(msg, action) 
          {
              this.snackBar.open(msg, action, 
              {
                duration: 5000,
              });
          }
 
          insertUser(event)
          { 
            console.log(this.user);
            this._loadingService.register('configFullscreen');

            setTimeout(() => {
              this._loadingService.resolve('configFullscreen');
            }, 1000000);

            this.userService.insertUser(this.user).subscribe(() => 
            {

              setTimeout(() => {
              this._loadingService.resolve('configFullscreen');
               }, 0);

              this.router.navigate(['/user']);
              this.openSnackBar('Usuário salvo com sucesso ', 'Sucesso!');
            }, 
            erro => 
            {

              setTimeout(() => {
              this._loadingService.resolve('configFullscreen');
               }, 0);

              console.log(erro)
              this.openSnackBar('Não foi possível salvar o usuário ', 'Erro!');
            });
          } 

            updatePassword(user)
            {
               this.userService.updateUserToPassword(user).subscribe(() => 
              {
                this.openSnackBar('Senha Atualizada com sucesso', 'Sucesso!');
              }, 
              erro => 
                this.openSnackBar('Não foi possível salvar a senha', 'Erro!'));
            }

}
//window.location.reload();