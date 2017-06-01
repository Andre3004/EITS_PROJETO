import { Location } from './../Location';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from './../location.service';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent 
{

  location : Object = 
  { 
    id: Number,
    codLocation: String,
    responsible: Object,
    viceResponsible: Object,
  };
  sublocations : Object[] ;
  id: number;

  constructor(private _dialogService: TdDialogService, public locationService: LocationService, public router: Router, public activatedRouter: ActivatedRoute) 
  { 

    activatedRouter.params.subscribe(params => 
    {
      let id = params['id'];
      this.id = id;
    });

      locationService.findLocationbyId(this.id).subscribe( location => 
      {
        this.location = location
      }, 
      erro => console.log(erro));
      console.log(this.id);
      console.log(this.location);

      locationService.listAllSubLocation(this.id).subscribe(sublocations => 
      { 
        this.sublocations = sublocations;
        console.log(this.sublocations); 
      }, 
      erro => console.log(erro));
   }
}

    //   constructor(public userService: UserService, public router: Router, public activatedRouter: ActivatedRoute)
    // {
    //   activatedRouter.params.subscribe(params => {

    //       let id = params['id'];
    //       console.log(id);
          
    //       this.userService.findUserbyId(id).subscribe( user => this.user = user, erro => console.log(erro));
    //       console.log(this.user);
    //   });
    // }

    
 
