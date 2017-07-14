import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from './../../service/location.service';
import { ITdDataTableColumn, ITdDataTableSelectEvent, IPageChangeEvent, ITdDataTableSortChangeEvent, TdDataTableSortingOrder } from '@covalent/core';
import { PageRequest } from './../../model/PageRequest';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-location-consult-location',
  templateUrl: './location-consult-location.component.html',
  styleUrls: ['./location-consult-location.component.css']
})
export class LocationConsultLocationComponent
{
  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  mainLocations : PageRequest = new PageRequest();
  /**
   * 
   */
  location : Location;
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
  property: String="codLocation";
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
      name: 'codLocation', label: 'Código localizador' , sortable: true
    },
    { 
      name: 'responsible.name', label: 'Nome do responsável' , sortable: true
    },
    { 
      name: 'responsible.lastName', label: 'Sobrenome do responsável' , sortable: true
    }
  ];

  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/

  constructor(public locationService: LocationService,  public activatedRoute: ActivatedRoute,
              public router: Router, public mdDialogRef: MdDialogRef<LocationConsultLocationComponent>,
              @Inject(MD_DIALOG_DATA) public data: Number) 
  { 
     this.id = data;
     this.getLocations(this.id);
  }
   
 /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  getLocations(id: Number)
  {
      if ( this.filter === '' )
      {
        this.filter = "null";
      }
      if (!id)
      {
        this.locationService.listLocationsByFilters(this.page -1, this.size, this.property, this.order, this.filter).subscribe(mainLocations => 
        { 
          this.mainLocations = mainLocations;
          this.total = mainLocations.totalElements;
        }, 
        erro => console.log(erro));
      }
      else
      {
        this.locationService.ListNonAssociatedLocationByFilter(this.page -1, this.size, this.property, this.order, this.id, this.filter).subscribe(mainLocations => 
        { 
          this.mainLocations = mainLocations;
          this.total = mainLocations.totalElements;
        }, 
        erro => console.log(erro));
      }
      
  }
  /**
   * 
   */
  public rowSelect(selectedRow: ITdDataTableSelectEvent)
  {
    if (selectedRow != null)
    {
       this.location = selectedRow.row;
    }
  }
  /**
   * 
   */
  selectLocation(): void
  {
    if ( this.location != null )
    {
      this.mdDialogRef.close({location: this.location});
    }
  }
  /**
   * 
   */
  emitter()
  {
    this.selectLocation();
  }
  /**
   * 
   * @param textSearch 
   */
  search(textSearch: String) 
  {
    this.filter = textSearch;
    this.page = 1;
    this.getLocations(this.id);
  }
  /**
   * 
   * @param event 
   */
  change(event: IPageChangeEvent): void 
  {
       this.page = event.page.valueOf();
       this.size = event.pageSize.valueOf();
       this.getLocations(this.id);
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
    this.getLocations(this.id);
  }

}
