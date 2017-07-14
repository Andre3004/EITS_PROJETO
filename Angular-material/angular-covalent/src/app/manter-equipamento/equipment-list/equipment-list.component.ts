import { PageRequest } from './../../model/PageRequest';
import { User } from './../../model/User';
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
export class EquipmentListComponent implements OnInit
{
  
    /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
   equipments: PageRequest  = new PageRequest();
   /**
    * 
    */
   userCurrent : User = new User();
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
   property: String="name";;
   /**
    * 
    */
   total: Number;
   /**
    * 
    */
   sortBy : String ="";
   /**
    * 
    */
   filter : String = "";

    /*-------------------------------------------------------------------
	 * 		 					ONINIT
	 *-------------------------------------------------------------------*/
    ngOnInit() 
    {
      this.route.queryParams.subscribe(
        (queryParams: any) => 
        {
          this.page = queryParams['page'] ;
        }
      )
    }
   /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param snackBar 
   * @param equipmentService 
   * @param router 
   * @param route 
   * @param _dialogService 
   * @param _viewContainerRef 
   * @param userService 
   */
  constructor(public snackBar: MdSnackBar, public equipmentService: EquipmentService, public router: Router,private route: ActivatedRoute,
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef, public userService: UserService)
  {
      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
      }, 
      erro => console.log(erro));
      this.getEquipments();
  }

   /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  /**
   * 
   */
  getEquipments()
  {
    if (this.filter === '')
    {
      this.filter = "null";
    }
    this.equipmentService.listMainEquipmentsByFilters(this.page -1 , this.size , this.property ,this.order, this.filter ).subscribe(equipments=>
    {
      this.equipments = equipments;
      this.total = equipments.totalElements;
    },
    erro => console.log(erro));
  }
  /**
   * 
   */
  columns: ITdDataTableColumn[] = 
  [
    { 
      name: 'name', label: 'Nome' , sortable: true
    },
    { 
      name: 'description', label: 'Descrição' , sortable: true
    },
    { 
      name: 'location', label: 'Localização' , sortable: true
    },
    { 
      name: '', label: '' , sortable: false
    }
  ];
  /**
   * 
   * @param textSearch 
   */
  search(textSearch: String) 
  {
    this.filter = textSearch;
    this.page = 1;
    this.getEquipments();
    this.router.navigate(['/equipment'],
    {queryParams: {'page': this.page}});
  }
  /**
   * 
   * @param event 
   */
  change(event: IPageChangeEvent): void 
  {
       this.page = event.page.valueOf();
       this.size = event.pageSize.valueOf();
       this.getEquipments();
       this.router.navigate(['/equipments'],
       {queryParams: {'page': this.page}});

  }
  /**
   * 
   * @param sortEvent 
   */
  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void 
  {
    this.sortBy = sortEvent.name;
    this.order = sortEvent.order === TdDataTableSortingOrder.Ascending ? 'DESC' : 'ASC'; ;
    this.property = sortEvent.name; 
    this.getEquipments();
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
  downloadFile(equipment)
  {
      window.location.assign("/projeto/api/equipment/downloadFile/" + equipment.id);
  }
  /**
   * 
   * @param equipment 
   */
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
                this.openSnackBar('Não foi possível remover o equipamento ' + equipment.name + ' o mesmo está associado a um ou mais equipamentos', 'Erro!');
              }
              );
          }
        })
    }
}
 