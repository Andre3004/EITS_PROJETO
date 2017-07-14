import { UserService } from './../../service/user.service';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ITdDataTableColumn, ITdDataTableSelectEvent, IPageChangeEvent, ITdDataTableSortChangeEvent, TdDataTableSortingOrder } from '@covalent/core';
import { User } from './../../model/User';
import { PageRequest } from './../../model/PageRequest';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-user-consult-user',
  templateUrl: './user-consult-user.component.html',
  styleUrls: ['./user-consult-user.component.css']
})
export class UserConsultUserComponent
{
  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  users : PageRequest = new PageRequest();
  /**
   * 
   */
  user : User = new User();
  /**
   * 
   */
  id : Number;
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
  sortBy : String ="";
  /**
   * 
   */
  filter: String="";
  /**
   * 
   */
  total : Number;
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
    }
  ];

  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/

  constructor(public userService: UserService,  public activatedRoute: ActivatedRoute,
              public router: Router, public mdDialogRef: MdDialogRef<UserConsultUserComponent>,
              @Inject(MD_DIALOG_DATA) public data: Number) 
  { 
     this.id = data;
     this.getUsers();
  }
   
 /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  getUsers()
  {
      if ( this.filter === '' )
      {
        this.filter = "null";
      }
      this.userService.listUsersByFilters(this.page -1, this.size, this.property, this.order, this.filter).subscribe(users => 
      { 
        this.users = users;
        this.total = users.totalElements;
      }, 
      erro => console.log(erro));
  }
  /**
   * 
   */
  public rowSelect(selectedRow: ITdDataTableSelectEvent)
  {
    if (selectedRow != null)
    {
       this.user = selectedRow.row;
    }
  }
  /**
   * 
   */
  selectUser(): void
  {
    if ( this.user != null )
    {
      this.mdDialogRef.close({user: this.user});
    }
  }
  /**
   * 
   */
  emitter()
  {
    this.selectUser();
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
  }
  /**
   * 
   * @param sortEvent 
   */
  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void 
  {
    this.sortBy = sortEvent.name;
    this.order = sortEvent.order == TdDataTableSortingOrder.Ascending ? 'DESC' : 'ASC'; 
    this.property = sortEvent.name; 
    this.getUsers();
  }
}
