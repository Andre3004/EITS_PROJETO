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
export class EquipmentFormComponent implements OnInit{

  /*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  locations: Location[] = [];
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
  subEquipments: Equipment[] = [];
  /**
   * 
   */
  id: number = 0;
  /**
   * 
   */
  disabled: boolean = false;
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
  filter: String=" ";
  /**
   * 
   */
  @ViewChild('fileInput') inputEl: ElementRef;
  /**
   * 
   */
  dialogRef: MdDialogRef<EquipmentConsultEquipmentComponent>
  /**
   * 
   */
  file: File;
  /*-------------------------------------------------------------------
	 * 		 					ONINIT
	 *-------------------------------------------------------------------*/
  /**
   * 
   */
  ngOnInit(): void 
  {
    if (this.id)
    {
      this.equipmentService.findEquipmentbyId(this.id).subscribe( equipment => this.equipment = equipment, erro => console.log(erro));
    }
  }
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
              public dialog: MdDialog) 
  {
      locationService.listAllLocation().subscribe(locations => 
      { 
        this.locations = locations;
      }, 
      erro => console.log(erro));

      activatedRoute.params.subscribe(params => {
               
        let id = params['id'];
        this.id = id;
      });

      this._loadingService.create(
      {
        name: 'configFullscreen',
        mode: LoadingMode.Indeterminate,
        type: LoadingType.Linear,
        color: 'accent',
      });
      this.getMainEquipments();
      if (this.id)
      {
        this.getSubEquipments();
      }
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
    this.equipment.filePath = "equipment-files\\" + file.name;
  }
  /**
   * 
   */
  getMainEquipments()
  {
      // this.equipmentService.ListNonAssociatedEquipmentByFilter(this.id, this.filter).subscribe(mainEquipments => 
      // { 
      //   console.log(this.id, this.filter);
      //   this.mainEquipments = mainEquipments;
      //   console.log( this.mainEquipments, this.filter);
      // }, 
      // erro => console.log(erro));
  }
  clear()
  {
    this.equipment.equipment = null;
  }
  /**
   * 
   */
  getSubEquipments()
  {
      this.equipmentService.listAllSubEquipments(this.id).subscribe(subEquipments => 
      { 
        console.log(this.id);
        this.subEquipments = subEquipments;
        console.log( this.subEquipments, this.id);
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
    console.log(filter);
    this.filter = filter;
    this.getMainEquipments();
    
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
  openDialog()
  {
    let dialog = this.dialog.open(EquipmentConsultEquipmentComponent, 
    {
      height: '480px',
      width: '800px',
    }
    ).afterClosed().subscribe((result: Equipment ) =>
    { 
      console.log('Resultado: ', result.equipment);
      if ( result.equipment != undefined )
      {
        this.equipment.equipment = result.equipment;
      }
    }
    );
  }
  /**
   * 
   * @param equipment 
   */
  insertEquipment(equipment: Equipment)
  { 
    this._loadingService.register('configFullscreen');
    setTimeout(() => 
    {
      this._loadingService.resolve('configFullscreen');
    }, 1000000);

    if (this.file)
    {
      this.selectEvent(this.file, equipment.id);
    }
    this.equipmentService.insertEquipment(this.equipment).subscribe(() => 
    {  
      setTimeout(() => 
      {
        this._loadingService.resolve('configFullscreen');
      }, 0);  
      this.router.navigate(['/equipment'],  { queryParams: {page:1}});
      this.openSnackBar('Equipamento salvo com sucesso ', 'Sucesso!');
    }, 
    erro => 
    {  
      setTimeout(() => 
      {
        this._loadingService.resolve('configFullscreen');
      }, 0);  
      this.openSnackBar('Não foi possível salvar o equipamento ', 'Erro!');
    });
  }
  /**
   * 
   * @param equipment 
   */
  openConfirmDisassociate(equipment: Equipment): void 
  {
      this._dialogService.openConfirm(
      {
          message:'Tem certeza que deseja desassociar ' + equipment.name +  ' ?',
          disableClose: false, 
          viewContainerRef: this._viewContainerRef,
          title: 'Desassociar equipamento', 
          cancelButton: 'Não',
          acceptButton: 'Sim', 
      }).
      afterClosed().subscribe((accept: boolean) => 
      {
        if (accept) 
        {
            this.equipmentService.disassociateEquipment(equipment).subscribe(() => 
            {
                this.openSnackBar('Sub equipamento desassociado com sucesso', 'Sucesso!');
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
              this.openSnackBar('Não foi possível remover o sub equipamento ' + equipment.name, 'Erro!');
            }
            );
        }
      })
  }
  

} 