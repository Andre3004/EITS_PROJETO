import { PageRequest } from './../../service/PageRequest';
import { UserService } from './../../service/user.service';
import { EquipmentService } from './../../service/equipment.service';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent, ITdDataTableSortChangeEvent, TdDataTableSortingOrder } from '@covalent/core';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdInputModule, MdSnackBar} from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit{
 
   equipments: PageRequest  = new PageRequest();
   userCurrent : Object;
   page: number = 1;
   size: number = 5;
   order: String ="ASC";
   property: String="name";;
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

  constructor(public snackBar: MdSnackBar, public equipmentService: EquipmentService, private router: Router,private route: ActivatedRoute,
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef, public userService: UserService)
  {
      equipmentService.listEquipments(this.page - 1, this.size, this.property , this.order).subscribe(equipments => 
      { 
        this.total = equipments.totalElements;
        console.log(equipments)
        this.equipments = equipments;
      },  
      erro => console.log(erro));

      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
      }, 
      erro => console.log(erro));
  }

  getEquipments()
  {
    if (this.filter === '')
    {
      this.equipmentService.listEquipments(this.page -1 , this.size , this.property ,this.order).subscribe(equipments=>
      {
        this.equipments = equipments;
        this.total = equipments.totalElements;
      },erro => console.log(erro));
    }
    else
    {
      this.equipmentService.listEquipmentsByFilters(0 , this.size , this.property ,this.order, this.filter ).subscribe(equipments=>
      {
        this.equipments = equipments;
        this.total = equipments.totalElements;
      },
      erro => console.log(erro));
    }
  }

  columns: ITdDataTableColumn[] = 
  [
    { 
      name: 'name', label: 'Nome' , sortable: true
    },
    { 
      name: 'description', label: 'Descrição' , sortable: true
    },
    { 
      name: 'equipment', label: 'Equipamento principal' , sortable: true
    },
    { 
      name: '', label: '' , sortable: false
    }
  ];

   search(textSearch: String) 
  {
    this.filter = textSearch;
    this.getEquipments();
    this.router.navigate(['/equipment'],
    {queryParams: {'page': this.page}});
  }
  change(event: IPageChangeEvent): void 
  {
       this.page = event.page.valueOf();
       this.size = event.pageSize.valueOf();
       this.getEquipments();
       this.router.navigate(['/equipments'],
       {queryParams: {'page': this.page}});

  }
  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void 
  {
    this.sortBy = sortEvent.name;
    this.order = sortEvent.order === TdDataTableSortingOrder.Ascending ? 'DESC' : 'ASC'; ;
    this.property = sortEvent.name; 
    this.getEquipments();
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
                  this.openSnackBar('Equipamento removido com sucesso', 'Sucesso!');
                  this.getEquipments();
              },
              erro => 
              {
                this.openSnackBar('Não foi possível remover o Equipamento ' + equipment.name, 'Erro!');
              }
              );
          }
        })
    }
}
 