import { LocationListComponent } from './manter-localizacao/location-list/location-list.component';
import { EquipmentListComponent } from './manter-equipamento/equipment-list/equipment-list.component';
import { UserListComponent } from './manter-usuario/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { LocationFormComponent } from './manter-localizacao/location-form/location-form.component';
import { LocationDetailComponent } from './manter-localizacao/location-detail/location-detail.component';
import { EquipmentFormComponent } from './manter-equipamento/equipment-form/equipment-form.component';
import { EquipmentDetailComponent } from './manter-equipamento/equipment-detail/equipment-detail.component';
import { UserDetailComponent } from './manter-usuario/user-detail/user-detail.component';
import { UserFormComponent } from './manter-usuario/user-form/user-form.component';
import { AuthService } from './authentication/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = 
[

  { 
    path: 'user', component: UserListComponent
  },
  { 
    path: 'user-new', component: UserFormComponent, 
    canActivate: [AuthService] 
  },
  { 
    path: 'user-detail/:id', component: UserDetailComponent 
  },
  { 
    path: 'user-edit/:id', component: UserFormComponent, 
    canActivate: [AuthService] 
  }, 

  { 
    path: 'equipment', component: EquipmentListComponent
  },
  { 
    path: 'equipment-new', component: EquipmentFormComponent 
  },
  { 
    path: 'equipment-detail/:id', component: EquipmentDetailComponent 
  },
  { 
    path: 'equipment-edit/:id', component: EquipmentFormComponent 
  }, 


  { 
    path: 'location', component: LocationListComponent
  },
  { 
    path: 'location-new', component: LocationFormComponent 
  },
  { 
    path: 'location-detail/:id', component: LocationDetailComponent 
  },
  { 
    path: 'location-edit/:id', component: LocationFormComponent 
  }, 
  
  
  { 
    path: '', component: HomeComponent 
  },
];

@NgModule(
{
  imports: 
  [
    RouterModule.forRoot(appRoutes, {useHash:true}) 
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule 
{ 
}