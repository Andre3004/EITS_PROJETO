import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Equipment } from './../../model/Equipment';
import { ActivatedRoute, Router } from '@angular/router';
import { PageRequest } from './../../model/PageRequest';
import { EquipmentService } from './../../service/equipment.service';
import { ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent, TdDataTableSortingOrder, ITdDataTableSelectEvent } from '@covalent/core';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-equipment-consult-equipment',
  templateUrl: './equipment-consult-equipment.component.html',
  styleUrls: ['./equipment-consult-equipment.component.css']
})
export class EquipmentConsultEquipmentComponent 
{
  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  mainEquipments : PageRequest = new PageRequest();
  /**
   * 
   */
  equipment : Equipment = new Equipment();
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
  property: String="name";
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
      name: 'name', label: 'Nome' , sortable: true
    },
    { 
      name: 'description', label: 'Descrição' , sortable: true
    },
    { 
      name: 'location.codLocation', label: 'Localização', sortable: true
    }
  ];

  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/

  constructor(public equipmentService: EquipmentService,  public activatedRoute: ActivatedRoute,
              public router: Router, public mdDialogRef: MdDialogRef<EquipmentConsultEquipmentComponent>,
              @Inject(MD_DIALOG_DATA) public data: Number) 
  { 
     this.id = data;
     this.getEquipments();
  }
  
 /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  getEquipments()
  {
      if ( this.filter === '' )
      {
        this.filter = "null";
      }
      this.equipmentService.ListNonAssociatedEquipmentByFilter(this.page -1, this.size, this.property, this.order, this.id, this.filter).subscribe(mainEquipments => 
      { 
        this.mainEquipments = mainEquipments;
        this.total = mainEquipments.totalElements;
      }, 
      erro => console.log(erro));
  }
  /**
   * 
   */
  public rowSelect(selectedRow: ITdDataTableSelectEvent)
  {
    if (selectedRow != null)
    {
       this.equipment = selectedRow.row;
    }
  }
  /**
   * 
   */
  selectEquipment(): void
  {
    if ( this.equipment )
    {
      this.mdDialogRef.close({equipment: this.equipment});
    }
  }
  /**
   * 
   */
  emitter()
  {
    this.selectEquipment();
  }
  /**
   * 
   * @param textSearch 
   */
  search(textSearch: String) 
  {
    this.filter = textSearch;
    this.page = 1;
    this.getEquipments();
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
}
