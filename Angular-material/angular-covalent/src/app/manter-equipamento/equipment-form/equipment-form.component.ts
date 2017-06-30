import { Location } from './../../model/Location';
import { Equipment } from './../../model/Equipment';
import { TdLoadingService, LoadingType, LoadingMode, TdFileService } from '@covalent/core';
import { LocationService } from './../../service/location.service';
import { EquipmentService } from './../../service/equipment.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit{

  locations: Location[] = [];
  equipments : Equipment[] = [];
  equipment: Equipment = new Equipment();
  id: number;
  disabled: boolean = false;

  constructor(public locationService: LocationService, public equipmentService: EquipmentService, 
              private activatedRoute: ActivatedRoute, public snackBar: MdSnackBar, public router: Router,
              private _loadingService: TdLoadingService, private fileUploadService: TdFileService) 
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
        this.id = id;
      });

      this._loadingService.create(
      {
        name: 'configFullscreen',
        mode: LoadingMode.Indeterminate,
        type: LoadingType.Linear,
        color: 'accent',
      });
  }
  ngOnInit(): void 
  {
    if (this.id)
    {
      this.equipmentService.findEquipmentbyId(this.id).subscribe( equipment => this.equipment = equipment, erro => console.log(erro));
    }
  }
  
 @ViewChild('fileInput') inputEl: ElementRef;

   selectEvent(event: Event, id:Number): void 
   {
      // console.log(event);
      let inputEl: HTMLInputElement = this.inputEl.nativeElement;
      let fileCount: number = inputEl.files.length;
      let formData = new FormData();
      if (fileCount > 0) { // a file was selected
          for (let i = 0; i < fileCount; i++) {
              console.log(inputEl.files.item(i));
              formData.append('file[]', inputEl.files.item(i));
              this.equipmentService.updateFile(formData, id).subscribe(() => 
              {
                  console.log('Sucess');
              },erro=> console.log(erro));
          }
      this.equipment.filePath = "equipment-files\\" + inputEl.files.item(0).name;

      // this.http.post('http://your.upload.url', formData)
      
  }
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
    this._loadingService.register('configFullscreen');
    setTimeout(() => 
    {
      this._loadingService.resolve('configFullscreen');
    }, 1000000);

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

} 