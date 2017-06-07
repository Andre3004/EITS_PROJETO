webpackJsonp([1,5],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipment_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentDetailComponent = (function () {
    function EquipmentDetailComponent(_dialogService, equipmentService, router, activatedRouter) {
        var _this = this;
        this._dialogService = _dialogService;
        this.equipmentService = equipmentService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.equipment = {
            id: Number,
            name: String,
            description: String,
            archivePath: String,
            location: Object,
            equipment: Object,
        };
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
        });
        equipmentService.findEquipmentbyId(this.id).subscribe(function (equipment) {
            _this.equipment = equipment;
        }, function (erro) { return console.log(erro); });
        equipmentService.listAllSubEquipment(this.id).subscribe(function (subequipments) {
            _this.subequipments = subequipments;
        }, function (erro) { return console.log(erro); });
    }
    return EquipmentDetailComponent;
}());
EquipmentDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* Component */])({
        selector: 'app-equipment-detail',
        template: __webpack_require__(473),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["j" /* TdDialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__equipment_service__["a" /* EquipmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object])
], EquipmentDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=equipment-detail.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipment_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EquipmentFormComponent = (function () {
    function EquipmentFormComponent(locationService, equipmentService, activatedRoute, snackBar, router) {
        var _this = this;
        this.locationService = locationService;
        this.equipmentService = equipmentService;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.router = router;
        this.locations = [];
        this.equipments = [];
        this.equipment = {};
        locationService.listAllLocation().subscribe(function (locations) {
            _this.locations = locations;
        }, function (erro) { return console.log(erro); });
        equipmentService.listAllEquipment().subscribe(function (equipments) {
            _this.equipments = equipments;
        }, function (erro) { return console.log(erro); });
        activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.equipmentService.findEquipmentbyId(id).subscribe(function (equipment) { return _this.equipment = equipment; }, function (erro) { return console.log(erro); });
            }
        });
    }
    EquipmentFormComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    EquipmentFormComponent.prototype.insertEquipment = function (equipment) {
        var _this = this;
        this.router.navigate(['/equipment']);
        this.equipmentService.insertEquipment(this.equipment).subscribe(function () {
            _this.openSnackBar('Equipamento salvo com sucesso ', 'Sucesso!');
        }, function (erro) {
            console.log(erro);
            _this.openSnackBar('Não foi possível salvar o equipamento ', 'Erro!');
        });
    };
    return EquipmentFormComponent;
}());
EquipmentFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* Component */])({
        selector: 'app-equipment-form',
        template: __webpack_require__(474),
        styles: [__webpack_require__(285)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__location_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__location_location_service__["a" /* LocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__equipment_service__["a" /* EquipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__equipment_service__["a" /* EquipmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["W" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["W" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object])
], EquipmentFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=equipment-form.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipment_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EquipmentComponent = (function () {
    function EquipmentComponent(snackBar, equipmentService, router, _dialogService, _viewContainerRef, userService) {
        var _this = this;
        this.snackBar = snackBar;
        this.equipmentService = equipmentService;
        this.router = router;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        this.userService = userService;
        this.equipments = [];
        equipmentService.listAllEquipment().subscribe(function (equipments) {
            _this.equipments = equipments;
        }, function (erro) { return console.log(erro); });
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
    }
    EquipmentComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    EquipmentComponent.prototype.openConfirm = function (equipment) {
        var _this = this;
        this._dialogService.openConfirm({
            message: 'Tem certeza que deseja excluir ' + equipment.name + ' ?',
            disableClose: false,
            viewContainerRef: this._viewContainerRef,
            title: 'Excluir equipamento',
            cancelButton: 'Não',
            acceptButton: 'Sim',
        }).
            afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.equipmentService.deleteEquipment(equipment).subscribe(function () {
                    var equipments = _this.equipments.slice(0);
                    var indice = equipments.indexOf(equipment);
                    equipments.splice(indice, 1);
                    _this.equipments = equipments;
                    _this.openSnackBar('Equipamento removido com sucesso', 'Sucesso!');
                }, function (erro) {
                    _this.openSnackBar('Não foi possível remover o Equipamento ' + equipment.name, 'Erro!');
                });
            }
            else {
            }
        });
    };
    return EquipmentComponent;
}());
EquipmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* Component */])({
        selector: 'app-equipment',
        template: __webpack_require__(475),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["W" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["W" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__equipment_service__["a" /* EquipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__equipment_service__["a" /* EquipmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ViewContainerRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_user_service__["a" /* UserService */]) === "function" && _f || Object])
], EquipmentComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=equipment.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(476),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationDetailComponent = (function () {
    function LocationDetailComponent(_dialogService, locationService, router, activatedRouter) {
        var _this = this;
        this._dialogService = _dialogService;
        this.locationService = locationService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.location = {
            id: Number,
            codLocation: String,
            responsible: Object,
            viceResponsible: Object,
        };
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
        });
        locationService.findLocationbyId(this.id).subscribe(function (location) {
            _this.location = location;
        }, function (erro) { return console.log(erro); });
        locationService.listAllSubLocation(this.id).subscribe(function (sublocations) {
            _this.sublocations = sublocations;
        }, function (erro) { return console.log(erro); });
    }
    return LocationDetailComponent;
}());
LocationDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'app-location-detail',
        template: __webpack_require__(477),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["j" /* TdDialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object])
], LocationDetailComponent);

var _a, _b, _c, _d;
//   constructor(public userService: UserService, public router: Router, public activatedRouter: ActivatedRoute)
// {
//   activatedRouter.params.subscribe(params => {
//       let id = params['id'];
//       console.log(id);
//       this.userService.findUserbyId(id).subscribe( user => this.user = user, erro => console.log(erro));
//       console.log(this.user);
//   });
// } 
//# sourceMappingURL=location-detail.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationFormComponent = (function () {
    function LocationFormComponent(userService, locationService, activatedRoute, snackBar, router) {
        var _this = this;
        this.userService = userService;
        this.locationService = locationService;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.router = router;
        this.users = [];
        this.locations = [];
        this.location = {};
        userService.listAllUser().subscribe(function (users) {
            _this.users = users;
        }, function (erro) { return console.log(erro); });
        locationService.listAllLocation().subscribe(function (locations) {
            _this.locations = locations;
        }, function (erro) { return console.log(erro); });
        activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.locationService.findLocationbyId(id).subscribe(function (location) { return _this.location = location; }, function (erro) { return console.log(erro); });
            }
        });
    }
    LocationFormComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    LocationFormComponent.prototype.insertLocation = function (location) {
        var _this = this;
        this.router.navigate(['/location']);
        this.locationService.insertLocation(this.location).subscribe(function () {
            _this.openSnackBar('Localização salva com sucesso ', 'Sucesso!');
        }, function (erro) {
            console.log(erro);
            _this.openSnackBar('Não foi possível salvar a Localização ', 'Erro!');
        });
    };
    return LocationFormComponent;
}());
LocationFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* Component */])({
        selector: 'app-location-form',
        template: __webpack_require__(478),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["W" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["W" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object])
], LocationFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=location-form.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocationComponent = (function () {
    function LocationComponent(snackBar, locationService, router, _dialogService, _viewContainerRef, userService) {
        var _this = this;
        this.snackBar = snackBar;
        this.locationService = locationService;
        this.router = router;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        this.userService = userService;
        this.locations = [];
        locationService.listAllLocation().subscribe(function (locations) {
            _this.locations = locations;
        }, function (erro) { return console.log(erro); });
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
    }
    LocationComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    LocationComponent.prototype.openConfirm = function (location) {
        var _this = this;
        this._dialogService.openConfirm({
            message: 'Tem certeza que deseja excluir ' + location.codLocation + ' ?',
            disableClose: false,
            viewContainerRef: this._viewContainerRef,
            title: 'Excluir localização',
            cancelButton: 'Não',
            acceptButton: 'Sim',
        }).
            afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.locationService.deleteLocation(location).subscribe(function () {
                    var locations = _this.locations.slice(0);
                    var indice = locations.indexOf(location);
                    locations.splice(indice, 1);
                    _this.locations = locations;
                    _this.openSnackBar('Localização removida com sucesso', 'Sucesso!');
                }, function (erro) {
                    console.log(erro);
                    _this.openSnackBar('Não foi possível remover a Localização ' + location.codLocation, 'Erro!');
                });
            }
            else {
            }
        });
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* Component */])({
        selector: 'app-location',
        template: __webpack_require__(479),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["W" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["W" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ViewContainerRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_user_service__["a" /* UserService */]) === "function" && _f || Object])
], LocationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(userService, router, activatedRouter) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.user = {};
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            console.log(id);
            _this.userService.findUserbyId(id).subscribe(function (user) { return _this.user = user; }, function (erro) { return console.log(erro); });
        });
    }
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'app-user-detail',
        template: __webpack_require__(480),
        styles: [__webpack_require__(291)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = (function () {
    function UserFormComponent(snackBar, userService, router, activatedRouter) {
        var _this = this;
        this.snackBar = snackBar;
        this.userService = userService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.user = {};
        this.ok = false;
        this.sexs = [
            { value: 'MASCULINO', viewValue: 'Masculino' },
            { value: 'FEMININO', viewValue: 'Feminino' },
            { value: 'OUTRO', viewValue: 'Outro' }
        ];
        this.roles = [
            { value: 'ROLE_ADMIN', viewValue: 'Administrador' },
            { value: 'ROLE_USER', viewValue: 'Engenheiro' },
        ];
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.userService.findUserbyId(id).subscribe(function (user) { return _this.user = user; }, function (erro) { return console.log(erro); });
                console.log(_this.user);
            }
        });
    }
    UserFormComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    UserFormComponent.prototype.insertUser = function (event, userId) {
        var _this = this;
        this.router.navigate(['/user']);
        this.userService.insertUser(this.user).subscribe(function () {
            _this.ok = true;
            _this.openSnackBar('Usuário salvo com sucesso ', 'Sucesso!');
        }, function (erro) {
            console.log(erro);
            _this.openSnackBar('Não foi possível salvar o usuário ', 'Erro!');
        });
    };
    return UserFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], UserFormComponent.prototype, "permission", void 0);
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'app-user-form',
        template: __webpack_require__(481),
        styles: [__webpack_require__(292)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["W" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["W" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object])
], UserFormComponent);

