import { User } from './../../model/User';
import { UserService } from './../../service/user.service';
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
    /*-------------------------------------------------------------------
    * 		 					ATTRIBUTES
    *-------------------------------------------------------------------*/
    /**
     * 
     */
    user : User = new User();

    /*-------------------------------------------------------------------
    * 		 					CONSTRUCTOR
    *-------------------------------------------------------------------*/  
    /**
     * 
     * @param userService 
     * @param router 
     * @param activatedRouter 
     */ 
    constructor(public userService: UserService, public router: Router, public activatedRouter: ActivatedRoute)
    {
      activatedRouter.params.subscribe(params => 
      {

          let id = params['id'];
         
          this.userService.findUserbyId(id).subscribe( user => this.user = user, erro => console.log(erro));
          
      });
    }
    

}
