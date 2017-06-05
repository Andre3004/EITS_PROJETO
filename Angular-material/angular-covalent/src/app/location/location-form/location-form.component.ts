import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from './../location.service';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {

  users: Object[] = [];
  locations : Object[] = [];
  location: Object = {};

  constructor(public userService: UserService, public locationService: LocationService, 
              private activatedRoute: ActivatedRoute, public snackBar: MdSnackBar, public router: Router) 
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

      activatedRoute.params.subscribe(params => {
               
        let id = params['id'];
        console.log(id);
        if (id)
        {
          this.locationService.findLocationbyId(id).subscribe( location => this.location = location, erro => console.log(erro));
          console.log(this.location);
        }
          
      });
  }

  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000,
    });
  }
  insertLocation(location)
  { 
    console.log('insert working');
    this.router.navigate(['/location']);
    this.locationService.insertLocation(this.location).subscribe(() => 
    {  
      console.log('Localização salva com sucesso!');
      this.openSnackBar('Localização salva com sucesso ', 'Sucesso!');
    }, 
    erro => 
    {  
      console.log(erro)
      this.openSnackBar('Não foi possível salvar a Localização ', 'Erro!');
    });
  }

}
