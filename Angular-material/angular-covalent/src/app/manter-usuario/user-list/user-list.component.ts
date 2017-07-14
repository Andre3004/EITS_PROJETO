import { User } from './../../model/User';
import { PageRequest } from './../../model/PageRequest';

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

   /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
    /**
     * 
     */
    users: PageRequest  = new PageRequest();
    /**
     * 
     */ 
    userCurrent : User = new User();
    /**
     * 
     */
    page: number = 1;
    /**
     * 
     */
    size: number = 5;
    /**
     * 
     */
    order: String ="ASC";
    /**
     * 
     */
    property: String="name";
    /**
     * 
     */
    total: Number;
    /**
     * 
     */
    sortBy : String ="";
    /**
     * 
     */
    filter : String = "";
    /**
     * 
     */
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

  /*-------------------------------------------------------------------
	 * 		 					ONINIT
	 *-------------------------------------------------------------------*/
  ngOnInit()
  {
    this.route.queryParams.subscribe(
      (queryParams: any) => 
      {
        this.page = queryParams['page'] ;
      }
    )
  }

  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param snackBar 
   * @param userService 
   * @param router 
   * @param _dialogService 
   * @param _viewContainerRef 
   * @param route 
   * @param _dataTableService 
   */
  constructor(public snackBar: MdSnackBar, public userService: UserService, public router: Router, 
              private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef,
              public route: ActivatedRoute, private _dataTableService: TdDataTableService)
  {
      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
      }, 
      erro => console.log(erro));
      this.getUsers();
      Broker.of("userService").promise("helloWorld")
      .then((result) => {
        console.log(result);
      })
      .catch((message) => {
      console.log(message);
      });
      
  }

 /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  /**
   * 
   */
  getUsers()
  {
    if ( this.filter === '' )
    {
      this.filter = "null";
    }
    this.userService.listUsersByFilters(this.page -1 , this.size , this.property ,this.order, this.filter ).subscribe(users=>
    {
      this.users = users;
      this.total = users.totalElements;
    },
    erro => console.log(erro));
  }
  /**
   * 
   * @param textSearch 
   */
  search(textSearch: String) 
  {
    this.filter = textSearch;
    this.page = 1;
    this.getUsers();
    this.router.navigate(['/user'],
    {queryParams: {'page': this.page}});
  }

  /**
   * 
   * @param event 
   */
  change(event: IPageChangeEvent): void 
  {
       this.page = event.page.valueOf();
       this.size = event.pageSize.valueOf();
       this.getUsers();
       this.router.navigate(['/user'],
       {queryParams: {'page': this.page}});

  }
  /**
   * 
   * @param sortEvent 
   */
  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void 
  {
    this.sortBy = sortEvent.name;
    this.order = sortEvent.order === TdDataTableSortingOrder.Ascending ? 'DESC' : 'ASC'; 
    this.property= sortEvent.name; 
    this.getUsers();
  }
  /**
   * 
   * @param msg 
   * @param action 
   */
  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    });
  }
  /**
   * 
   * @param event 
   * @param user 
   */
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
            this.userService.updateUsertoActivate(user).subscribe(() => 
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
            this.userService.updateUsertoDeactivate(user).subscribe(() => 
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



