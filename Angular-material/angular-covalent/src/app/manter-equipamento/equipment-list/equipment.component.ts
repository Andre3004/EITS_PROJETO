import { UserService } from './../../service/user.service';
import { EquipmentService } from './../../service/equipment.service';
import { TdDialogService } from '@covalent/core';

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdInputModule, MdSnackBar} from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent{
 
   equipments: Object[] = [];
   userCurrent : Object;
   

  constructor(public snackBar: MdSnackBar, public equipmentService: EquipmentService, private router: Router,
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef, public userService: UserService)
  {
      equipmentService.listAllEquipment().subscribe(equipments => 
      { 
        this.equipments = equipments;
      },erro => console.log(erro)); 

      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
      }, 
      erro => console.log(erro));

      
  }
  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    }); 
  }
 
  openConfirm(equipment): void 
    {
        this._dialogService.openConfirm(
        {
            message:'Tem certeza que deseja excluir ' + equipment.name +  ' ?',
            disableClose: false, 
            viewContainerRef: this._viewContainerRef,
            title: 'Excluir equipamento', 
            cancelButton: 'Não',
            acceptButton: 'Sim', 
        }).
        afterClosed().subscribe((accept: boolean) => 
        {
          if (accept) 
          {
              this.equipmentService.deleteEquipment(equipment).subscribe(() => 
              {
                  let equipments = this.equipments.slice(0);
                  let indice = equipments.indexOf(equipment);
                  equipments.splice(indice, 1);
                  this.equipments = equipments;
                  this.openSnackBar('Equipamento removido com sucesso', 'Sucesso!');
              },
              erro => 
              {
                this.openSnackBar('Não foi possível remover o Equipamento ' + equipment.name, 'Erro!');
              }
              );
          }
          else
          {
            
          }
        })
    }
}
 