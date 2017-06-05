import { User } from './User';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdInputModule, MdSnackBar, MdDialogModule } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';

@Component(
  {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
export class UserComponent  
{

    users: Object[] = [];
    permission = false;

  constructor(public snackBar: MdSnackBar, public userService: UserService, private router: Router, 
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef)
  {
      userService.listAllUser().subscribe(users => 
      { 
        this.users = users;
        console.log(this.users);
      }, 
      erro => console.log(erro));
      
  }
 
  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    });
  }

  openConfirm(event, user): void 
  {
      this._dialogService.openConfirm(
      {
          message: user.active ? 'Tem certeza que deseja ativar ' + user.name + ' ' + user.lastName +  ' ?' : 'Tem certeza que deseja ativar ' + user.name + ' ' + user.lastName +  ' ?',
          disableClose: false, 
          viewContainerRef: this._viewContainerRef,
          title: user.active ? 'Ativar usuário' : 'Desativar usuário', 
          cancelButton: 'Não',
          acceptButton: 'Sim', 
      }).
      afterClosed().subscribe((accept: boolean) => 
      {
        if (accept) 
        {
          if (!user.active) 
          {
            this.userService.activateUser(user).subscribe(() => 
            {
                console.log('Usuario ativado com sucesso!');
                this.openSnackBar('Usuário ativado com sucesso', 'Sucesso!');
            },
            erro => 
            {
              console.log(erro);
              this.openSnackBar('Não foi possível ativar o usuário ', 'Erro!');
            }
            );
          }
          else 
          {
            this.userService.deactivateUser(user).subscribe(() => 
            {
                console.log('Usuario desativado com sucesso!');
                this.openSnackBar('Usuário desativado com sucesso', 'Sucesso!');
            },
            erro => 
            {
              console.log(erro);
              this.openSnackBar('Não foi possível desativar o usuário ', 'Erro!');
            }
            );
          }
        }
        else
        {
          
        }
      })
  }
}