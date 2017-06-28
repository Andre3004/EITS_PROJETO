import { PageRequest } from './../../service/PageRequest';
import { Broker } from 'eits-ng2';
import { UserService } from './../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { MdInputModule, MdSnackBar, MdDialogModule } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService, IPageChangeEvent, ITdDataTableColumn, TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortChangeEvent } from '@covalent/core';

@Component(
  {
    selector: 'app-user',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
  })
export class UserListComponent  implements OnInit
{ 

    users: PageRequest  = new PageRequest(); 
    userCurrent : Object;
    page: number = 1;
    size: number = 5;
    order: String ="ASC";
    property: String="name";;
    total: Number;
    sortBy : String ="";
    filter : String = "";

  ngOnInit()
  {
    this.route.queryParams.subscribe(
      (queryParams: any) => 
      {
        this.page = queryParams['page'] ;
      }
    )
  }

  constructor(public snackBar: MdSnackBar, public userService: UserService, private router: Router, 
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef,
              private route: ActivatedRoute, private _dataTableService: TdDataTableService)
  {
      userService.listUsers(this.page - 1, this.size, this.property , this.order).subscribe(users => 
      { 
        this.total = users.totalElements;
        console.log(users)
        this.users = users;
      },  
      erro => console.log(erro));

      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
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
  getUsers()
  {
    if (this.filter === '')
    {
      this.userService.listUsers(this.page -1 , this.size , this.property ,this.order).subscribe(users=>
      {
        this.users = users;
        this.total = users.totalElements;
      },erro => console.log(erro));
    }
    else
    {
      this.userService.listUsersByFilters(0 , this.size , this.property ,this.order, this.filter ).subscribe(users=>
      {
        this.users = users;
        this.total = users.totalElements;
      },
      erro => console.log(erro));
    }
  }
  columns: ITdDataTableColumn[] = 
  [
    { 
      name: 'name', label: 'Nome' , sortable: true
    },
    { 
      name: 'lastName', label: 'Sobrenome' , sortable: true
    },
    { 
      name: 'email', label: 'Email' , sortable: true
    },
    { 
      name: '', label: '' , sortable: false
    }
  ];
  search(textSearch: String) 
  {
    this.filter = textSearch;
    this.getUsers();
    this.router.navigate(['/user'],
    {queryParams: {'page': this.page}});
  }

  change(event: IPageChangeEvent): void 
  {
       this.page = event.page.valueOf();
       this.size = event.pageSize.valueOf();
       this.getUsers();
       this.router.navigate(['/user'],
       {queryParams: {'page': this.page}});

  }
  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void 
  {
    this.sortBy = sortEvent.name;
    this.order = sortEvent.order === TdDataTableSortingOrder.Ascending ? 'DESC' : 'ASC'; ;
    this.property= sortEvent.name; 
    this.getUsers();
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
                this.getUsers();
            },
            erro => 
            {
              this.openSnackBar('Não foi possível ativar o usuário ', 'Erro!');
            }
            );
          }
          else 
          {
            this.userService.deactivateUser(user).subscribe(() => 
            {
                this.openSnackBar('Usuário desativado com sucesso', 'Sucesso!');
                this.getUsers();
            },
            erro => 
            {
              console.log(erro);
              this.openSnackBar('Não foi possível desativar o usuário ', 'Erro!');
            }
            );
          }
        }
      })
  }
}



