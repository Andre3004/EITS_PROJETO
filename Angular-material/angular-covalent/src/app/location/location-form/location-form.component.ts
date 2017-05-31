import { LocationService } from './../location.service';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {
  router: any;

  users: Object[] = [];
  locations : Object[] = [];
  subLocations: Object[] = [];
  location : Object = {};

  readOnly: boolean = false;
  chipAddition: boolean = true;
  placeholder: Object;
  
  items: Object[] = this.locations;

  itemsRequireMatch: Object[] = this.items.slice(0, 6);

  constructor(public userService: UserService, public locationService: LocationService) 
  {
      userService.listAllUser().subscribe(users => 
      { 
        this.users = users;
        console.log(this.users);
      }, 
      erro => console.log(erro));

      locationService.listAllLocation().subscribe(locations => 
      { 
        this.locations = locations;
        console.log(this.locations);
      },erro => console.log(erro)); 
  }

  insertLocation(event, locationId)
  { 
    console.log('insert working');
    console.log(event);
    console.log(locationId);
    event.preventDefault();
    this.locationService.insertLocation(this.location).subscribe(() => 
    {
      console.log('Localização salva com sucesso!');
      // this.openSnackBar('Usuário salvo com sucesso ', 'Sucesso!');
    }, 
    erro => 
    {  
      console.log(erro)
      // this.openSnackBar('Não foi possível salvar o usuário ', 'Erro!');
    });
  }

}
