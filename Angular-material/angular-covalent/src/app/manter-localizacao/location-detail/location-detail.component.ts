import { Location } from './../../model/Location';
import { LocationService } from './../../service/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent 
{

  location : Location;
  sublocations : Location[] ;
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

      locationService.listAllSubLocation(this.id).subscribe(sublocations => 
      { 
        this.sublocations = sublocations;
      }, 
      erro => console.log(erro));
   }
}