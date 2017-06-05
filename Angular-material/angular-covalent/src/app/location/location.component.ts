import { TdDialogService } from '@covalent/core';
import { LocationService } from './location.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdInputModule, MdSnackBar} from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

   locations: Object[] = [];

  constructor(public snackBar: MdSnackBar, public locationService: LocationService, private router: Router,
              private _dialogService: TdDialogService, public _viewContainerRef: ViewContainerRef)
  {
      locationService.listAllLocation().subscribe(locations => 
      { 
        this.locations = locations;
        console.log(this.locations);
      },erro => console.log(erro)); 

      
  }
  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    }); 
  }
 
  openConfirm(location): void 
    {
        this._dialogService.openConfirm(
        {
            message:'Tem certeza que deseja excluir ' + location.codLocation +  ' ?',
            disableClose: false, 
            viewContainerRef: this._viewContainerRef,
            title: 'Excluir localização', 
            cancelButton: 'Não',
            acceptButton: 'Sim', 
        }).
        afterClosed().subscribe((accept: boolean) => 
        {
          if (accept) 
          {
              this.locationService.deleteLocation(location).subscribe(() => 
              {
                  console.log('Localização removida com sucesso!');
                  let locations = this.locations.slice(0);
                  let indice = locations.indexOf(location);
                  locations.splice(indice, 1);
                  this.locations = locations;
                  this.openSnackBar('Localização removida com sucesso', 'Sucesso!');
              },
              erro => 
              {
                console.log(erro);
                this.openSnackBar('Não foi possível remover a Localização ' + location.codLocation, 'Erro!');
              }
              );
          }
          else
          {
            
          }
        })
    }
}