var _a, _b, _c, _d;
//window.location.reload(); 
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_core__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = (function () {
    function UserComponent(snackBar, userService, router, _dialogService, _viewContainerRef) {
        var _this = this;
        this.snackBar = snackBar;
        this.userService = userService;
        this.router = router;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        this.users = [];
        this.permission = false;
        userService.listAllUser().subscribe(function (users) {
            _this.users = users;
        }, function (erro) { return console.log(erro); });
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
    }
    UserComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    //   teste(id){
    //   this.router.navigate(['users/edit', id], { relativeTo: this.route });
    // }
    UserComponent.prototype.openConfirm = function (event, user) {
        var _this = this;
        this._dialogService.openConfirm({
            message: user.active ? 'Tem certeza que deseja desativar ' + user.name + ' ' + user.lastName + ' ?' : 'Tem certeza que deseja ativar ' + user.name + ' ' + user.lastName + ' ?',
            disableClose: false,
            viewContainerRef: this._viewContainerRef,
            title: user.active ? 'Desativar usuário' : 'Ativar usuário',
            cancelButton: 'Não',
            acceptButton: 'Sim',
        }).
            afterClosed().subscribe(function (accept) {
            if (accept) {
                if (!user.active) {
                    _this.userService.activateUser(user).subscribe(function () {
                        _this.openSnackBar('Usuário ativado com sucesso', 'Sucesso!');
                    }, function (erro) {
                        console.log(erro);
                        _this.openSnackBar('Não foi possível ativar o usuário ', 'Erro!');
                    });
                }
                else {
                    _this.userService.deactivateUser(user).subscribe(function () {
                        _this.openSnackBar('Usuário desativado com sucesso', 'Sucesso!');
                    }, function (erro) {
                        console.log(erro);
                        _this.openSnackBar('Não foi possível desativar o usuário ', 'Erro!');
                    });
                }
            }
            else {
            }
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(482),
        styles: [__webpack_require__(293)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["W" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["W" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__covalent_core__["j" /* TdDialogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ViewContainerRef */]) === "function" && _e || Object])
], UserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 161;


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(226);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = '/projeto/user/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    UserService.prototype.insertUser = function (user) {
        if (user.id != undefined) {
            return this.http.put(this.url + 'updateUser', JSON.stringify(user), { headers: this.headers });
        }
        else {
            return this.http.post(this.url + 'insertUser', JSON.stringify(user), { headers: this.headers });
        }
    };
    UserService.prototype.listAllUser = function () {
        return this.http.get(this.url + 'listAllUser').map(function (res) { return res.json(); });
    };
    UserService.prototype.activateUser = function (user) {
        return this.http.patch(this.url + 'activateUser/' + user.id, JSON.stringify(user), { headers: this.headers });
    };
    UserService.prototype.deactivateUser = function (user) {
        return this.http.patch(this.url + 'deactivateUser/' + user.id, JSON.stringify(user), { headers: this.headers });
    };
    UserService.prototype.findUserbyId = function (id) {
        return this.http.get(this.url + 'findUserById/' + id).map(function (res) { return res.json(); });
        ;
    };
    UserService.prototype.getCurrentUser = function () {
        return this.http.get(this.url + 'getCurrentUser').map(function (res) { return res.json(); });
        ;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipment_equipment_detail_equipment_detail_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipment_equipment_form_equipment_form_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location_detail_location_detail_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location_form_location_form_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_detail_user_detail_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_form_user_form_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__location_location_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__equipment_equipment_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */] },
    { path: 'user-new', component: __WEBPACK_IMPORTED_MODULE_6__user_user_form_user_form_component__["a" /* UserFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]] },
    { path: 'user-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__user_user_detail_user_detail_component__["a" /* UserDetailComponent */] },
    { path: 'user-edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__user_user_form_user_form_component__["a" /* UserFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]] },
    { path: 'equipment', component: __WEBPACK_IMPORTED_MODULE_9__equipment_equipment_component__["a" /* EquipmentComponent */] },
    { path: 'equipment-new', component: __WEBPACK_IMPORTED_MODULE_2__equipment_equipment_form_equipment_form_component__["a" /* EquipmentFormComponent */] },
    { path: 'equipment-detail/:id', component: __WEBPACK_IMPORTED_MODULE_1__equipment_equipment_detail_equipment_detail_component__["a" /* EquipmentDetailComponent */] },
    { path: 'equipment-edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__equipment_equipment_form_equipment_form_component__["a" /* EquipmentFormComponent */] },
    { path: 'location', component: __WEBPACK_IMPORTED_MODULE_8__location_location_component__["a" /* LocationComponent */] },
    { path: 'location-new', component: __WEBPACK_IMPORTED_MODULE_4__location_location_form_location_form_component__["a" /* LocationFormComponent */] },
    { path: 'location-detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__location_location_detail_location_detail_component__["a" /* LocationDetailComponent */] },
    { path: 'location-edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__location_location_form_location_form_component__["a" /* LocationFormComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(media, authService) {
        this.media = media;
        this.authService = authService;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(472),
        styles: [__webpack_require__(283)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdMediaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipment_equipment_pipes__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location_pipes__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipment_equipment_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipment_equipment_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_form_user_form_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_detail_user_detail_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_pipes__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__covalent_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__covalent_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__covalent_highlight__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__covalent_markdown__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__covalent_dynamic_forms__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_home_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__location_location_detail_location_detail_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__location_location_form_location_form_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__equipment_equipment_form_equipment_form_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__equipment_equipment_detail_equipment_detail_component__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_25__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_5__equipment_equipment_component__["a" /* EquipmentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_user_pipes__["a" /* FilterName */],
            __WEBPACK_IMPORTED_MODULE_2__location_location_pipes__["a" /* FilterCodLocation */],
            __WEBPACK_IMPORTED_MODULE_1__equipment_equipment_pipes__["a" /* FilterNameEquipment */],
            __WEBPACK_IMPORTED_MODULE_27__location_location_detail_location_detail_component__["a" /* LocationDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__location_location_form_location_form_component__["a" /* LocationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_29__equipment_equipment_form_equipment_form_component__["a" /* EquipmentFormComponent */],
            __WEBPACK_IMPORTED_MODULE_30__equipment_equipment_detail_equipment_detail_component__["a" /* EquipmentDetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_20__covalent_core__["a" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_20__covalent_core__["b" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_21__covalent_http__["a" /* CovalentHttpModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22__covalent_highlight__["a" /* CovalentHighlightModule */],
            __WEBPACK_IMPORTED_MODULE_23__covalent_markdown__["a" /* CovalentMarkdownModule */],
            __WEBPACK_IMPORTED_MODULE_24__covalent_dynamic_forms__["a" /* CovalentDynamicFormsModule */],
            __WEBPACK_IMPORTED_MODULE_20__covalent_core__["c" /* CovalentExpansionPanelModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["g" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_24__covalent_dynamic_forms__["a" /* CovalentDynamicFormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["i" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_20__covalent_core__["d" /* CovalentMessageModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["j" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_20__covalent_core__["e" /* CovalentChipsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["k" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["l" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_20__covalent_core__["f" /* CovalentDialogsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["m" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_20__covalent_core__["g" /* CovalentFileModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_12__user_user_pipes__["a" /* FilterName */], __WEBPACK_IMPORTED_MODULE_2__location_location_pipes__["a" /* FilterCodLocation */], __WEBPACK_IMPORTED_MODULE_1__equipment_equipment_pipes__["a" /* FilterNameEquipment */]],
        providers: [__WEBPACK_IMPORTED_MODULE_20__covalent_core__["h" /* TdMediaService */], __WEBPACK_IMPORTED_MODULE_20__covalent_core__["i" /* TdLoadingService */], __WEBPACK_IMPORTED_MODULE_10__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__location_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_3__equipment_equipment_service__["a" /* EquipmentService */], __WEBPACK_IMPORTED_MODULE_20__covalent_core__["j" /* TdDialogService */], __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterNameEquipment; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterNameEquipment = (function () {
    function FilterNameEquipment() {
    }
    FilterNameEquipment.prototype.transform = function (equipments, text) {
        return equipments.filter(function (equipment) { return equipment.name.toLowerCase().includes(text.toLowerCase()); });
    };
    return FilterNameEquipment;
}());
FilterNameEquipment = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterNameEquipment',
    })
], FilterNameEquipment);

//# sourceMappingURL=equipment.pipes.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterCodLocation; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterCodLocation = (function () {
    function FilterCodLocation() {
    }
    FilterCodLocation.prototype.transform = function (locations, text) {
        return locations.filter(function (location) { return location.codLocation.toLowerCase().includes(text.toLowerCase()); });
    };
    return FilterCodLocation;
}());
FilterCodLocation = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterCodLocation',
    })
], FilterCodLocation);

