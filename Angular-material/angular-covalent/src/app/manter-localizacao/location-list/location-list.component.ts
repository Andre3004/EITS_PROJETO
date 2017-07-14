import { PageRequest } from './../../model/PageRequest';
import { User } from './../../model/User';
import { UserService } from './../../service/user.service';
import { LocationService } from './../../service/location.service';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent, ITdDataTableSortChangeEvent, TdDataTableSortingOrder } from '@covalent/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdInputModule, MdSnackBar} from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

    /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
   locations: PageRequest  = new PageRequest();
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
   property: String="location";
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
       name: 'codLocation', label: 'Código Localizador' , sortable: true
     },
     { 
       name: 'responsible', label: 'Responsável' , sortable: true
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
   * @param locationService 
   * @param router 
   * @param _dialogService 
   * @param _viewContainerRef 
   * @param userService 
   * @param route 
   */
  constructor(public snackBar: MdSnackBar, public locationService: LocationService, private router: Router,
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef, 
              public userService: UserService,private route: ActivatedRoute)
  {
    userService.getCurrentUser().subscribe(user => 
    { 
      this.userCurrent = user;
    }, 
    erro => console.log(erro));
    this.getLocations();
  }
  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  /**
   * 
   */
  getLocations()
  {
    if (this.filter === '')
    {
      this.filter = "null";
    }
    this.locationService.listMainLocationsByFilters(this.page -1 , this.size , this.property ,this.order, this.filter ).subscribe(locations=>
    {
      this.locations = locations;
      this.total = locations.totalElements;
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
    this.getLocations();
    this.router.navigate(['/location'],
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
       this.getLocations();
       this.router.navigate(['/location'],
       {queryParams: {'page': this.page}});
  }
  /**
   * 
   * @param sortEvent 
   */
  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void 
  {
    this.sortBy = sortEvent.name;
    this.order = sortEvent.order === TdDataTableSortingOrder.Ascending ? 'DESC' : 'ASC'; ;
    this.property = sortEvent.name; 
    this.getLocations();
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
      duration: 6000,
    }); 
  }
  /**
   * 
   * @param location 
   */
  openConfirm(location): void 
  {
      this._dialogService.openConfirm(
      {
          message:'Tem certeza que deseja excluir ' + location.codLocation +  ' ?',
          disableClose: false, 
          viewContainerRef: this._viewContainerRef,
          title: 'Excluir localização', 
          cancelButton: 'Não',
          acceptButton: 'Sim', 
      }).
      afterClosed().subscribe((accept: boolean) => 
      { 
        if (accept) 
        {
            this.locationService.deleteLocation(location).subscribe(() => 
            {
                this.openSnackBar('Localização removida com sucesso', 'Sucesso!');
                this.getLocations();
            },
            erro => 
            {
              console.log(erro);
              this.openSnackBar('Não foi possível remover a Localização ' + location.codLocation + ' a mesma está associada a um equipamento ou localização', 'Erro!');
            });
        }
      })
  }
}