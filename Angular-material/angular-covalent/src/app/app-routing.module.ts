import { AuthService } from './login/auth.service';
import { EquipmentDetailComponent } from './equipment/equipment-detail/equipment-detail.component';
import { EquipmentFormComponent } from './equipment/equipment-form/equipment-form.component';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';
import { LocationFormComponent } from './location/location-form/location-form.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [

  { path: 'user', component: UserComponent},
  { path: 'user-new', component: UserFormComponent, canActivate: [AuthService] },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'user-edit/:id', component: UserFormComponent, canActivate: [AuthService] }, 


  { path: 'equipment', component: EquipmentComponent},
  { path: 'equipment-new', component: EquipmentFormComponent },
  { path: 'equipment-detail/:id', component: EquipmentDetailComponent },
  { path: 'equipment-edit/:id', component: EquipmentFormComponent }, 


  { path: 'location', component: LocationComponent},
  { path: 'location-new', component: LocationFormComponent },
  { path: 'location-detail/:id', component: LocationDetailComponent },
  { path: 'location-edit/:id', component: LocationFormComponent }, 
  
  
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }