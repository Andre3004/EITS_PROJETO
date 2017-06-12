import { EquipmentService } from './../../service/equipment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TdDialogService } from '@covalent/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent 
{

  equipment : Object = 
  { 
    id: Number,
    name: String,
    description: String,
    archivePath: String,
    location: Object,
    equipment: Object,
  };
  subequipments : Object[] ;
  id: number;

  constructor(private _dialogService: TdDialogService, public equipmentService: EquipmentService, public router: Router, public activatedRouter: ActivatedRoute) 
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

      equipmentService.listAllSubEquipment(this.id).subscribe(subequipments => 
      { 
        this.subequipments = subequipments;
      }, 
      erro => console.log(erro));
   }
}