import { TdLoadingService, LoadingMode, LoadingType } from '@covalent/core';
import { LocationService } from './../../service/location.service';
import { UserService } from './../../service/user.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
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
              private activatedRoute: ActivatedRoute, public snackBar: MdSnackBar, public router: Router, 
              private _loadingService: TdLoadingService) 
  {
      userService.listAllUser().subscribe(users => 
      { 
        this.users = users;
      }, 
      erro => console.log(erro));

      locationService.listAllLocation().subscribe(locations => 
      { 
        this.locations = locations;
      },erro => console.log(erro)); 

      activatedRoute.params.subscribe(params => {
                
        let id = params['id'];
        if (id)
        {
          this.locationService.findLocationbyId(id).subscribe( location => this.location = location, erro => console.log(erro));
        }
          
      });

      this._loadingService.create(
      {
        name: 'configFullscreen',
        mode: LoadingMode.Indeterminate,
        type: LoadingType.Linear,
        color: 'accent',
      });
  }

  openSnackBar(msg, action) 
  {
    this.snackBar.open(msg, action, 
    {
      duration: 5000, 
    }); 
  }
  insertLocation(event)
  { 
    this._loadingService.register('configFullscreen');
    setTimeout(() => 
    {
      this._loadingService.resolve('configFullscreen');
    }, 1000000);

    this.locationService.insertLocation(this.location).subscribe(() => 
    {  
      setTimeout(() => 
      {
        this._loadingService.resolve('configFullscreen');
      }, 0);  
      this.router.navigate(['/location'],  { queryParams: {page:1}});
      
      this.openSnackBar('Localização salva com sucesso ', 'Sucesso!');
    }, 
    erro => 
    {  
      setTimeout(() => 
      {
        this._loadingService.resolve('configFullscreen');
      }, 0);
      this.openSnackBar('Não foi possível salvar a Localização ', 'Erro!');
    });
  }

}
