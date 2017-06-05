import { FilterNameEquipment } from './equipment/equipment.pipes';
import { FilterCodLocation } from './location/location.pipes';
import { EquipmentService } from './equipment/equipment.service';
import { LocationService } from './location/location.service';
import { EquipmentComponent } from './equipment/equipment.component';
import { LocationComponent } from './location/location.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { CommonModule } from '@angular/common';
import { FilterName } from './user/user.pipes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule, MdCoreModule, MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdMenuModule, MdSliderModule, MdRadioModule, MdInputModule, MdSnackBarModule, MdTabsModule, MdDialogModule, MdSlideToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule,CovalentMessageModule, CovalentChipsModule, CovalentDialogsModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import 'rxjs/add/operator/map';
import { TdMediaService, TdLoadingService, TdDialogService } from '@covalent/core';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';
import { LocationFormComponent } from './location/location-form/location-form.component';
import { EquipmentFormComponent } from './equipment/equipment-form/equipment-form.component';
import { EquipmentDetailComponent } from './equipment/equipment-detail/equipment-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    UserFormComponent,
    LocationComponent,
    EquipmentComponent,
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
    MdSliderModule
  ],
  exports: [ FilterName, FilterCodLocation, FilterNameEquipment ],
  providers: [TdMediaService, TdLoadingService, UserService, LocationService, EquipmentService, TdDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
