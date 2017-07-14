import { PageRequest } from './../../model/PageRequest';
import { Location } from './../../model/Location';
import { LocationService } from './../../service/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TdDialogService, IPageChangeEvent } from '@covalent/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent 
{
   /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  location : Location = new Location();
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
  id: number;
   /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param _dialogService 
   * @param locationService 
   * @param router 
   * @param activatedRouter 
   */
  constructor(private _dialogService: TdDialogService, public locationService: LocationService, public router: Router, public activatedRouter: ActivatedRoute) 
  { 

    activatedRouter.params.subscribe(params => 
    {
      let id = params['id'];
      this.id = id;
    });

      locationService.findLocationbyId(this.id).subscribe( location => 
      {
        this.location = location
      }, 
      erro => console.log(erro));
      this.getSubLocations();
   }
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
}