import { UserService } from './../../service/user.service';
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
    userCurrent : Object;
    permission = false;

  constructor(public snackBar: MdSnackBar, public userService: UserService, private router: Router, 
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef)
  {
      userService.listAllUser().subscribe(users => 
      { 
        this.users = users;
      },  
      erro => console.log(erro));

      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
        console.log(this.userCurrent);
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

  //   teste(id){
  //   this.router.navigate(['users/edit', id], { relativeTo: this.route });
  // }

  openConfirm(event, user): void 
  {
      this._dialogService.openConfirm(
      {
          message: user.active ? 'Tem certeza que deseja desativar ' + user.name + ' ' + user.lastName +  ' ?' : 'Tem certeza que deseja ativar ' + user.name + ' ' + user.lastName +  ' ?',
          disableClose: false, 
          viewContainerRef: this._viewContainerRef,
          title: user.active ? 'Desativar usuário' : 'Ativar usuário', 
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