import { User } from './User';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdInputModule, MdSnackBar} from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component(
  {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
export class UserComponent  
{

    users: User[] = [];
    permission = false;

  constructor(public snackBar: MdSnackBar, public userService: UserService, private router: Router)
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

  confirmEnable(e: any, user) {
    if (window.confirm('Tem certeza que deseja ativar ' + user.name + ' ' + user.lastName +  ' ?')) {
      this.userService.activateUser(user).subscribe(() => 
      {
          this.permission = !this.permission;
          this.openSnackBar('Usuário ativado com sucesso', 'Sucesso!');
      },
      erro => 
      {
        console.log(erro)
        this.openSnackBar('Não foi possível ativar o usuário ', 'Erro!');
      });
    } else {
      e.preventDefault();
    }
  }
  confirmDisable(e: any, user) {
    if (window.confirm('Tem certeza que deseja desativar ' + user.name + ' ' + user.lastName +  ' ?')) 
    {
      this.userService.deactivateUser(user).subscribe(() => 
      {
          this.permission = !this.permission;
          this.openSnackBar('Usuário desativado com sucesso', 'Sucesso!');
          console.log('Usuario desativado');
      },
      erro => 
      {
        console.log(erro)
        this.openSnackBar('Não foi possível desativar o usuário ', 'Erro!');
      });
    } else {
      e.preventDefault();
    }
  }




    // openConfirmEnable(event, user): void 
    // {
    //     this._dialogService.openConfirm(
    //     {
    //         message: 'Tem certeza que deseja ativar ' + user.name + ' ' + user.lastName +  ' ?',
    //         disableClose: false, 
    //         viewContainerRef: this._viewContainerRef,
    //         title: 'Ativar usuário', 
    //         cancelButton: 'Não',
    //         acceptButton: 'Sim', 
    //     }).
    //     afterClosed().subscribe((accept: boolean) => 
    //     {
    //       if (accept) 
    //       {
    //           this.userService.activateUser(user).subscribe(() => 
    //           {
    //               this.permission = !this.permission;
    //               console.log('Usuario ativado com sucesso!');
    //               // let users = this.users.slice(0);
    //               // let indice = users.indexOf(user);
    //               // users.splice(indice, 1);
    //               // this.users = users;
    //           },
    //           erro => console.log(erro));
    //       }
    //       else
    //       {
    //         event.preventDefault();
    //       }
    //     })
    // }
}