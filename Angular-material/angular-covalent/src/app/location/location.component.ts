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

  constructor(public snackBar: MdSnackBar, public locationService: LocationService, private router: Router)
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
 
  confirmDelete(location) {
    if (window.confirm('Tem certeza que deseja excluir ' + location.codLocation +  ' ?')) {
      this.locationService.deleteLocation(location).subscribe(() => 
      {
          this.openSnackBar('Localização excluida com sucesso', 'Sucesso!');
           let locations = this.locations.slice(0);
           let indice = locations.indexOf(location);
           locations.splice(indice, 1);
           this.locations = locations;
      },
      erro => 
      {
        console.log(erro)
        this.openSnackBar('Não foi possível excluir a localização ', 'Erro!');
      }); 
    } else {
    }
  }
}