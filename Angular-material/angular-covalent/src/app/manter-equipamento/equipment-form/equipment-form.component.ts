import { UserService } from './../../service/user.service';
import { User } from './../../model/User';
import { LocationConsultLocationComponent } from './../../manter-localizacao/location-consult-location/location-consult-location.component';
import { EquipmentConsultEquipmentComponent } from './../equipment-consult-equipment/equipment-consult-equipment.component';
import { UserFormComponent } from './../../manter-usuario/user-form/user-form.component';
import { PageRequest } from './../../model/PageRequest';
import { Location } from './../../model/Location';
import { Equipment } from './../../model/Equipment';
import { TdLoadingService, LoadingType, LoadingMode, TdFileService, TdDialogService } from '@covalent/core';
import { LocationService } from './../../service/location.service';
import { EquipmentService } from './../../service/equipment.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css'],
})
export class EquipmentFormComponent
{

  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  equipment: Equipment = new Equipment();
  /**
   * 
   */
  mainEquipments : PageRequest = new PageRequest();
  /**
   * 
   */
  subEquipments: PageRequest = new PageRequest();
  /**
   * 
   */
  id: number = 0;
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
  filter: String="null";
  /**
   * 
   */
  total : Number = 0;
  /**
   * 
   */
  fullCodLocation : String = "";
  /**
   * 
   */
  fullNameMainEquipment : String = "";
  /**
   * 
   */
  @ViewChild('fileInput') inputEl: ElementRef;
  /**
   * 
   */
  dialogRefEquipment: MdDialogRef<EquipmentConsultEquipmentComponent>
  /**
   * 
   */
  dialogRefLocation: MdDialogRef<LocationConsultLocationComponent>
  /**
   * 
   */
  file: File;
  /**
   * 
   */
  filePath : String = null;
  /**
   * 
   */
   userCurrent : User = new User();
   /**
    * 
    */
  
  /*-------------------------------------------------------------------
	 * 		 					CONSTRUCTOR
	 *-------------------------------------------------------------------*/
  /**
   * 
   * @param locationService 
   * @param equipmentService 
   * @param activatedRoute 
   * @param snackBar 
   * @param router 
   * @param _loadingService 
   * @param fileUploadService 
   */
  constructor(public locationService: LocationService, public equipmentService: EquipmentService, 
              public activatedRoute: ActivatedRoute, public snackBar: MdSnackBar, public router: Router,
              private _loadingService: TdLoadingService, private fileUploadService: TdFileService,
              private _viewContainerRef: ViewContainerRef, private _dialogService: TdDialogService,
              public dialog: MdDialog, public userService: UserService) 
  {
      userService.getCurrentUser().subscribe(user => 
      { 
        this.userCurrent = user;
      }, 
      erro => console.log(erro));
      activatedRoute.params.subscribe(params => 
      {
        let id = params['id'];
        this.id = id;
        if (id)
        { 
          this.equipmentService.findEquipmentbyId(this.id).subscribe( 
          equipment => 
          {
            this.equipment = equipment;    
            if ( this.equipment.location )
            {
              this.fullCodLocation =  this.equipment.location.codLocation;
            }
            if ( this.equipment.equipment )
            {
              this.fullNameMainEquipment = this.equipment.equipment.name;
            } 
            if (!this.equipment.filePath)
            {
              this.equipment.filePath = null;
            } 
          }, 
          erro => console.log(erro));
        }   
        this.getSubEquipments();
      });

      this._loadingService.create(
      {
        name: 'configFullscreen',
        mode: LoadingMode.Indeterminate,
        type: LoadingType.Linear,
        color: 'accent',
      });
  }

      
 

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  /**
   * 
   * @param file 
   * @param id 
   */
  selectEvent(file: File, id:Number): void 
  {
    let formData = new FormData();
    formData.append('file', file);
    this.equipmentService.updateFile(formData, id).subscribe(() => 
    {
    },erro=> this.openSnackBar(erro._body,'Erro!'));
    
  }
  /**
   * 
   */
  clearMainEquipment()
  {
    this.equipment.equipment = null;
    this.fullNameMainEquipment = null;
  }
  /**
   * 
   */
  clearLocation()
  {
    this.equipment.location = null;
    this.fullCodLocation = null;
  }
  /**
   * 
   */
  clearFile()
  {
    this.file = null;
    this.filePath = this.equipment.filePath;
    this.equipment.filePath = null;
  }
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
   * @param filter 
   */
  search(filter: String)
  {
    if ( filter === '' )
    {
       filter = "null";
    }
    this.page = 1;
    this.filter = filter;
    this.getSubEquipments();
  }    
  /**
   * 
   * @param msg 
   * @param action 
   */
  openSnackBar(msg: string, action: string) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    });
  }
  /**
   * 
   */
  dialogSelectMainEquipment()
  {
    let dialog = this.dialog.open(EquipmentConsultEquipmentComponent, 
    {
      height: '480px',
      width: '800px',
      data: this.id
    }
    ).afterClosed().subscribe((result: Equipment ) =>
    { 
      if ( result.equipment )
      {
        this.equipment.equipment = result.equipment;
        this.fullNameMainEquipment = this.equipment.equipment.name;
      }
    }
    );
  }
  /**
   * 
   */
  dialogSelectLocation()
  {
    let dialog = this.dialog.open(LocationConsultLocationComponent, 
    {
      height: '480px',
      width: '800px',
      data: null
    }
    ).afterClosed().subscribe((result: Location ) =>
    { 
      if ( result.location != undefined )
      {
        this.equipment.location = result.location;
        this.fullCodLocation = this.equipment.location.codLocation;
      }
    }
    );
  }
  /**
   * 
   * @param time 
   */
  loading( time: Number)
  {
    setTimeout(() => 
    {
      this._loadingService.resolve('configFullscreen');
    }, time);
  }
  /**
   * 
   * @param equipment 
   */
  saveEquipment(equipment: Equipment)
  { 
    if ( this.filePath )
    {
      if (this.equipment.filePath == null)
      {
         this.equipmentService.clearFileEquipment(this.equipment.id).subscribe( result =>
         {
         }, erro => console.log(erro));
      }
    }
    if (this.file)
    {
      this.equipment.filePath = this.file.name;
    }
    this._loadingService.register('configFullscreen');
    this.loading(100000);
    this.equipmentService.insertEquipment(this.equipment).subscribe(() => 
    {  
      if (this.file)
      {
        this.selectEvent(this.file, equipment.id);
      }
      this.loading(0);
      this.router.navigate(['/equipment'],  { queryParams: {page:1}});
      this.openSnackBar('Equipamento salvo com sucesso ', 'Sucesso!');
    }, 
    erro => 
    {  
      this.loading(0);
      this.openSnackBar(erro._body, 'Erro!');
    });
  }
  /**
   * 
   * @param equipment 
   */
  openConfirmDelete(equipment: Equipment): void 
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
                this.openSnackBar('Sub equipamento removido com sucesso', 'Sucesso!');
                this.getSubEquipments();
            },
            erro => 
            {
              this.openSnackBar('Não foi possível remover o sub equipamento ' + equipment.name + ' o mesmo está associada a um ou mais equipamentos', 'Erro!');
            }
            );
        }
      })
  }
  

} 