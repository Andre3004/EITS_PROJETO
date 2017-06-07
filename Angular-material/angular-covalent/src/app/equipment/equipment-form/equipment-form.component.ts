import { LocationService } from './../../location/location.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from './../equipment.service';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent {

  locations: Object[] = [];
  equipments : Object[] = [];
  equipment: Object = {};

  constructor(public locationService: LocationService, public equipmentService: EquipmentService, 
              private activatedRoute: ActivatedRoute, public snackBar: MdSnackBar, public router: Router) 
  {
      locationService.listAllLocation().subscribe(locations => 
      { 
        this.locations = locations;
      }, 
      erro => console.log(erro));

      equipmentService.listAllEquipment().subscribe(equipments => 
      { 
        this.equipments = equipments;
      },erro => console.log(erro)); 

      activatedRoute.params.subscribe(params => {
               
        let id = params['id'];
        if (id)
        {
          this.equipmentService.findEquipmentbyId(id).subscribe( equipment => this.equipment = equipment, erro => console.log(erro));
        }
          
      });
  }

  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    });
  }
  insertEquipment(equipment)
  { 
    this.router.navigate(['/equipment']);
    this.equipmentService.insertEquipment(this.equipment).subscribe(() => 
    {  
      this.openSnackBar('Equipamento salvo com sucesso ', 'Sucesso!');
    }, 
    erro => 
    {  
      console.log(erro)
      this.openSnackBar('Não foi possível salvar o equipamento ', 'Erro!');
    });
  }

}