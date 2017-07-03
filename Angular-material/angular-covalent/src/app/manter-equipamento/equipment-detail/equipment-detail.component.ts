import { MdSnackBar } from '@angular/material';
import { Equipment } from './../../model/Equipment';
import { EquipmentService } from './../../service/equipment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TdDialogService } from '@covalent/core';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

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
  subequipments : Equipment[] ;
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
              private _viewContainerRef: ViewContainerRef) 
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
      this.equipmentService.listAllSubEquipment(this.id).subscribe(subequipments => 
      { 
        this.subequipments = subequipments;
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
   * @param equipment 
   */
  openConfirm(equipment): void 
  {
      this._dialogService.openConfirm(
      {
          message:'Tem certeza que deseja desvincular ' + equipment.name +  ' ?',
          disableClose: false, 
          viewContainerRef: this._viewContainerRef,
          title: 'Desvincular equipamento', 
          cancelButton: 'Não',
          acceptButton: 'Sim', 
      }).
      afterClosed().subscribe((accept: boolean) => 
      {
        if (accept) 
        {
            this.equipmentService.deleteEquipment(equipment).subscribe(() => 
            {
                this.openSnackBar('Sub equipamento removido com sucesso', 'Sucesso!');
                this.getSubEquipments();
            },
            erro => 
            {
              this.openSnackBar('Não foi possível remover o sub equipamento ' + equipment.name, 'Erro!');
            }
            );
        }
      })
  }
}