//# sourceMappingURL=location.pipes.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterName; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterName = (function () {
    function FilterName() {
    }
    FilterName.prototype.transform = function (users, text) {
        return users.filter(function (user) { return user.name.toLowerCase().includes(text.toLowerCase()); });
    };
    return FilterName;
}());
FilterName = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterName',
    })
], FilterName);

//# sourceMappingURL=user.pipes.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".example-container \r\n{\r\n    z-index: 1;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.example-sidenav-content \r\n{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n} \r\n\r\n.example-sidenav\r\n{\r\n    padding: 20px;\r\n}\r\n\r\nbody \r\n{\r\n    margin: 0;\r\n    font-family: Roboto, sans-serif;\r\n    background-color: white;\r\n}\r\n\r\nmd-card \r\n{\r\n    max-width: 80%;\r\n    margin: 2em auto;\r\n    text-align: center;\r\n}\r\n\r\nmd-toolbar-row \r\n{\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.done \r\n{\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    color: white;\r\n}\r\n\r\nmd-toolbar\r\n{\r\n    box-shadow: 1px 2px 2px #827272;\r\n}\r\n\r\n.botao\r\n{\r\n    /*display: block; \r\n    margin-right:16px; \r\n    height: 100%;\r\n    width: 10%; \r\n    position: relative;\r\n    border-style: none;\r\n    color: black;*/\r\n    position:absolute;\r\n    left: 94% ;          /*1250px; width: 193%;*/\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.botao-lateral\r\n{\r\n    position: relative;\r\n    top: -20px;\r\n    left: -20px;\r\n    width: 115%;\r\n    height: 70px;\r\n    background-color: white;\r\n    border-style: none;\r\n    color: black\r\n}\r\n\r\n.botao-lateral:hover\r\n{\r\n    background-color: #d1c8c8;\r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nbody\r\n{\r\n    background-color: white;\r\n}\r\n.icon{\r\n     background-color: white;\r\n}\r\n.button{\r\n    color: white;\r\n}\r\n.toolbar{\r\n    background-color: #1976d2;\r\n    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n\r\n  \r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 88%;\r\n}\r\n.card\r\n{\r\n  width: 100%;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 80%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "body\r\n{\r\n    background-color: white;\r\n    top: -20px;\r\n}\r\n.mat-toolbar.mat-primary {\r\n    background: #ef6c00;\r\n}\r\n.botao{\r\n    position:absolute;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00;\r\n    \r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n\r\n  \r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 88%;\r\n}\r\n.card\r\n{\r\n  width: 100%;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 80%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "body\r\n{\r\n    background-color: white;\r\n    top: -20px;\r\n}\r\n.mat-toolbar.mat-primary {\r\n    background: #ef6c00;\r\n}\r\n.botao{\r\n    position:absolute;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00;\r\n    \r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 90%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 80%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "body\r\n{\r\n    background-color: white;\r\n    top: -20px;\r\n}\r\n.mat-toolbar.mat-primary {\r\n    background: #ef6c00;\r\n}\r\n.botao{\r\n    position:absolute;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00;\r\n    \r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.url = '/projeto/location/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    LocationService.prototype.insertLocation = function (location) {
        if (location.id != undefined) {
            return this.http.put(this.url + 'updateLocation', JSON.stringify(location), { headers: this.headers });
        }
        else {
            return this.http.post(this.url + 'insertLocation', JSON.stringify(location), { headers: this.headers });
        }
    };
    LocationService.prototype.listAllLocation = function () {
        return this.http.get(this.url + 'listAllLocation').map(function (res) { return res.json(); });
    };
    LocationService.prototype.listAllSubLocation = function (id) {
        return this.http.get(this.url + 'listAllSubLocation/' + id).map(function (res) { return res.json(); });
    };
    LocationService.prototype.deleteLocation = function (location) {
        return this.http.delete(this.url + 'deleteLocation/' + location.id);
    };
    LocationService.prototype.findLocationbyId = function (id) {
        return this.http.get(this.url + 'findLocationById/' + id).map(function (res) { return res.json(); });
        ;
    };
    return LocationService;
}());
LocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentService = (function () {
    function EquipmentService(http) {
        this.http = http;
        this.url = '/projeto/equipment/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    EquipmentService.prototype.insertEquipment = function (equipment) {
        if (equipment.id != undefined) {
            return this.http.put(this.url + 'updateEquipment', JSON.stringify(equipment), { headers: this.headers });
        }
        else {
            return this.http.post(this.url + 'insertEquipment', JSON.stringify(equipment), { headers: this.headers });
        }
    };
    EquipmentService.prototype.listAllEquipment = function () {
        return this.http.get(this.url + 'listAllEquipment').map(function (res) { return res.json(); });
    };
    EquipmentService.prototype.listAllSubEquipment = function (id) {
        return this.http.get(this.url + 'listAllSubEquipment/' + id).map(function (res) { return res.json(); });
    };
    EquipmentService.prototype.deleteEquipment = function (equipment) {
        return this.http.delete(this.url + 'deleteEquipment/' + equipment.id);
    };
    EquipmentService.prototype.findEquipmentbyId = function (id) {
        return this.http.get(this.url + 'findEquipmentById/' + id).map(function (res) { return res.json(); });
        ;
    };
    return EquipmentService;
}());
EquipmentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EquipmentService);

