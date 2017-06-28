import { PageRequest } from './service/PageRequest';
import { EquipmentListComponent } from './manter-equipamento/equipment-list/equipment-list.component';
import { LocationListComponent } from './manter-localizacao/location-list/location-list.component';
import { UserListComponent } from './manter-usuario/user-list/user-list.component';
import { EquipmentService } from './service/equipment.service';
import { LocationService } from './service/location.service';
import { UserService } from './service/user.service';
import { UserDetailComponent } from './manter-usuario/user-detail/user-detail.component';
import { UserFormComponent } from './manter-usuario/user-form/user-form.component';
import { FilterName } from './pipes/user.pipes';
import { FilterCodLocation } from './pipes/location.pipes';
import { LocationDetailComponent } from './manter-localizacao/location-detail/location-detail.component';
import { LocationFormComponent } from './manter-localizacao/location-form/location-form.component';
import { EquipmentFormComponent } from './manter-equipamento/equipment-form/equipment-form.component';
import { EquipmentDetailComponent } from './manter-equipamento/equipment-detail/equipment-detail.component';
import { FilterNameEquipment } from './pipes/equipment.pipes';
import { AuthService } from './login/auth.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule, MdCoreModule, MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdMenuModule, MdSliderModule, MdRadioModule, MdInputModule, MdSnackBarModule, MdTabsModule, MdDialogModule, MdSlideToggleModule, MdProgressSpinnerModule, MdProgressBarModule } from '@angular/material';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    LocationListComponent,
    EquipmentListComponent,
    FilterName,
    FilterCodLocation,
    FilterNameEquipment,
    LocationDetailComponent,
    LocationFormComponent,
    EquipmentFormComponent,
    EquipmentDetailComponent,
  ],
  imports: [
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
    MdRadioModule,
    FormsModule,
    AppRoutingModule,
    CovalentMessageModule,
    MdSnackBarModule, 
    CovalentChipsModule, 
    MdTabsModule,
    MdListModule,
    MdDialogModule,
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
    CovalentCommonModule 
  ],
  exports: [ FilterName, FilterCodLocation, FilterNameEquipment],
  providers: [Broker,PageRequest, TdMediaService, TdLoadingService, UserService, LocationService, EquipmentService, TdDialogService, AuthService, TdLoadingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
