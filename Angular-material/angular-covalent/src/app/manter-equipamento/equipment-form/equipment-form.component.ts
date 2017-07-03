import { PageRequest } from './../../model/PageRequest';
import { Location } from './../../model/Location';
import { Equipment } from './../../model/Equipment';
import { TdLoadingService, LoadingType, LoadingMode, TdFileService, TdDialogService } from '@covalent/core';
import { LocationService } from './../../service/location.service';
import { EquipmentService } from './../../service/equipment.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
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
  equipments : PageRequest = new PageRequest();
  /**
   * 
   */
  equipment: Equipment = new Equipment();
  /**
   * 
   */
  subequipments : Equipment[] ;
  /**
   * 
   */
  id: number;
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
  @ViewChild('fileInput') inputEl: ElementRef;
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
              private activatedRoute: ActivatedRoute, public snackBar: MdSnackBar, public router: Router,
              private _loadingService: TdLoadingService, private fileUploadService: TdFileService,
              private _viewContainerRef: ViewContainerRef, private _dialogService: TdDialogService) 
  {
      locationService.listAllLocation().subscribe(locations => 
      { 
        this.locations = locations;
      }, 
      erro => console.log(erro));

      equipmentService.listEquipments(this.page -1 , this.size , this.property ,this.order).subscribe(equipments => 
      { 
        this.equipments = equipments;
      },erro => console.log(erro)); 

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

      this.getSubEquipments();
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
  insertEquipment(equipment)
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