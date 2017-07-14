import { PageRequest } from './../../model/PageRequest';
import { MdSnackBar } from '@angular/material';
import { Equipment } from './../../model/Equipment';
import { EquipmentService } from './../../service/equipment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TdDialogService, IPageChangeEvent } from '@covalent/core';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent 
{
  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  equipment : Equipment = new Equipment();
  /**
   * 
   */
  subEquipments: PageRequest = new PageRequest();
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
   * @param equipmentService 
   * @param router 
   * @param activatedRouter 
   * @param snackBar 
   * @param _viewContainerRef 
   */
  constructor(private _dialogService: TdDialogService, public equipmentService: EquipmentService, 
              public router: Router, public activatedRouter: ActivatedRoute, public snackBar: MdSnackBar,
              private _viewContainerRef: ViewContainerRef, private _location: Location) 
  { 

    activatedRouter.params.subscribe(params => 
    {
      let id = params['id'];
      this.id = id;
    });

      equipmentService.findEquipmentbyId(this.id).subscribe( equipment => 
      {
        this.equipment = equipment
      }, 
      erro => console.log(erro));

     this.getSubEquipments();
  }
   /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  /**
   * 
   */
  getSubEquipments()
  {
      if (this.filter === '')
      { 
        this.filter = "null";
      }
      this.equipmentService.listSubEquipmentByFilter(this.page -1 , this.size , this.property ,this.order, this.filter, this.id).subscribe(subEquipments => 
      {         
        this.subEquipments = subEquipments;
        this.total = this.subEquipments.totalElements;
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
    this.getSubEquipments();
  }
  /**
   * 
   * @param event 
   */
  change(event: IPageChangeEvent): void 
  {
      this.page = event.page.valueOf();
      this.size = event.pageSize.valueOf();
      this.getSubEquipments();
  }
  /**
   * 
   */
  backClick()
  {
    this._location.back();
  }
}