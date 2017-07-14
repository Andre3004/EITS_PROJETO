import { PageRequest } from './../../model/PageRequest';
import { LocationConsultLocationComponent } from './../location-consult-location/location-consult-location.component';
import { UserConsultUserComponent } from './../../manter-usuario/user-consult-user/user-consult-user.component';
import { Location } from './../../model/Location';
import { User } from './../../model/User';
import { TdLoadingService, LoadingMode, LoadingType, TdDialogService, IPageChangeEvent } from '@covalent/core';
import { LocationService } from './../../service/location.service';
import { UserService } from './../../service/user.service';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit{ 
   /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  users: User[] ;
  /**
   * 
   */
  locations : Location[] = [];
  /**
   * 
   */
  subLocations: PageRequest = new PageRequest();
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
  property: String="codLocation";
  /**
    * 
    */
  total: Number = 0;
  /**
    * 
    */
  filter: String = "null";
  /**
   * 
   */
  id: Number;
  /**
   * 
   */
  location: Location = new Location(); 
  /**
   * 
   */
  dialogRefUser: MdDialogRef<UserConsultUserComponent>
  /**
   * 
   */
  dialogRefLocation: MdDialogRef<LocationConsultLocationComponent>
  /**
   * 
   */
  fullNameResponsible : String = null;
  /**
   * 
   */
  fullNameViceResponsible : String = null;
  /**
   * 
   */
  fullCodLocation: String = null;
  /**
   * 
   */
  userCurrent : User = new User();
   /**
    * 
    */
  /*-------------------------------------------------------------------
	 * 		 					ONINIT
	 *-------------------------------------------------------------------*/
  ngOnInit(): void 
  {
    if (this.location)
    {
      
    }
  }
  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param userService 
   * @param locationService 
   * @param activatedRoute 
   * @param snackBar 
   * @param router 
   * @param _loadingService 
   * @param dialog 
   */
  constructor(public userService: UserService, public locationService: LocationService, 
              public activatedRoute: ActivatedRoute, public snackBar: MdSnackBar, public router: Router, 
              private _loadingService: TdLoadingService,  public dialog: MdDialog, private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef) 
  {
      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
      }, 
      erro => console.log(erro));
      activatedRoute.params.subscribe(params => {
                
        let id = params['id'];
        this.id = id;
        if (id)
        {
          this.locationService.findLocationbyId(id).subscribe( 
            location => 
            {
              this.location = location;
              if ( this.location.location )
              {
                this.fullCodLocation = this.location.location.codLocation;
              }
              if ( this.location.responsible )
              {
                this.fullNameResponsible = this.location.responsible.name +' '+this.location.responsible.lastName;
              }
              if ( this.location.viceResponsible )
              {
                this.fullNameViceResponsible = this.location.viceResponsible.name +' '+this.location.viceResponsible.lastName;
              }
            }, 
            erro => console.log(erro));
        }
        if(id)
        {
          this.getSubLocations();
        }
      });

      this._loadingService.create(
      {
        name: 'configFullscreen',
        mode: LoadingMode.Indeterminate,
        type: LoadingType.Linear,
        color: 'accent',
      });
  }
   /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  /**
   * 
   */
  getSubLocations()
  {
      if (this.filter === '')
      {
        this.filter = "null";
      }
      this.locationService.listSubLocationByFilter(this.page -1 , this.size , this.property ,this.order, this.filter, this.id).subscribe(subLocations => 
      {         
        this.subLocations = subLocations;
        this.total = this.subLocations.totalElements;
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
    this.getSubLocations();
  }
  /**
   * 
   * @param event 
   */
  change(event: IPageChangeEvent): void 
  {
       this.page = event.page.valueOf();
       this.size = event.pageSize.valueOf();
       this.getSubLocations();
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
      duration: 7000, 
    }); 
  }
  /** 
   * 
   */
  clearResponsible()
  {
    this.location.responsible = null;
    this.fullNameResponsible = null;
  }
  /**
   * 
   */
  dialogSelectResponsible()
  {
    let dialog = this.dialog.open(UserConsultUserComponent, 
    {
      height: '480px',
      width: '800px',
    }
    ).afterClosed().subscribe((result: any ) =>
    { 
      if ( result.user )
      {
        this.location.responsible = result.user;
        this.fullNameResponsible = this.location.responsible.name +' '+this.location.responsible.lastName;
      }
    }
    );
  }
  /**
   * 
   */
  dialogSelectMainLocation()
  {
    let dialog = this.dialog.open(LocationConsultLocationComponent, 
    {
      height: '480px',
      width: '800px',
      data: this.id
    }
    ).afterClosed().subscribe((result: any ) =>
    { 
      if ( result.location )
      {
        this.location.location = result.location;
        this.fullCodLocation = this.location.location.codLocation;
      }
    }
    );
  }
  /**
   * 
   */
  clearMainLocation()
  {
    this.location.location = null;
    this.fullCodLocation = null;
  }
   /**
   * 
   */
  clearViceResponsible()
  {
    this.location.viceResponsible = null;
    this.fullNameViceResponsible = null;
  }
  /**
   * 
   */
  dialogSelectViceResponsible()
  {
    let dialog = this.dialog.open(UserConsultUserComponent, 
    {
      height: '480px',
      width: '800px',
    }
    ).afterClosed().subscribe((result: any ) =>
    { 
      if ( result.user != undefined )
      {
        this.location.viceResponsible = result.user;
        this.fullNameViceResponsible = this.location.viceResponsible.name +' '+this.location.viceResponsible.lastName;
      }
    }
    );
  }
  /**
   * 
   * @param event 
   */
  saveLocation(event)
  { 
    this._loadingService.register('configFullscreen');
    setTimeout(() => 
    {
      this._loadingService.resolve('configFullscreen');
    }, 1000000);

    this.locationService.saveLocation(this.location).subscribe(() => 
    {  
      setTimeout(() => 
      {
        this._loadingService.resolve('configFullscreen');
      }, 0);  
      this.router.navigate(['/location'],  { queryParams: {page:1}});
      
      this.openSnackBar('Localização salva com sucesso ', 'Sucesso!');
    }, 
    erro => 
    {  
      setTimeout(() => 
      {
        this._loadingService.resolve('configFullscreen');
      }, 0);
      this.openSnackBar(erro._body, 'Erro!');
    });
  }
  /**
   * 
   * @param location 
   */
  openConfirmDelete(location: Location): void 
  {
      this._dialogService.openConfirm(
      {
          message:'Tem certeza que deseja excluir ' + location.codLocation +  ' ?',
          disableClose: false, 
          viewContainerRef: this._viewContainerRef,
          title: 'Excluir sub localização', 
          cancelButton: 'Não',
          acceptButton: 'Sim', 
      }).
      afterClosed().subscribe((accept: boolean) => 
      {
        if (accept) 
        {
            this.locationService.deleteLocation(location).subscribe(() => 
            {
                this.openSnackBar('Sub localização removido com sucesso', 'Sucesso!');
                this.getSubLocations();
            },
            erro => 
            {
              this.openSnackBar('Não foi possível remover a sub localização ' + location.codLocation + ' a mesma está associada a um ou mais equipamentos ou localizaçãos', 'Erro!');
            }
            );
        }
      })
  }

}