var _a;
//# sourceMappingURL=equipment.service.js.map

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<!--<md-toolbar color=\"primary\" class=\"pad-none pull-top\">\r\n\r\n  <button md-button [mdMenuTriggerFor]=\"menu\">Menu</button>\r\n  <md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item routerLink=\"/user\" >Usuários</button>\r\n    <button md-menu-item routerLink=\"/location\">Localizações</button>\r\n    <button md-menu-item routerLink=\"/equipment\">Equipamentos</button>\r\n  </md-menu>\r\n  <div class=\"navbar-header\">\r\n      <button md-button routerLink=\"\">EITS PROJETO</button>\r\n  </div>\r\n</md-toolbar>\r\n<router-outlet></router-outlet>\r\n\r\n<md-toolbar color=\"primary\" class=\"pad-none pull-top\">\r\n    <nav md-tab-nav-bar class=\"pull-bottom\">\r\n      <a md-tab-link\r\n        [routerLink]=\"['/user']\"\r\n        class=\"active\">\r\n        Landing Page\r\n      </a>\r\n      <a md-tab-link\r\n        [routerLink]=\"['/location']\">\r\n        Dashboard\r\n      </a>\r\n      <a md-tab-link\r\n        [routerLink]=\"['/equipment']\">\r\n        Email App\r\n      </a>\r\n    </nav>\r\n  </md-toolbar>-->\r\n<body>\r\n<md-toolbar class=\"toolbar\">\r\n<button md-button (click)=\"sidenav.open()\" layout-align=\"center center\" class=\"button\"><md-icon>menu</md-icon></button>\r\n<button md-button md-button routerLink=\"\" (click)=\"sidenav.close()\" class=\"button\"><md-icon >home</md-icon></button>\r\n<!--<button md-button class=\"botao\"><md-icon >exit_to_app</md-icon></button>-->\r\n<a md-button class=\"botao\" href=\"/projeto/logout\"><md-icon >exit_to_app</md-icon></a>\r\n<!--<md-button href=\"/projeto/logout\" class=\"button\"><md-icon >exit_to_app</md-icon></md-button>-->\r\n</md-toolbar>\r\n<md-sidenav-container >\r\n\r\n        <router-outlet></router-outlet>\r\n        <md-sidenav #sidenav class=\"example-sidenav\">\r\n            <li routerLinkActive=\"active\">\r\n                <button class=\"botao-lateral\" (click)=\"sidenav.close()\" routerLink=\"/user\">Usuários</button>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <button class=\"botao-lateral\" (click)=\"sidenav.close()\" routerLink=\"/location\">Localização</button>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <button class=\"botao-lateral\" (click)=\"sidenav.close()\" routerLink=\"/equipment\">Equipamentos</button>\r\n            </li>\r\n        </md-sidenav>\r\n\r\n        \r\n</md-sidenav-container>\r\n<div flex layout=\"column\" flex-gt-xs=\"30\" layout-align=\"right right\">\r\n          <p class=\"text-sm\">&copy; Projeto Desafio 2017 Eits, Inc. All rights reserved.</p>\r\n        </div>\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Equipamento\"  class=\"card\" cardWidth=\"75\">\r\n        <md-card >    \r\n\r\n            <form class=\"example-form\">\r\n                <md-input-container class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" [value]=\"equipment.id\" disabled>\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input mdInput disabled [value]=\"equipment.name\" placeholder=\"Nome do equipamento\">\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input mdInput disabled [value]=\"equipment?.location?.codLocation\" placeholder=\"Localização\">\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <md-list>\r\n                    <h3 md-subheader>Sub equipamentos</h3>\r\n                    <md-list-item *ngFor=\"let subequipment of subequipments\">\r\n                        <md-icon md-list-icon>android</md-icon>\r\n                        <h4 md-line>{{subequipment?.name}}</h4>\r\n                        <p md-line> Descrição: {{subequipment?.description }} </p>\r\n                    </md-list-item>\r\n                </md-list>\r\n              \r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"primary\" [routerLink]=\"['/equipment']\" class=\"button\">Voltar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Equipamento\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <form #myform=\"ngForm\" class=\"example-form\">\r\n                <md-input-container class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" disabled value=\"#\">\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #equipmentName max=\"50\" name =\"name\" [(ngModel)]=\"equipment.name\" mdInput placeholder=\"Nome do equipamento\">\r\n                                <md-hint align=\"end\">{{equipmentName.value.length}} / 50</md-hint>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <textarea  required #equipmentDescription max=\"144\" name =\"description\" [(ngModel)]=\"equipment.description\" mdInput placeholder=\"Descrição\"></textarea>\r\n                                <md-hint align=\"end\">{{equipmentDescription.value.length}} / 144</md-hint>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table> \r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <md-select name =\"location\" [(ngModel)]=\"equipment.location\" placeholder=\"Localização\">\r\n                                <md-option required *ngFor=\"let location of locations\" [value]=\"location\">\r\n                                    {{ location.codLocation }}\r\n                                </md-option>\r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <md-checkbox class=\"example-margin\" name=\"show\" [(ngModel)]=\"show\">Equipamento principal</md-checkbox>\r\n                            <br><br><br>\r\n                            <md-select *ngIf=\"show\" name =\"equipment\" [(ngModel)]=\"equipment.equipment\" placeholder=\"Equipamento\">                            \r\n                                <md-option *ngFor=\"let equipment of equipments\" [value]=\"equipment\">\r\n                                    {{ equipment.name }}\r\n                                </md-option>\r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br><br>\r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"primary\" type=\"submit\"class=\"button\" [disabled]=\"myform.form.invalid\" (click)=\"insertEquipment(equipment)\" >Salvar</button>\r\n                    <button md-raised-button  color=\"primary\" [routerLink]=\"['/equipment']\" class=\"button\">Cancelar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Lista de equipamentos\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <md-card-title layout>\r\n                <md-input-container class=\"text-sm\" flex>\r\n                    <input #textSearch (keyup)=\"0\" mdInput placeholder=\"Procurar equipamentos\"/>\r\n                    <span mdPrefix><md-icon class=\"icon\">search</md-icon></span>\r\n                </md-input-container>\r\n            </md-card-title>\r\n            <md-list class=\"pull-top\">\r\n                <md-list-item>\r\n                    <md-icon md-list-avatar>bug_report</md-icon>\r\n                    <h3 md-line>Equipamentos</h3>\r\n                </md-list-item>   \r\n                <ng-template let-item=\"$implicit\" let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"equipments | filterNameEquipment: textSearch.value\" >\r\n                  <!--| filterName: textSearch.value\"-->\r\n                    <a md-list-item>\r\n                        <md-icon md-list-avatar>select_all</md-icon>\r\n                        <h3 md-line> {{item.name}} </h3>\r\n                        <p md-line> {{item?.location?.codLocation}} </p>\r\n                        <span flex></span>\r\n                        <button md-button [routerLink]=\"['/equipment-detail', item.id]\" ><md-icon md-list-avatar>details</md-icon></button>\r\n                        <button md-button [routerLink]=\"['/equipment-edit', item.id]\"><md-icon md-list-avatar>edit</md-icon></button>\r\n                        <button md-button *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" (click)=\"openConfirm(item)\"><md-icon md-list-avatar>delete</md-icon></button>\r\n                    </a>\r\n                    <md-divider *ngIf=\"!last\" md-inset></md-divider>        \r\n              </ng-template>\r\n          </md-list>\r\n          <a md-fab td-sidenav-content color=\"accent\" [routerLink]=\"['/equipment-new']\" class=\"botao\" style=\"bottom:20px; position: float; z-index: 1; position: fixed\"> \r\n              <md-icon>add</md-icon>\r\n          </a>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>\r\n \r\n\r\n\r\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav toolbarTitle=\"Início\" navigationRoute=\"/\">\r\n  <router-outlet></router-outlet>\r\n  <td-layout-footer>\r\n    Optional footer\r\n  </td-layout-footer>\r\n</td-layout-nav>"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Localização\"  class=\"card\" cardWidth=\"75\">\r\n        <md-card >    \r\n\r\n            <form class=\"example-form\">\r\n                <md-input-container class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" [value]=\"location.id\" disabled>\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input mdInput disabled [value]=\"location.codLocation\" placeholder=\"Código Localizador\">\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input mdInput disabled [value]=\"location?.responsible?.name\" placeholder=\"Responsável\">\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input mdInput disabled [value]=\"location?.viceResponsible?.name\" placeholder=\"Vice Responsável\">\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                \r\n                \r\n\r\n                <md-list>\r\n                    <h3 md-subheader>Sub localizações</h3>\r\n                    <md-list-item *ngFor=\"let sublocation of sublocations\">\r\n                        <md-icon md-list-icon>location_on</md-icon>\r\n                        <h4 md-line>{{sublocation?.codLocation}}</h4>\r\n                        <p md-line> Responsável: {{sublocation?.responsible?.name }} </p>\r\n                        <p md-line> Vice Responsável: {{sublocation?.viceResponsible?.name }} </p>\r\n                    </md-list-item>\r\n                </md-list>\r\n              \r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"primary\" [routerLink]=\"['/location']\" class=\"button\">Voltar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Localização\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <form #myform=\"ngForm\" class=\"example-form\" (submit)=\"insertLocation($event)\">\r\n                <md-input-container class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" disabled value=\"#\">\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #codLocation maxlength=\"50\" name =\"codLocation\" [(ngModel)]=\"location.codLocation\" mdInput placeholder=\"Código localizador\">\r\n                                <md-hint align=\"end\">{{codLocation.value.length}} / 50</md-hint>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <md-select required name =\"responsible\" [(ngModel)]=\"location.responsible\" placeholder=\"Responsável\">\r\n                                <md-option *ngFor=\"let user of users\" [value]=\"user\" >\r\n                                    {{ user.name }}\r\n                                </md-option>\r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <md-select name =\"viceResponsible\" [(ngModel)]=\"location.viceResponsible\" placeholder=\"Vice Responsável\">\r\n                                <md-option *ngFor=\"let user of users\" [value]=\"user\">\r\n                                    {{ user.name }}\r\n                                </md-option>\r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <section class=\"example-section\">\r\n                                <md-checkbox class=\"example-margin\" name=\"show\" [(ngModel)]=\"show\">Localização principal</md-checkbox>\r\n                                <br><br><br>\r\n                                <md-select *ngIf=\"show\" name =\"location\" [(ngModel)]=\"location.location\" placeholder=\"Localização\">\r\n                                    <md-option *ngFor=\"let location of locations\" [value]=\"location\">\r\n                                        {{ location.codLocation }}\r\n                                    </md-option>\r\n                                </md-select>\r\n                            </section>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br><br>\r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"primary\" type=\"submit\"class=\"button\" [disabled]=\"myform.form.invalid\" (click)=\"insertLocation(location)\" >Salvar</button>\r\n                    <button md-raised-button  color=\"primary\" [routerLink]=\"['/location']\" class=\"button\">Cancelar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Lista de localizações\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <md-card-title layout>\r\n                <md-input-container class=\"text-sm\" flex>\r\n                    <input #textSearch (keyup)=\"0\" mdInput placeholder=\"Procurar localizações\"/>\r\n                    <span mdPrefix><md-icon class=\"icon\">search</md-icon></span>\r\n                </md-input-container>\r\n            </md-card-title>\r\n            <md-list class=\"pull-top\">\r\n                <md-list-item> \r\n                    <md-icon md-list-avatar>location_searching</md-icon>\r\n                    <h3 md-line>Localizações</h3>\r\n                </md-list-item>     \r\n                <ng-template let-item=\"$implicit\" let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"locations | filterCodLocation: textSearch.value\">\r\n                            <a md-list-item> \r\n                                <md-icon md-list-avatar>location_on</md-icon>\r\n                                <h3 md-line> {{item.codLocation}}</h3>\r\n                                <p md-line> {{item.responsible.name}} </p>\r\n                                <span flex></span>\r\n                                <button md-button [routerLink]=\"['/location-detail', item.id]\" ><md-icon md-list-avatar>details</md-icon></button>\r\n                                <button md-button [routerLink]=\"['/location-edit', item.id]\"><md-icon md-list-avatar>edit</md-icon></button>\r\n                                <button md-button *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" (click)=\"openConfirm(item)\"><md-icon md-list-avatar>delete</md-icon></button>\r\n                            </a>\r\n                    <md-divider *ngIf=\"!last\" md-inset></md-divider>        \r\n                    </ng-template>\r\n          </md-list>\r\n          <a md-fab td-sidenav-content color=\"accent\" [routerLink]=\"['/location-new']\" class=\"botao\" style=\"bottom:20px; position: float; z-index: 1; position: fixed\"> \r\n              <md-icon>add</md-icon>\r\n          </a>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Usuário\"  cardWidth=\"75\"  >\r\n        <md-card>    \r\n\r\n            <form class=\"example-form\">\r\n                <md-input-container class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" [value]=\"user?.id\" disabled>\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input mdInput disabled [value]=\"user?.name\" placeholder=\"Nome\">\r\n                            </md-input-container>\r\n                        </td>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input mdInput disabled [value]=\"user?.lastName\" placeholder=\"Sobrenome\">\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input type =\"email\" disabled [value]=\"user?.email\" mdInput placeholder=\"Email\">\r\n                        </md-input-container>\r\n                    </td>\r\n                </table> \r\n                <br>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                            <input mdInput disabled [value]=\"user?.sex\" placeholder=\"Sexo\">\r\n                            </md-input-container>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br><br>\r\n                <table>\r\n                    <td>\r\n                        <md-slide-toggle disabled *ngIf=\"user?.active\" [checked]=\"true\" ></md-slide-toggle>\r\n                        <md-slide-toggle disabled *ngIf=\"!user?.active\" ></md-slide-toggle>\r\n                    </td>\r\n                </table> \r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"primary\" [routerLink]=\"['/user']\" class=\"button\">Voltar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Usuário\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <form #myform=\"ngForm\" class=\"example-form\" (submit)=\"insertUser($event)\">\r\n                <md-input-container class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" disabled value=\"#\">\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #userName maxlength=\"50\" tdAutoTrim name =\"name\" [(ngModel)]=\"user.name\" mdInput placeholder=\"Nome\">\r\n                                <md-hint align=\"end\">{{userName.value.length}} / 50</md-hint>\r\n                            </md-input-container>\r\n                        </td>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #userLastName maxlength=\"50\" name =\"lastName\" [(ngModel)]=\"user.lastName\" mdInput placeholder=\"Sobrenome\">\r\n                                <md-hint align=\"end\">{{userLastName.value.length}} / 50</md-hint>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input required #userPassword maxlength=\"100\" #password=\"ngModel\" name =\"password\" [(ngModel)]=\"user.password\"  type =\"password\" mdInput placeholder=\"Senha\">\r\n                            <md-hint align=\"end\">{{userPassword.value.length}} / 100</md-hint>\r\n                        </md-input-container>\r\n                    </td>\r\n                </table> \r\n                <br>\r\n                <!--<table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input [hidden]= required #confirmPassword=\"ngModel\" validateEqual=\"password\" name =\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" type =\"password\" mdInput placeholder=\"Confirme a senha\">\r\n                            </md-input-container>\r\n                            <span *ngIf =\"password.value != confirmPassword.value \"  class=\"text-danger\">\r\n                                Senhas não conferem\r\n                            </span>\r\n                        </td>\r\n                </table> \r\n                <br>-->\r\n                <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input  mdInput \r\n                                    required \r\n                                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                                    maxlength=\"144\" \r\n                                    #email name =\"email\" \r\n                                    [(ngModel)]=\"user.email\" \r\n                                    type =\"email\"\r\n                                    placeholder=\"Email\">\r\n                            <md-hint align=\"end\">{{email.value.length}} / 144</md-hint>\r\n                        </md-input-container>\r\n                    </td>\r\n                </table> \r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <md-select required name =\"permission\" [(ngModel)]=\"user.permission\" placeholder=\"Permissão\">\r\n                                <md-option *ngFor=\"let role of roles\" [value]=\"role.value\">\r\n                                    {{ role.viewValue }}\r\n                                </md-option>\r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br><br>\r\n\r\n                <table >\r\n                    <tr>\r\n                        <td>\r\n                            <md-select required name =\"sex\" [(ngModel)]=\"user.sex\" placeholder=\"Sexo\">\r\n                                <md-option *ngFor=\"let sex of sexs\" [value]=\"sex.value\">\r\n                                    {{ sex.viewValue }}\r\n                                </md-option>\r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n\r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"primary\" type=\"submit\"class=\"button\" [disabled]=\"myform.form.invalid\" (click)=\"insertUser($event, user.id)\" >Salvar</button>\r\n                    <button md-raised-button  color=\"primary\" [routerLink]=\"['/user']\" class=\"button\">Cancelar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Lista de usuários\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <md-card-title layout>\r\n                <md-input-container class=\"text-sm\" flex>\r\n                    <input #textSearch (keyup)=\"0\" mdInput placeholder=\"Procurar usuários\"/>\r\n                    <span mdPrefix><md-icon class=\"icon\">search</md-icon></span>\r\n                </md-input-container>\r\n            </md-card-title> \r\n            <md-list class=\"pull-top\">\r\n                <md-list-item>\r\n                    <md-icon md-list-avatar>account_circle</md-icon>\r\n                    <h3 md-line>Usuários</h3> \r\n                </md-list-item>   \r\n                <ng-template let-item=\"$implicit\" let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"users | filterName: textSearch.value\">\r\n                    <a md-list-item>\r\n                        <md-icon md-list-avatar>person</md-icon>\r\n                        <h3 md-line> {{item.name}} {{item.lastName}} </h3>\r\n                        <p md-line> {{item.email}} </p>\r\n                        <span flex></span>\r\n                        <button md-button [routerLink]=\"['/user-detail', item.id]\" ><md-icon md-list-avatar>details</md-icon></button>\r\n                        <button md-button *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" [routerLink]=\"['/user-edit', item.id]\"><md-icon md-list-avatar>edit</md-icon></button>\r\n                        <!-- *ngIf=\"teste(item)\"  (click)=\"openConfirmDisable(item)\" // [checked]=\" item.active ? 'true' : 'false' \"-->\r\n                        <button md-button *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" (click)=\"openConfirm($event, item)\" ><md-icon md-list-avatar>power_settings_new</md-icon></button>\r\n                    </a>\r\n                    <md-divider *ngIf=\"!last\" md-inset></md-divider>        \r\n              </ng-template>\r\n          </md-list>\r\n          <!--<a md-fab td-sidenav-content color=\"accent\" (click)=\"teste(5)\" class=\"botao\"-->\r\n          <a md-fab td-sidenav-content *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" color=\"accent\" [routerLink]=\"['/user-new']\" class=\"botao\" style=\"bottom:20px; position: float; z-index: 1; position: fixed\"> \r\n              <md-icon>add</md-icon>\r\n          </a>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(162);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
    }
    AuthService.prototype.canActivate = function (route, state) {
        if (this.userCurrent.permission == 'ROLE_ADMIN') {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[545]);
//# sourceMappingURL=main.bundle.js.map