import { EquipmentConsultEquipmentComponent } from './manter-equipamento/equipment-consult-equipment/equipment-consult-equipment.component';
import { PageRequest } from './model/PageRequest';
import { User } from './model/User';
import { Location } from './model/Location';
import { Equipment } from './model/Equipment';
import { EquipmentListComponent } from './manter-equipamento/equipment-list/equipment-list.component';
import { LocationListComponent } from './manter-localizacao/location-list/location-list.component';
import { UserListComponent } from './manter-usuario/user-list/user-list.component';
import { EquipmentService } from './service/equipment.service';
import { LocationService } from './service/location.service';
import { UserService } from './service/user.service';
import { UserDetailComponent } from './manter-usuario/user-detail/user-detail.component';
import { UserFormComponent } from './manter-usuario/user-form/user-form.component';
import { LocationDetailComponent } from './manter-localizacao/location-detail/location-detail.component';
import { LocationFormComponent } from './manter-localizacao/location-form/location-form.component';
import { EquipmentFormComponent } from './manter-equipamento/equipment-form/equipment-form.component';
import { EquipmentDetailComponent } from './manter-equipamento/equipment-detail/equipment-detail.component';
import { AuthService } from './authentication/auth.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule, MdCoreModule, MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdMenuModule, MdSliderModule, MdRadioModule, MdInputModule, MdSnackBarModule, MdTabsModule, MdDialogModule, MdSlideToggleModule, MdProgressSpinnerModule, MdProgressBarModule, MdDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule,CovalentMessageModule, CovalentChipsModule, CovalentDialogsModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { HomeComponent } from './home/home.component';
import 'rxjs/add/operator/map';
import {Broker} from 'eits-ng2';
import { TdMediaService, TdLoadingService, TdDialogService, CovalentFileModule, CovalentLoadingModule, CovalentDataTableModule, CovalentPagingModule, CovalentSearchModule, CovalentCommonModule } from '@covalent/core';
import { LocationConsultLocationComponent } from './manter-localizacao/location-consult-location/location-consult-location.component';
import { UserConsultUserComponent } from './manter-usuario/user-consult-user/user-consult-user.component';



@NgModule({
  declarations: 
  [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    LocationListComponent,
    EquipmentListComponent,
    LocationDetailComponent,
    LocationFormComponent,
    EquipmentFormComponent,
    EquipmentDetailComponent, 
    EquipmentConsultEquipmentComponent, LocationConsultLocationComponent, UserConsultUserComponent
  ],
  imports: 
  [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentExpansionPanelModule,
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    CovalentDynamicFormsModule,
    MdInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MdRadioModule,
    AppRoutingModule,
    CovalentMessageModule,
    MdSnackBarModule, 
    CovalentChipsModule, 
    MdTabsModule,
    MdListModule,
    CovalentDialogsModule,
    MdSliderModule, 
    CovalentFileModule, 
    HttpModule, 
    MdProgressSpinnerModule,
    CovalentLoadingModule,
    MdProgressBarModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentSearchModule,
    CovalentCommonModule,
    MdDialogModule
  ],
  exports: 
  [ 
    
  ],
  providers: 
  [
    Broker,
    Equipment, 
    User, 
    Location,
    PageRequest, 
    TdMediaService, 
    TdLoadingService, 
    UserService, 
    LocationService, 
    EquipmentService, 
    TdDialogService, 
    AuthService
  ],
  bootstrap: 
  [
    AppComponent
  ],
  entryComponents:
  [
    EquipmentConsultEquipmentComponent, LocationConsultLocationComponent, UserConsultUserComponent
  ]
})
export class AppModule { }
