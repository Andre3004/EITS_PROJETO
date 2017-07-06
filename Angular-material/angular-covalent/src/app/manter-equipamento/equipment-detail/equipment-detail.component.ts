import { MdSnackBar } from '@angular/material';
import { Equipment } from './../../model/Equipment';
import { EquipmentService } from './../../service/equipment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TdDialogService } from '@covalent/core';
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
  subEquipments : Equipment[] ;
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
      this.equipmentService.listAllSubEquipments(this.id).subscribe(subEquipments => 
      { 
        this.subEquipments = subEquipments;
      }, 
      erro => console.log(erro));
  }
  /**
   * 
   */
  downloadFile()
  {
      window.location.assign("/projeto/equipment/downloadFile/" + this.id);
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
   */
  backClick()
  {
    this._location.back();
  }
}