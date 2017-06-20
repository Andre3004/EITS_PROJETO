import { PageRequest } from './../../service/PageRequest';
import { Broker } from 'eits-ng2';
import { UserService } from './../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MdInputModule, MdSnackBar, MdDialogModule } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService, IPageChangeEvent } from '@covalent/core';

@Component(
  {
    selector: 'app-user',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
  })
export class UserListComponent  implements OnInit
{ 

    users: PageRequest ; 


    userCurrent : Object;
    permission = false;
    loading: boolean = true;
    page: number;
    total: Number;

  ngOnInit()
  {
    this.route.queryParams.subscribe(
      (queryParams: any) => 
      {
        this.page = queryParams['page'] - 1;
        console.log("Teste page " + this.page );
      }
    )
  }

  constructor(public snackBar: MdSnackBar, public userService: UserService, private router: Router, 
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef,
              private route: ActivatedRoute)
  {
      userService.listUsers(0,5).subscribe(users => 
      { 
        this.total = users.totalElements;
        console.log(users)
        this.users = users;
      },  
      erro => console.log(erro));

      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
        console.log(this.userCurrent);
      }, 
      erro => console.log(erro));
      // Broker.of("userService").promise("listAllUser")
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch((message) => {
      // //this.messagesService.toastError( message );
      // console.log(message);
      // });
      
  }

  change(event: IPageChangeEvent): void 
  {
       this.userService.listUsers(event.page.valueOf() - 1, 5).subscribe(users => 
       { 
         this.users = users;
       },  
       erro => console.log(erro));
       this.router.navigate(['/user'],
       {queryParams: {'page': event.page.valueOf()}});

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
                this.userService.listAllUser().subscribe(users => 
                { 
                  console.log(users);
                },  
                erro => console.log(erro));
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
                this.userService.listAllUser().subscribe(users => 
                { 
                  console.log(users);
                },  
                erro => console.log(erro));
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



