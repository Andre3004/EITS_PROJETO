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

   locations: PageRequest  = new PageRequest();
   userCurrent : User;
   page: number = 1;
   size: number = 5;
   order: String ="ASC";
   property: String="location";;
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
  constructor(public snackBar: MdSnackBar, public locationService: LocationService, private router: Router,
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef, 
              public userService: UserService,private route: ActivatedRoute)
  {
      locationService.listLocations(this.page - 1, this.size, this.property , this.order).subscribe(locations => 
      { 
        this.total = locations.totalElements;
        console.log(locations)
        this.locations = locations;
      },  
      erro => console.log(erro));

      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
      }, 
      erro => console.log(erro));

      
  }
  getLocations()
  {
    if (this.filter === '')
    {
      this.locationService.listLocations(this.page -1 , this.size , this.property ,this.order).subscribe(locations=>
      {
        this.locations = locations;
        this.total = locations.totalElements;
      },erro => console.log(erro));
    }
    else
    {
      this.locationService.listLocationsByFilters(0 , this.size , this.property ,this.order, this.filter ).subscribe(locations=>
      {
        this.locations = locations;
        this.total = locations.totalElements;
      },
      erro => console.log(erro));
    }
  }
  columns: ITdDataTableColumn[] = 
  [
    { 
      name: 'codLocation', label: 'Código Localizador' , sortable: true
    },
    { 
      name: 'location', label: 'Localização principal' , sortable: true
    },
    { 
      name: 'responsible', label: 'Responsável' , sortable: true
    },
    { 
      name: '', label: '' , sortable: false
    }
  ];
  search(textSearch: String) 
  {
    this.filter = textSearch;
    this.getLocations();
    console.log(this.locations);
    this.router.navigate(['/location'],
    {queryParams: {'page': this.page}});
  }
  change(event: IPageChangeEvent): void 
  {
       this.page = event.page.valueOf();
       this.size = event.pageSize.valueOf();
       this.getLocations();
       this.router.navigate(['/location'],
       {queryParams: {'page': this.page}});

  }
  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void 
  {
    this.sortBy = sortEvent.name;
    this.order = sortEvent.order === TdDataTableSortingOrder.Ascending ? 'DESC' : 'ASC'; ;
    this.property = sortEvent.name; 
    this.getLocations();
  }

  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    }); 
  }
 
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
                this.openSnackBar('Não foi possível remover a Localização ' + location.codLocation, 'Erro!');
              }
              );
          }
        })
    }
}