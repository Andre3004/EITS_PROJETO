import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject } from '@angular/core';

@Component(
{
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  
{
    user : Object = {};

    constructor(public userService: UserService, public router: Router, public activatedRouter: ActivatedRoute)
    {
      activatedRouter.params.subscribe(params => {

          let id = params['id'];
         
          this.userService.findUserbyId(id).subscribe( user => this.user = user, erro => console.log(erro));
          
      });
    }
    

}
