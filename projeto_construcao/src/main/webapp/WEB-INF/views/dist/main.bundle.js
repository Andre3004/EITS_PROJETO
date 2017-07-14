webpackJsonp([1,5],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageRequest; });
/**
 * MODEL Pageable
 */
var PageRequest = (function () {
    function PageRequest() {
    }
    return PageRequest;
}());

//# sourceMappingURL=PageRequest.js.map

/***/ }),

/***/ 129:
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
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    function HomeComponent() {
    }
    /*-------------------------------------------------------------------
       * 		 					ONINIT
       *-------------------------------------------------------------------*/
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(483),
        styles: [__webpack_require__(291)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Equipment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_equipment_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentConsultEquipmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EquipmentConsultEquipmentComponent = (function () {
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    function EquipmentConsultEquipmentComponent(equipmentService, activatedRoute, router, mdDialogRef, data) {
        this.equipmentService = equipmentService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        /*-------------------------------------------------------------------
           * 		 					ATTRIBUTES
           *-------------------------------------------------------------------*/
        /**
         *
         */
        this.mainEquipments = new __WEBPACK_IMPORTED_MODULE_3__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.equipment = new __WEBPACK_IMPORTED_MODULE_1__model_Equipment__["a" /* Equipment */]();
        /**
         *
         */
        this.page = 1;
        /**
         *
         */
        this.size = 5;
        /**
         *
         */
        this.order = "ASC";
        /**
         *
         */
        this.property = "name";
        /**
         *
         */
        this.sortBy = "";
        /**
         *
         */
        this.filter = "";
        /**
        *
        */
        this.columns = [
            {
                name: 'name', label: 'Nome', sortable: true
            },
            {
                name: 'description', label: 'Descrição', sortable: true
            },
            {
                name: 'location.codLocation', label: 'Localização', sortable: true
            }
        ];
        this.id = data;
        this.getEquipments();
    }
    /*-------------------------------------------------------------------
     *                           BEHAVIORS
     *-------------------------------------------------------------------*/
    EquipmentConsultEquipmentComponent.prototype.getEquipments = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.equipmentService.ListNonAssociatedEquipmentByFilter(this.page - 1, this.size, this.property, this.order, this.id, this.filter).subscribe(function (mainEquipments) {
            _this.mainEquipments = mainEquipments;
            _this.total = mainEquipments.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     */
    EquipmentConsultEquipmentComponent.prototype.rowSelect = function (selectedRow) {
        if (selectedRow != null) {
            this.equipment = selectedRow.row;
        }
    };
    /**
     *
     */
    EquipmentConsultEquipmentComponent.prototype.selectEquipment = function () {
        if (this.equipment) {
            this.mdDialogRef.close({ equipment: this.equipment });
        }
    };
    /**
     *
     */
    EquipmentConsultEquipmentComponent.prototype.emitter = function () {
        this.selectEquipment();
    };
    /**
     *
     * @param textSearch
     */
    EquipmentConsultEquipmentComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getEquipments();
    };
    /**
     *
     * @param event
     */
    EquipmentConsultEquipmentComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getEquipments();
    };
    /**
     *
     * @param sortEvent
     */
    EquipmentConsultEquipmentComponent.prototype.sortEvent = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.order = sortEvent.order === __WEBPACK_IMPORTED_MODULE_5__covalent_core__["q" /* TdDataTableSortingOrder */].Ascending ? 'DESC' : 'ASC';
        ;
        this.property = sortEvent.name;
        this.getEquipments();
    };
    return EquipmentConsultEquipmentComponent;
}());
EquipmentConsultEquipmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_12" /* Component */])({
        selector: 'app-equipment-consult-equipment',
        template: __webpack_require__(484),
        styles: [__webpack_require__(292)]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["W" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_equipment_service__["a" /* EquipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_equipment_service__["a" /* EquipmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["G" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["G" /* MdDialogRef */]) === "function" && _d || Object, Object])
], EquipmentConsultEquipmentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=equipment-consult-equipment.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Equipment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_equipment_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(4);
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
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    /**
     *
     * @param _dialogService
     * @param equipmentService
     * @param router
     * @param activatedRouter
     * @param snackBar
     * @param _viewContainerRef
     */
    function EquipmentDetailComponent(_dialogService, equipmentService, router, activatedRouter, snackBar, _viewContainerRef, _location) {
        var _this = this;
        this._dialogService = _dialogService;
        this.equipmentService = equipmentService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.snackBar = snackBar;
        this._viewContainerRef = _viewContainerRef;
        this._location = _location;
        /*-------------------------------------------------------------------
           * 		 					ATTRIBUTES
           *-------------------------------------------------------------------*/
        /**
         *
         */
        this.equipment = new __WEBPACK_IMPORTED_MODULE_2__model_Equipment__["a" /* Equipment */]();
        /**
         *
         */
        this.subEquipments = new __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.page = 1;
        /**
          *
          */
        this.size = 5;
        /**
          *
          */
        this.order = "ASC";
        /**
          *
          */
        this.property = "name";
        /**
          *
          */
        this.total = 0;
        /**
          *
          */
        this.filter = "null";
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
        });
        equipmentService.findEquipmentbyId(this.id).subscribe(function (equipment) {
            _this.equipment = equipment;
        }, function (erro) { return console.log(erro); });
        this.getSubEquipments();
    }
    /*-------------------------------------------------------------------
   *                           BEHAVIORS
   *-------------------------------------------------------------------*/
    /**
     *
     */
    EquipmentDetailComponent.prototype.getSubEquipments = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.equipmentService.listSubEquipmentByFilter(this.page - 1, this.size, this.property, this.order, this.filter, this.id).subscribe(function (subEquipments) {
            _this.subEquipments = subEquipments;
            _this.total = _this.subEquipments.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     * @param textSearch
     */
    EquipmentDetailComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getSubEquipments();
    };
    /**
     *
     * @param event
     */
    EquipmentDetailComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getSubEquipments();
    };
    /**
     *
     */
    EquipmentDetailComponent.prototype.backClick = function () {
        this._location.back();
    };
    return EquipmentDetailComponent;
}());
EquipmentDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_12" /* Component */])({
        selector: 'app-equipment-detail',
        template: __webpack_require__(485),
        styles: [__webpack_require__(293)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__covalent_core__["o" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__covalent_core__["o" /* TdDialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_equipment_service__["a" /* EquipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_equipment_service__["a" /* EquipmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["X" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["X" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ViewContainerRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* Location */]) === "function" && _g || Object])
], EquipmentDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=equipment-detail.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_localizacao_location_consult_location_location_consult_location_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipment_consult_equipment_equipment_consult_equipment_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Equipment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_equipment_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
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
    /**
     *
     */
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    /**
     *
     * @param locationService
     * @param equipmentService
     * @param activatedRoute
     * @param snackBar
     * @param router
     * @param _loadingService
     * @param fileUploadService
     */
    function EquipmentFormComponent(locationService, equipmentService, activatedRoute, snackBar, router, _loadingService, fileUploadService, _viewContainerRef, _dialogService, dialog, userService) {
        var _this = this;
        this.locationService = locationService;
        this.equipmentService = equipmentService;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.router = router;
        this._loadingService = _loadingService;
        this.fileUploadService = fileUploadService;
        this._viewContainerRef = _viewContainerRef;
        this._dialogService = _dialogService;
        this.dialog = dialog;
        this.userService = userService;
        /*-------------------------------------------------------------------
           * 		 					ATTRIBUTES
           *-------------------------------------------------------------------*/
        /**
         *
         */
        this.equipment = new __WEBPACK_IMPORTED_MODULE_5__model_Equipment__["a" /* Equipment */]();
        /**
         *
         */
        this.mainEquipments = new __WEBPACK_IMPORTED_MODULE_4__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.subEquipments = new __WEBPACK_IMPORTED_MODULE_4__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.id = 0;
        /**
         *
         */
        this.page = 1;
        /**
         *
         */
        this.size = 5;
        /**
         *
         */
        this.order = "ASC";
        /**
         *
         */
        this.property = "name";
        /**
         *
         */
        this.filter = "null";
        /**
         *
         */
        this.total = 0;
        /**
         *
         */
        this.fullCodLocation = "";
        /**
         *
         */
        this.fullNameMainEquipment = "";
        /**
         *
         */
        this.filePath = null;
        /**
         *
         */
        this.userCurrent = new __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* User */]();
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
        activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
            if (id) {
                _this.equipmentService.findEquipmentbyId(_this.id).subscribe(function (equipment) {
                    _this.equipment = equipment;
                    if (_this.equipment.location) {
                        _this.fullCodLocation = _this.equipment.location.codLocation;
                    }
                    if (_this.equipment.equipment) {
                        _this.fullNameMainEquipment = _this.equipment.equipment.name;
                    }
                    if (!_this.equipment.filePath) {
                        _this.equipment.filePath = null;
                    }
                }, function (erro) { return console.log(erro); });
            }
            _this.getSubEquipments();
        });
        this._loadingService.create({
            name: 'configFullscreen',
            mode: __WEBPACK_IMPORTED_MODULE_6__covalent_core__["r" /* LoadingMode */].Indeterminate,
            type: __WEBPACK_IMPORTED_MODULE_6__covalent_core__["s" /* LoadingType */].Linear,
            color: 'accent',
        });
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     * @param file
     * @param id
     */
    EquipmentFormComponent.prototype.selectEvent = function (file, id) {
        var _this = this;
        var formData = new FormData();
        formData.append('file', file);
        this.equipmentService.updateFile(formData, id).subscribe(function () {
        }, function (erro) { return _this.openSnackBar(erro._body, 'Erro!'); });
    };
    /**
     *
     */
    EquipmentFormComponent.prototype.clearMainEquipment = function () {
        this.equipment.equipment = null;
        this.fullNameMainEquipment = null;
    };
    /**
     *
     */
    EquipmentFormComponent.prototype.clearLocation = function () {
        this.equipment.location = null;
        this.fullCodLocation = null;
    };
    /**
     *
     */
    EquipmentFormComponent.prototype.clearFile = function () {
        this.file = null;
        this.filePath = this.equipment.filePath;
        this.equipment.filePath = null;
    };
    /**
     *
     */
    EquipmentFormComponent.prototype.getSubEquipments = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.equipmentService.listSubEquipmentByFilter(this.page - 1, this.size, this.property, this.order, this.filter, this.id).subscribe(function (subEquipments) {
            _this.subEquipments = subEquipments;
            _this.total = _this.subEquipments.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     * @param filter
     */
    EquipmentFormComponent.prototype.search = function (filter) {
        if (filter === '') {
            filter = "null";
        }
        this.page = 1;
        this.filter = filter;
        this.getSubEquipments();
    };
    /**
     *
     * @param msg
     * @param action
     */
    EquipmentFormComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    /**
     *
     */
    EquipmentFormComponent.prototype.dialogSelectMainEquipment = function () {
        var _this = this;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__equipment_consult_equipment_equipment_consult_equipment_component__["a" /* EquipmentConsultEquipmentComponent */], {
            height: '480px',
            width: '800px',
            data: this.id
        }).afterClosed().subscribe(function (result) {
            if (result.equipment) {
                _this.equipment.equipment = result.equipment;
                _this.fullNameMainEquipment = _this.equipment.equipment.name;
            }
        });
    };
    /**
     *
     */
    EquipmentFormComponent.prototype.dialogSelectLocation = function () {
        var _this = this;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__manter_localizacao_location_consult_location_location_consult_location_component__["a" /* LocationConsultLocationComponent */], {
            height: '480px',
            width: '800px',
            data: null
        }).afterClosed().subscribe(function (result) {
            if (result.location != undefined) {
                _this.equipment.location = result.location;
                _this.fullCodLocation = _this.equipment.location.codLocation;
            }
        });
    };
    /**
     *
     * @param time
     */
    EquipmentFormComponent.prototype.loading = function (time) {
        var _this = this;
        setTimeout(function () {
            _this._loadingService.resolve('configFullscreen');
        }, time);
    };
    /**
     *
     * @param equipment
     */
    EquipmentFormComponent.prototype.saveEquipment = function (equipment) {
        var _this = this;
        if (this.filePath) {
            if (this.equipment.filePath == null) {
                this.equipmentService.clearFileEquipment(this.equipment.id).subscribe(function (result) {
                }, function (erro) { return console.log(erro); });
            }
        }
        if (this.file) {
            this.equipment.filePath = this.file.name;
        }
        this._loadingService.register('configFullscreen');
        this.loading(100000);
        this.equipmentService.insertEquipment(this.equipment).subscribe(function () {
            if (_this.file) {
                _this.selectEvent(_this.file, equipment.id);
            }
            _this.loading(0);
            _this.router.navigate(['/equipment'], { queryParams: { page: 1 } });
            _this.openSnackBar('Equipamento salvo com sucesso ', 'Sucesso!');
        }, function (erro) {
            _this.loading(0);
            _this.openSnackBar(erro._body, 'Erro!');
        });
    };
    /**
     *
     * @param equipment
     */
    EquipmentFormComponent.prototype.openConfirmDelete = function (equipment) {
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
                    _this.openSnackBar('Sub equipamento removido com sucesso', 'Sucesso!');
                    _this.getSubEquipments();
                }, function (erro) {
                    _this.openSnackBar('Não foi possível remover o sub equipamento ' + equipment.name + ' o mesmo está associada a um ou mais equipamentos', 'Erro!');
                });
            }
        });
    };
    return EquipmentFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_core__["_14" /* ViewChild */])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], EquipmentFormComponent.prototype, "inputEl", void 0);
EquipmentFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_core__["_12" /* Component */])({
        selector: 'app-equipment-form',
        template: __webpack_require__(486),
        styles: [__webpack_require__(294)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__service_equipment_service__["a" /* EquipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_equipment_service__["a" /* EquipmentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__angular_material__["X" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_material__["X" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__covalent_core__["n" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__covalent_core__["n" /* TdLoadingService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__covalent_core__["t" /* TdFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__covalent_core__["t" /* TdFileService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_core__["u" /* ViewContainerRef */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__covalent_core__["o" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__covalent_core__["o" /* TdDialogService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__angular_material__["F" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_material__["F" /* MdDialog */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */]) === "function" && _m || Object])
], EquipmentFormComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=equipment-form.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_equipment_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EquipmentListComponent = (function () {
    /*-------------------------------------------------------------------
      * 		 					CONSTRUCTOR
      *-------------------------------------------------------------------*/
    /**
     *
     * @param snackBar
     * @param equipmentService
     * @param router
     * @param route
     * @param _dialogService
     * @param _viewContainerRef
     * @param userService
     */
    function EquipmentListComponent(snackBar, equipmentService, router, route, _dialogService, _viewContainerRef, userService) {
        var _this = this;
        this.snackBar = snackBar;
        this.equipmentService = equipmentService;
        this.router = router;
        this.route = route;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        this.userService = userService;
        /*-------------------------------------------------------------------
         * 		 					ATTRIBUTES
         *-------------------------------------------------------------------*/
        /**
         *
         */
        this.equipments = new __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.userCurrent = new __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* User */]();
        /**
         *
         */
        this.page = 1;
        /**
         *
         */
        this.size = 5;
        /**
         *
         */
        this.order = "ASC";
        /**
         *
         */
        this.property = "name";
        /**
         *
         */
        this.sortBy = "";
        /**
         *
         */
        this.filter = "";
        /**
         *
         */
        this.columns = [
            {
                name: 'name', label: 'Nome', sortable: true
            },
            {
                name: 'description', label: 'Descrição', sortable: true
            },
            {
                name: 'location', label: 'Localização', sortable: true
            },
            {
                name: '', label: '', sortable: false
            }
        ];
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
        this.getEquipments();
    }
    ;
    /*-------------------------------------------------------------------
     * 		 					ONINIT
     *-------------------------------------------------------------------*/
    EquipmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.page = queryParams['page'];
        });
    };
    /*-------------------------------------------------------------------
   *                           BEHAVIORS
   *-------------------------------------------------------------------*/
    /**
     *
     */
    EquipmentListComponent.prototype.getEquipments = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.equipmentService.listMainEquipmentsByFilters(this.page - 1, this.size, this.property, this.order, this.filter).subscribe(function (equipments) {
            _this.equipments = equipments;
            _this.total = equipments.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     * @param textSearch
     */
    EquipmentListComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getEquipments();
        this.router.navigate(['/equipment'], { queryParams: { 'page': this.page } });
    };
    /**
     *
     * @param event
     */
    EquipmentListComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getEquipments();
        this.router.navigate(['/equipments'], { queryParams: { 'page': this.page } });
    };
    /**
     *
     * @param sortEvent
     */
    EquipmentListComponent.prototype.sortEvent = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.order = sortEvent.order === __WEBPACK_IMPORTED_MODULE_4__covalent_core__["q" /* TdDataTableSortingOrder */].Ascending ? 'DESC' : 'ASC';
        ;
        this.property = sortEvent.name;
        this.getEquipments();
    };
    /**
     *
     * @param msg
     * @param action
     */
    EquipmentListComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    /**
     *
     * @param equipment
     */
    EquipmentListComponent.prototype.downloadFile = function (equipment) {
        window.location.assign("/projeto/api/equipment/downloadFile/" + equipment.id);
    };
    /**
     *
     * @param equipment
     */
    EquipmentListComponent.prototype.openConfirm = function (equipment) {
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
                    _this.openSnackBar('Equipamento removido com sucesso', 'Sucesso!');
                    _this.getEquipments();
                }, function (erro) {
                    _this.openSnackBar('Não foi possível remover o Equipamento ' + equipment.name, 'Erro!');
                });
            }
        });
    };
    return EquipmentListComponent;
}());
EquipmentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_12" /* Component */])({
        selector: 'app-equipment',
        template: __webpack_require__(487),
        styles: [__webpack_require__(295)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["X" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["X" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_equipment_service__["a" /* EquipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_equipment_service__["a" /* EquipmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__covalent_core__["o" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__covalent_core__["o" /* TdDialogService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ViewContainerRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _g || Object])
], EquipmentListComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=equipment-list.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Location__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__covalent_core__ = __webpack_require__(10);
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
    /*-------------------------------------------------------------------
      * 		 					CONSTRUCTOR
      *-------------------------------------------------------------------*/
    /**
     *
     * @param _dialogService
     * @param locationService
     * @param router
     * @param activatedRouter
     */
    function LocationDetailComponent(_dialogService, locationService, router, activatedRouter) {
        var _this = this;
        this._dialogService = _dialogService;
        this.locationService = locationService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        /*-------------------------------------------------------------------
          * 		 					ATTRIBUTES
          *-------------------------------------------------------------------*/
        /**
         *
         */
        this.location = new __WEBPACK_IMPORTED_MODULE_1__model_Location__["a" /* Location */]();
        /**
         *
         */
        this.subLocations = new __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.page = 1;
        /**
          *
          */
        this.size = 5;
        /**
          *
          */
        this.order = "ASC";
        /**
          *
          */
        this.property = "codLocation";
        /**
          *
          */
        this.total = 0;
        /**
          *
          */
        this.filter = "null";
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
        });
        locationService.findLocationbyId(this.id).subscribe(function (location) {
            _this.location = location;
        }, function (erro) { return console.log(erro); });
        this.getSubLocations();
    }
    /**
     *
     */
    LocationDetailComponent.prototype.getSubLocations = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.locationService.listSubLocationByFilter(this.page - 1, this.size, this.property, this.order, this.filter, this.id).subscribe(function (subLocations) {
            _this.subLocations = subLocations;
            _this.total = _this.subLocations.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
    *
    * @param textSearch
    */
    LocationDetailComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getSubLocations();
    };
    /**
     *
     * @param event
     */
    LocationDetailComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getSubLocations();
    };
    return LocationDetailComponent;
}());
LocationDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_12" /* Component */])({
        selector: 'app-location-detail',
        template: __webpack_require__(489),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__covalent_core__["o" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__covalent_core__["o" /* TdDialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object])
], LocationDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=location-detail.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_consult_location_location_consult_location_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_usuario_user_consult_user_user_consult_user_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Location__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
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
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    /**
     *
     * @param userService
     * @param locationService
     * @param activatedRoute
     * @param snackBar
     * @param router
     * @param _loadingService
     * @param dialog
     */
    function LocationFormComponent(userService, locationService, activatedRoute, snackBar, router, _loadingService, dialog, _dialogService, _viewContainerRef) {
        var _this = this;
        this.userService = userService;
        this.locationService = locationService;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.router = router;
        this._loadingService = _loadingService;
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        /**
         *
         */
        this.locations = [];
        /**
         *
         */
        this.subLocations = new __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.page = 1;
        /**
          *
          */
        this.size = 5;
        /**
          *
          */
        this.order = "ASC";
        /**
          *
          */
        this.property = "codLocation";
        /**
          *
          */
        this.total = 0;
        /**
          *
          */
        this.filter = "null";
        /**
         *
         */
        this.location = new __WEBPACK_IMPORTED_MODULE_3__model_Location__["a" /* Location */]();
        /**
         *
         */
        this.fullNameResponsible = null;
        /**
         *
         */
        this.fullNameViceResponsible = null;
        /**
         *
         */
        this.fullCodLocation = null;
        /**
         *
         */
        this.userCurrent = new __WEBPACK_IMPORTED_MODULE_4__model_User__["a" /* User */]();
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
        activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
            if (id) {
                _this.locationService.findLocationbyId(id).subscribe(function (location) {
                    _this.location = location;
                    if (_this.location.location) {
                        _this.fullCodLocation = _this.location.location.codLocation;
                    }
                    if (_this.location.responsible) {
                        _this.fullNameResponsible = _this.location.responsible.name + ' ' + _this.location.responsible.lastName;
                    }
                    if (_this.location.viceResponsible) {
                        _this.fullNameViceResponsible = _this.location.viceResponsible.name + ' ' + _this.location.viceResponsible.lastName;
                    }
                }, function (erro) { return console.log(erro); });
            }
            if (id) {
                _this.getSubLocations();
            }
        });
        this._loadingService.create({
            name: 'configFullscreen',
            mode: __WEBPACK_IMPORTED_MODULE_5__covalent_core__["r" /* LoadingMode */].Indeterminate,
            type: __WEBPACK_IMPORTED_MODULE_5__covalent_core__["s" /* LoadingType */].Linear,
            color: 'accent',
        });
    }
    /**
     *
     */
    /*-------------------------------------------------------------------
       * 		 					ONINIT
       *-------------------------------------------------------------------*/
    LocationFormComponent.prototype.ngOnInit = function () {
        if (this.location) {
        }
    };
    /*-------------------------------------------------------------------
   *                           BEHAVIORS
   *-------------------------------------------------------------------*/
    /**
     *
     */
    LocationFormComponent.prototype.getSubLocations = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.locationService.listSubLocationByFilter(this.page - 1, this.size, this.property, this.order, this.filter, this.id).subscribe(function (subLocations) {
            _this.subLocations = subLocations;
            _this.total = _this.subLocations.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     * @param textSearch
     */
    LocationFormComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getSubLocations();
    };
    /**
     *
     * @param event
     */
    LocationFormComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getSubLocations();
    };
    /**
     *
     * @param msg
     * @param action
     */
    LocationFormComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 7000,
        });
    };
    /**
     *
     */
    LocationFormComponent.prototype.clearResponsible = function () {
        this.location.responsible = null;
        this.fullNameResponsible = null;
    };
    /**
     *
     */
    LocationFormComponent.prototype.dialogSelectResponsible = function () {
        var _this = this;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__manter_usuario_user_consult_user_user_consult_user_component__["a" /* UserConsultUserComponent */], {
            height: '480px',
            width: '800px',
        }).afterClosed().subscribe(function (result) {
            if (result.user) {
                _this.location.responsible = result.user;
                _this.fullNameResponsible = _this.location.responsible.name + ' ' + _this.location.responsible.lastName;
            }
        });
    };
    /**
     *
     */
    LocationFormComponent.prototype.dialogSelectMainLocation = function () {
        var _this = this;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__location_consult_location_location_consult_location_component__["a" /* LocationConsultLocationComponent */], {
            height: '480px',
            width: '800px',
            data: this.id
        }).afterClosed().subscribe(function (result) {
            if (result.location) {
                _this.location.location = result.location;
                _this.fullCodLocation = _this.location.location.codLocation;
            }
        });
    };
    /**
     *
     */
    LocationFormComponent.prototype.clearMainLocation = function () {
        this.location.location = null;
        this.fullCodLocation = null;
    };
    /**
    *
    */
    LocationFormComponent.prototype.clearViceResponsible = function () {
        this.location.viceResponsible = null;
        this.fullNameViceResponsible = null;
    };
    /**
     *
     */
    LocationFormComponent.prototype.dialogSelectViceResponsible = function () {
        var _this = this;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__manter_usuario_user_consult_user_user_consult_user_component__["a" /* UserConsultUserComponent */], {
            height: '480px',
            width: '800px',
        }).afterClosed().subscribe(function (result) {
            if (result.user != undefined) {
                _this.location.viceResponsible = result.user;
                _this.fullNameViceResponsible = _this.location.viceResponsible.name + ' ' + _this.location.viceResponsible.lastName;
            }
        });
    };
    /**
     *
     * @param event
     */
    LocationFormComponent.prototype.saveLocation = function (event) {
        var _this = this;
        this._loadingService.register('configFullscreen');
        setTimeout(function () {
            _this._loadingService.resolve('configFullscreen');
        }, 1000000);
        this.locationService.saveLocation(this.location).subscribe(function () {
            setTimeout(function () {
                _this._loadingService.resolve('configFullscreen');
            }, 0);
            _this.router.navigate(['/location'], { queryParams: { page: 1 } });
            _this.openSnackBar('Localização salva com sucesso ', 'Sucesso!');
        }, function (erro) {
            setTimeout(function () {
                _this._loadingService.resolve('configFullscreen');
            }, 0);
            _this.openSnackBar(erro._body, 'Erro!');
        });
    };
    /**
     *
     * @param location
     */
    LocationFormComponent.prototype.openConfirmDelete = function (location) {
        var _this = this;
        this._dialogService.openConfirm({
            message: 'Tem certeza que deseja excluir ' + location.codLocation + ' ?',
            disableClose: false,
            viewContainerRef: this._viewContainerRef,
            title: 'Excluir sub localização',
            cancelButton: 'Não',
            acceptButton: 'Sim',
        }).
            afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.locationService.deleteLocation(location).subscribe(function () {
                    _this.openSnackBar('Sub localização removido com sucesso', 'Sucesso!');
                    _this.getSubLocations();
                }, function (erro) {
                    _this.openSnackBar('Não foi possível remover a sub localização ' + location.codLocation + ' a mesma está associada a um ou mais equipamentos ou localizaçãos', 'Erro!');
                });
            }
        });
    };
    return LocationFormComponent;
}());
LocationFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["_12" /* Component */])({
        selector: 'app-location-form',
        template: __webpack_require__(490),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["X" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["X" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__covalent_core__["n" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__covalent_core__["n" /* TdLoadingService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MdDialog */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__covalent_core__["o" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__covalent_core__["o" /* TdDialogService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ViewContainerRef */]) === "function" && _j || Object])
], LocationFormComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=location-form.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LocationListComponent = (function () {
    /*-------------------------------------------------------------------
      * 		 					CONSTRUCTOR
      *-------------------------------------------------------------------*/
    /**
     *
     * @param snackBar
     * @param locationService
     * @param router
     * @param _dialogService
     * @param _viewContainerRef
     * @param userService
     * @param route
     */
    function LocationListComponent(snackBar, locationService, router, _dialogService, _viewContainerRef, userService, route) {
        var _this = this;
        this.snackBar = snackBar;
        this.locationService = locationService;
        this.router = router;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        this.userService = userService;
        this.route = route;
        /*-------------------------------------------------------------------
         * 		 					ATTRIBUTES
         *-------------------------------------------------------------------*/
        /**
         *
         */
        this.locations = new __WEBPACK_IMPORTED_MODULE_0__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.userCurrent = new __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* User */]();
        /**
         *
         */
        this.page = 1;
        /**
         *
         */
        this.size = 5;
        /**
         *
         */
        this.order = "ASC";
        /**
         *
         */
        this.property = "location";
        /**
         *
         */
        this.sortBy = "";
        /**
         *
         */
        this.filter = "";
        /**
        *
        */
        this.columns = [
            {
                name: 'codLocation', label: 'Código Localizador', sortable: true
            },
            {
                name: 'responsible', label: 'Responsável', sortable: true
            },
            {
                name: '', label: '', sortable: false
            }
        ];
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
        this.getLocations();
    }
    /*-------------------------------------------------------------------
      * 		 					ONINIT
      *-------------------------------------------------------------------*/
    LocationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.page = queryParams['page'];
        });
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     */
    LocationListComponent.prototype.getLocations = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.locationService.listMainLocationsByFilters(this.page - 1, this.size, this.property, this.order, this.filter).subscribe(function (locations) {
            _this.locations = locations;
            _this.total = locations.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     * @param textSearch
     */
    LocationListComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getLocations();
        this.router.navigate(['/location'], { queryParams: { 'page': this.page } });
    };
    /**
     *
     * @param event
     */
    LocationListComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getLocations();
        this.router.navigate(['/location'], { queryParams: { 'page': this.page } });
    };
    /**
     *
     * @param sortEvent
     */
    LocationListComponent.prototype.sortEvent = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.order = sortEvent.order === __WEBPACK_IMPORTED_MODULE_4__covalent_core__["q" /* TdDataTableSortingOrder */].Ascending ? 'DESC' : 'ASC';
        ;
        this.property = sortEvent.name;
        this.getLocations();
    };
    /**
     *
     * @param msg
     * @param action
     */
    LocationListComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 6000,
        });
    };
    /**
     *
     * @param location
     */
    LocationListComponent.prototype.openConfirm = function (location) {
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
                    _this.openSnackBar('Localização removida com sucesso', 'Sucesso!');
                    _this.getLocations();
                }, function (erro) {
                    console.log(erro);
                    _this.openSnackBar('Não foi possível remover a Localização ' + location.codLocation + ' a mesma está associada a um equipamento ou localização', 'Erro!');
                });
            }
        });
    };
    return LocationListComponent;
}());
LocationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_12" /* Component */])({
        selector: 'app-location',
        template: __webpack_require__(491),
        styles: [__webpack_require__(299)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["X" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["X" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__covalent_core__["o" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__covalent_core__["o" /* TdDialogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ViewContainerRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */]) === "function" && _g || Object])
], LocationListComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=location-list.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConsultUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserConsultUserComponent = (function () {
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    function UserConsultUserComponent(userService, activatedRoute, router, mdDialogRef, data) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        /*-------------------------------------------------------------------
           * 		 					ATTRIBUTES
           *-------------------------------------------------------------------*/
        /**
         *
         */
        this.users = new __WEBPACK_IMPORTED_MODULE_5__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.user = new __WEBPACK_IMPORTED_MODULE_4__model_User__["a" /* User */]();
        /**
         *
         */
        this.page = 1;
        /**
         *
         */
        this.size = 5;
        /**
         *
         */
        this.order = "ASC";
        /**
         *
         */
        this.property = "name";
        /**
         *
         */
        this.sortBy = "";
        /**
         *
         */
        this.filter = "";
        /**
        *
        */
        this.columns = [
            {
                name: 'name', label: 'Nome', sortable: true
            },
            {
                name: 'lastName', label: 'Sobrenome', sortable: true
            },
            {
                name: 'email', label: 'Email', sortable: true
            }
        ];
        this.id = data;
        this.getUsers();
    }
    /*-------------------------------------------------------------------
     *                           BEHAVIORS
     *-------------------------------------------------------------------*/
    UserConsultUserComponent.prototype.getUsers = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.userService.listUsersByFilters(this.page - 1, this.size, this.property, this.order, this.filter).subscribe(function (users) {
            _this.users = users;
            _this.total = users.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     */
    UserConsultUserComponent.prototype.rowSelect = function (selectedRow) {
        if (selectedRow != null) {
            this.user = selectedRow.row;
        }
    };
    /**
     *
     */
    UserConsultUserComponent.prototype.selectUser = function () {
        if (this.user != null) {
            this.mdDialogRef.close({ user: this.user });
        }
    };
    /**
     *
     */
    UserConsultUserComponent.prototype.emitter = function () {
        this.selectUser();
    };
    /**
     *
     * @param textSearch
     */
    UserConsultUserComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getUsers();
    };
    /**
     *
     * @param event
     */
    UserConsultUserComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getUsers();
    };
    /**
     *
     * @param sortEvent
     */
    UserConsultUserComponent.prototype.sortEvent = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.order = sortEvent.order == __WEBPACK_IMPORTED_MODULE_3__covalent_core__["q" /* TdDataTableSortingOrder */].Ascending ? 'DESC' : 'ASC';
        this.property = sortEvent.name;
        this.getUsers();
    };
    return UserConsultUserComponent;
}());
UserConsultUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_12" /* Component */])({
        selector: 'app-user-consult-user',
        template: __webpack_require__(492),
        styles: [__webpack_require__(300)]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["W" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MdDialogRef */]) === "function" && _d || Object, Object])
], UserConsultUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-consult-user.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
    /*-------------------------------------------------------------------
    * 		 					CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param userService
     * @param router
     * @param activatedRouter
     */
    function UserDetailComponent(userService, router, activatedRouter) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        /*-------------------------------------------------------------------
        * 		 					ATTRIBUTES
        *-------------------------------------------------------------------*/
        /**
         *
         */
        this.user = new __WEBPACK_IMPORTED_MODULE_0__model_User__["a" /* User */]();
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            _this.userService.findUserbyId(id).subscribe(function (user) {
                _this.user = user;
            }, function (erro) { return console.log(erro); });
        });
    }
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* Component */])({
        selector: 'app-user-detail',
        template: __webpack_require__(493),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(1);
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
    /*-------------------------------------------------------------------
    * 		 					CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param _loadingService
     * @param snackBar
     * @param userService
     * @param router
     * @param activatedRouter
     */
    function UserFormComponent(_loadingService, snackBar, userService, router, activatedRouter) {
        var _this = this;
        this._loadingService = _loadingService;
        this.snackBar = snackBar;
        this.userService = userService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        /*-------------------------------------------------------------------
        * 		 					ATTRIBUTES
        *-------------------------------------------------------------------*/
        /**
         *
         */
        this.user = new __WEBPACK_IMPORTED_MODULE_0__model_User__["a" /* User */]();
        /**
         *
         */
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_0__model_User__["a" /* User */]();
        /**
         *
         */
        this.sexs = [
            {
                value: 'MASCULINO', viewValue: 'Masculino'
            },
            {
                value: 'FEMININO', viewValue: 'Feminino'
            },
            {
                value: 'OUTRO', viewValue: 'Outro'
            }
        ];
        /**
         *
         */
        this.roles = [
            {
                value: 'ROLE_ADMIN', viewValue: 'Administrador'
            },
            {
                value: 'ROLE_USER', viewValue: 'Engenheiro'
            },
        ];
        activatedRouter.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.userService.findUserbyId(id).subscribe(function (user) { return _this.user = user; }, function (erro) { return console.log(erro); });
            }
        });
        this._loadingService.create({
            name: 'configFullscreen',
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["r" /* LoadingMode */].Indeterminate,
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["s" /* LoadingType */].Linear,
            color: 'accent',
        });
    }
    /*-------------------------------------------------------------------
     *                           BEHAVIORS
     *-------------------------------------------------------------------*/
    /**
     *
     * @param msg
     * @param action
     */
    UserFormComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    /**
     *
     * @param event
     */
    UserFormComponent.prototype.insertUser = function (event) {
        var _this = this;
        this._loadingService.register('configFullscreen');
        setTimeout(function () {
            _this._loadingService.resolve('configFullscreen');
        }, 1000000);
        this.userService.insertUser(this.user).subscribe(function () {
            setTimeout(function () {
                _this._loadingService.resolve('configFullscreen');
            }, 0);
            _this.router.navigate(['/user'], { queryParams: { page: 1 } });
            _this.openSnackBar('Usuário salvo com sucesso ', 'Sucesso!');
        }, function (erro) {
            setTimeout(function () {
                _this._loadingService.resolve('configFullscreen');
            }, 0);
            _this.openSnackBar(erro._body, 'Erro!');
        });
    };
    /**
     *
     * @param user
     */
    UserFormComponent.prototype.updatePassword = function (user) {
        var _this = this;
        this.userService.updateUserToPassword(user).subscribe(function (sucess) {
            _this.openSnackBar(Object(sucess)._body, 'Sucesso!');
        }, function (erro) {
            return _this.openSnackBar(erro._body, 'Erro!');
        });
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_12" /* Component */])({
        selector: 'app-user-form',
        template: __webpack_require__(494),
        styles: [__webpack_require__(302)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["n" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["n" /* TdLoadingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["X" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["X" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _e || Object])
], UserFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eits_ng2__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__covalent_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserListComponent = (function () {
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    /**
     *
     * @param snackBar
     * @param userService
     * @param router
     * @param _dialogService
     * @param _viewContainerRef
     * @param route
     * @param _dataTableService
     */
    function UserListComponent(snackBar, userService, router, _dialogService, _viewContainerRef, route, _dataTableService) {
        var _this = this;
        this.snackBar = snackBar;
        this.userService = userService;
        this.router = router;
        this._dialogService = _dialogService;
        this._viewContainerRef = _viewContainerRef;
        this.route = route;
        this._dataTableService = _dataTableService;
        /*-------------------------------------------------------------------
          * 		 					ATTRIBUTES
          *-------------------------------------------------------------------*/
        /**
         *
         */
        this.users = new __WEBPACK_IMPORTED_MODULE_1__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.userCurrent = new __WEBPACK_IMPORTED_MODULE_0__model_User__["a" /* User */]();
        /**
         *
         */
        this.page = 1;
        /**
         *
         */
        this.size = 5;
        /**
         *
         */
        this.order = "ASC";
        /**
         *
         */
        this.property = "name";
        /**
         *
         */
        this.sortBy = "";
        /**
         *
         */
        this.filter = "";
        /**
         *
         */
        this.columns = [
            {
                name: 'name', label: 'Nome', sortable: true
            },
            {
                name: 'lastName', label: 'Sobrenome', sortable: true
            },
            {
                name: 'email', label: 'Email', sortable: true
            },
            {
                name: '', label: '', sortable: false
            }
        ];
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
        this.getUsers();
        __WEBPACK_IMPORTED_MODULE_2_eits_ng2__["a" /* Broker */].of("userService").promise("helloWorld")
            .then(function (result) {
            console.log(result);
        })
            .catch(function (message) {
            console.log(message);
        });
    }
    /*-------------------------------------------------------------------
       * 		 					ONINIT
       *-------------------------------------------------------------------*/
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.page = queryParams['page'];
        });
    };
    /*-------------------------------------------------------------------
     *                           BEHAVIORS
     *-------------------------------------------------------------------*/
    /**
     *
     */
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        this.userService.listUsersByFilters(this.page - 1, this.size, this.property, this.order, this.filter).subscribe(function (users) {
            _this.users = users;
            _this.total = users.totalElements;
        }, function (erro) { return console.log(erro); });
    };
    /**
     *
     * @param textSearch
     */
    UserListComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getUsers();
        this.router.navigate(['/user'], { queryParams: { 'page': this.page } });
    };
    /**
     *
     * @param event
     */
    UserListComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getUsers();
        this.router.navigate(['/user'], { queryParams: { 'page': this.page } });
    };
    /**
     *
     * @param sortEvent
     */
    UserListComponent.prototype.sortEvent = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.order = sortEvent.order === __WEBPACK_IMPORTED_MODULE_7__covalent_core__["q" /* TdDataTableSortingOrder */].Ascending ? 'DESC' : 'ASC';
        this.property = sortEvent.name;
        this.getUsers();
    };
    /**
     *
     * @param msg
     * @param action
     */
    UserListComponent.prototype.openSnackBar = function (msg, action) {
        this.snackBar.open(msg, action, {
            duration: 5000,
        });
    };
    /**
     *
     * @param event
     * @param user
     */
    UserListComponent.prototype.openConfirm = function (event, user) {
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
                    _this.userService.updateUsertoActivate(user).subscribe(function () {
                        _this.openSnackBar('Usuário ativado com sucesso', 'Sucesso!');
                        _this.getUsers();
                    }, function (erro) {
                        _this.openSnackBar('Não foi possível ativar o usuário ', 'Erro!');
                    });
                }
                else {
                    _this.userService.updateUsertoDeactivate(user).subscribe(function () {
                        _this.openSnackBar('Usuário desativado com sucesso', 'Sucesso!');
                        _this.getUsers();
                    }, function (erro) {
                        console.log(erro);
                        _this.openSnackBar('Não foi possível desativar o usuário ', 'Erro!');
                    });
                }
            }
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_12" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(495),
        styles: [__webpack_require__(303)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["X" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["X" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__covalent_core__["o" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__covalent_core__["o" /* TdDialogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ViewContainerRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__covalent_core__["u" /* TdDataTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__covalent_core__["u" /* TdDataTableService */]) === "function" && _g || Object])
], UserListComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * MODEL User
 */
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 169;


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(19);
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


/**
 *
 */
var UserService = (function () {
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    function UserService(http) {
        this.http = http;
        /**
         *
         */
        this.url = '/projeto/api/user/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    /*-------------------------------------------------------------------
       *				 		     SERVICES
       *-------------------------------------------------------------------*/
    /**
     *
     * @param user
     */
    UserService.prototype.insertUser = function (user) {
        if (user.id != undefined) {
            return this.http.put(this.url + 'updateUser', JSON.stringify(user), { headers: this.headers });
        }
        else {
            return this.http.post(this.url + 'insertUser', JSON.stringify(user), { headers: this.headers });
        }
    };
    /**
     *
     * @param user
     */
    UserService.prototype.updateUsertoActivate = function (user) {
        return this.http.patch(this.url + 'updateUsertoActivate/' + user.id, JSON.stringify(user), { headers: this.headers });
    };
    /**
     *
     * @param user
     */
    UserService.prototype.updateUsertoDeactivate = function (user) {
        return this.http.patch(this.url + 'updateUsertoDeactivate/' + user.id, JSON.stringify(user), { headers: this.headers });
    };
    /**
     *
     * @param id
     */
    UserService.prototype.findUserbyId = function (id) {
        return this.http.get(this.url + 'findUserById/' + id).map(function (res) { return res.json(); });
        ;
    };
    /**
     *
     */
    UserService.prototype.getCurrentUser = function () {
        return this.http.get(this.url + 'getCurrentUser').map(function (res) { return res.json(); });
        ;
    };
    /**
     *
     * @param user
     */
    UserService.prototype.updateUserToPassword = function (user) {
        return this.http.put(this.url + 'updateUserToPassword', JSON.stringify(user), { headers: this.headers });
    };
    /**
     *
     * @param page
     * @param size
     * @param property
     * @param order
     * @param textSearch
     */
    UserService.prototype.listUsersByFilters = function (page, size, property, order, textSearch) {
        return this.http.get(this.url + 'listUsersByFilters/' + page + '/' + size + '/' + property + '/' + order + '/' + textSearch).map(function (res) { return res.json(); });
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(233);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manter_localizacao_location_list_location_list_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manter_equipamento_equipment_list_equipment_list_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_usuario_user_list_user_list_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manter_localizacao_location_form_location_form_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manter_localizacao_location_detail_location_detail_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manter_equipamento_equipment_form_equipment_form_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manter_equipamento_equipment_detail_equipment_detail_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manter_usuario_user_detail_user_detail_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manter_usuario_user_form_user_form_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__manter_usuario_user_list_user_list_component__["a" /* UserListComponent */]
    },
    {
        path: 'user-new', component: __WEBPACK_IMPORTED_MODULE_9__manter_usuario_user_form_user_form_component__["a" /* UserFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_auth_service__["a" /* AuthService */]]
    },
    {
        path: 'user-detail/:id', component: __WEBPACK_IMPORTED_MODULE_8__manter_usuario_user_detail_user_detail_component__["a" /* UserDetailComponent */]
    },
    {
        path: 'user-edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__manter_usuario_user_form_user_form_component__["a" /* UserFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_auth_service__["a" /* AuthService */]]
    },
    {
        path: 'equipment', component: __WEBPACK_IMPORTED_MODULE_1__manter_equipamento_equipment_list_equipment_list_component__["a" /* EquipmentListComponent */]
    },
    {
        path: 'equipment-new', component: __WEBPACK_IMPORTED_MODULE_6__manter_equipamento_equipment_form_equipment_form_component__["a" /* EquipmentFormComponent */]
    },
    {
        path: 'equipment-detail/:id', component: __WEBPACK_IMPORTED_MODULE_7__manter_equipamento_equipment_detail_equipment_detail_component__["a" /* EquipmentDetailComponent */]
    },
    {
        path: 'equipment-edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__manter_equipamento_equipment_form_equipment_form_component__["a" /* EquipmentFormComponent */]
    },
    {
        path: 'location', component: __WEBPACK_IMPORTED_MODULE_0__manter_localizacao_location_list_location_list_component__["a" /* LocationListComponent */]
    },
    {
        path: 'location-new', component: __WEBPACK_IMPORTED_MODULE_4__manter_localizacao_location_form_location_form_component__["a" /* LocationFormComponent */]
    },
    {
        path: 'location-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__manter_localizacao_location_detail_location_detail_component__["a" /* LocationDetailComponent */]
    },
    {
        path: 'location-edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__manter_localizacao_location_form_location_form_component__["a" /* LocationFormComponent */]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(482),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["m" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["m" /* TdMediaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manter_equipamento_equipment_consult_equipment_equipment_consult_equipment_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Location__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Equipment__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manter_equipamento_equipment_list_equipment_list_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manter_localizacao_location_list_location_list_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manter_usuario_user_list_user_list_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_equipment_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manter_usuario_user_detail_user_detail_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manter_usuario_user_form_user_form_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manter_localizacao_location_detail_location_detail_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manter_localizacao_location_form_location_form_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manter_equipamento_equipment_form_equipment_form_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manter_equipamento_equipment_detail_equipment_detail_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__authentication_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__covalent_http__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__covalent_highlight__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__covalent_markdown__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__covalent_dynamic_forms__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_home_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_eits_ng2__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__manter_localizacao_location_consult_location_location_consult_location_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__manter_usuario_user_consult_user_user_consult_user_component__ = __webpack_require__(137);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_31__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__manter_usuario_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__manter_usuario_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__manter_usuario_user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__manter_localizacao_location_list_location_list_component__["a" /* LocationListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__manter_equipamento_equipment_list_equipment_list_component__["a" /* EquipmentListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__manter_localizacao_location_detail_location_detail_component__["a" /* LocationDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__manter_localizacao_location_form_location_form_component__["a" /* LocationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_15__manter_equipamento_equipment_form_equipment_form_component__["a" /* EquipmentFormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__manter_equipamento_equipment_detail_equipment_detail_component__["a" /* EquipmentDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_0__manter_equipamento_equipment_consult_equipment_equipment_consult_equipment_component__["a" /* EquipmentConsultEquipmentComponent */], __WEBPACK_IMPORTED_MODULE_34__manter_localizacao_location_consult_location_location_consult_location_component__["a" /* LocationConsultLocationComponent */], __WEBPACK_IMPORTED_MODULE_35__manter_usuario_user_consult_user_user_consult_user_component__["a" /* UserConsultUserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_18__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["a" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["b" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_27__covalent_http__["a" /* CovalentHttpModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_28__covalent_highlight__["a" /* CovalentHighlightModule */],
            __WEBPACK_IMPORTED_MODULE_29__covalent_markdown__["a" /* CovalentMarkdownModule */],
            __WEBPACK_IMPORTED_MODULE_30__covalent_dynamic_forms__["a" /* CovalentDynamicFormsModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["c" /* CovalentExpansionPanelModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["b" /* MdCoreModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["d" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["g" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_30__covalent_dynamic_forms__["a" /* CovalentDynamicFormsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["i" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_22__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["d" /* CovalentMessageModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["j" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["e" /* CovalentChipsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["k" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["d" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["f" /* CovalentDialogsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["l" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["g" /* CovalentFileModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["m" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["h" /* CovalentLoadingModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["n" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["i" /* CovalentDataTableModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["j" /* CovalentPagingModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["k" /* CovalentSearchModule */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["l" /* CovalentCommonModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["o" /* MdDialogModule */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_33_eits_ng2__["a" /* Broker */],
            __WEBPACK_IMPORTED_MODULE_4__model_Equipment__["a" /* Equipment */],
            __WEBPACK_IMPORTED_MODULE_2__model_User__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__model_Location__["a" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__model_PageRequest__["a" /* PageRequest */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["m" /* TdMediaService */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["n" /* TdLoadingService */],
            __WEBPACK_IMPORTED_MODULE_10__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__service_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_8__service_equipment_service__["a" /* EquipmentService */],
            __WEBPACK_IMPORTED_MODULE_26__covalent_core__["o" /* TdDialogService */],
            __WEBPACK_IMPORTED_MODULE_17__authentication_auth_service__["a" /* AuthService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__manter_equipamento_equipment_consult_equipment_equipment_consult_equipment_component__["a" /* EquipmentConsultEquipmentComponent */], __WEBPACK_IMPORTED_MODULE_34__manter_localizacao_location_consult_location_location_consult_location_component__["a" /* LocationConsultLocationComponent */], __WEBPACK_IMPORTED_MODULE_35__manter_usuario_user_consult_user_user_consult_user_component__["a" /* UserConsultUserComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 233:
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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-container \r\n{\r\n    z-index: 1;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.example-sidenav-content \r\n{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n} \r\n\r\n.example-sidenav\r\n{\r\n    padding: 20px;\r\n}\r\n\r\nbody \r\n{\r\n    margin: 0;\r\n    font-family: Roboto, sans-serif;\r\n    background-color: white;\r\n}\r\n\r\nmd-card \r\n{\r\n    max-width: 80%;\r\n    margin: 2em auto;\r\n    text-align: center;\r\n}\r\n\r\nmd-toolbar-row \r\n{\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.done \r\n{\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    color: white;\r\n}\r\n\r\nmd-toolbar\r\n{\r\n    box-shadow: 1px 2px 2px #827272;\r\n}\r\n\r\n.botao\r\n{\r\n    /*display: block; \r\n    margin-right:16px; \r\n    height: 100%;\r\n    width: 10%; \r\n    position: relative;\r\n    border-style: none;\r\n    color: black;*/\r\n    position:absolute;\r\n    left: 94% ;          /*1250px; width: 193%;*/\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.botao-lateral\r\n{\r\n    position: relative;\r\n    top: -20px;\r\n    left: -20px;\r\n    width: 115%;\r\n    height: 70px;\r\n    background-color: white;\r\n    border-style: none;\r\n    color: black\r\n}\r\n\r\n.botao-lateral:hover\r\n{\r\n    background-color: #d1c8c8;\r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nbody\r\n{\r\n    background-color: white;\r\n}\r\n.icon{\r\n     background-color: white;\r\n}\r\n.button{\r\n    color: white;\r\n}\r\n.toolbar{\r\n    background-color: #1976d2;\r\n    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".button\r\n{\r\n    position: absolute;\r\n    z-index: 1; \r\n    left: 555px;\r\n    bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n\r\n  \r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 78%;\r\n}\r\n.card\r\n{\r\n  width: 100%;\r\n} \r\n.txt\r\n{\r\n  left: 10%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 80%;\r\n}\r\n.select\r\n{\r\n  width: 50%;\r\n}\r\n.selectFile\r\n{\r\n  width: 40%;\r\n}\r\n.selectMain\r\n{\r\n  width: 55%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "body\r\n{\r\n    background-color: white;\r\n    top: -20px;\r\n}\r\n.mat-toolbar.mat-primary \r\n{\r\n    background: #ef6c00;\r\n}\r\n.botao\r\n{\r\n    position:absolute;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00;\r\n    \r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.buttonAdd\r\n{\r\n    position: fixed;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00; \r\n    bottom:20px; \r\n    z-index: 1; \r\n}\r\n.buttons\r\n{\r\n    position: absolute;\r\n    z-index: 1; \r\n    left: 80%;\r\n}\r\n.Empty\r\n{\r\n    position: fixed;\r\n    left: 45%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".button\r\n{\r\n    position: absolute;\r\n    z-index: 1; \r\n    left: 555px;\r\n    bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n\r\n  \r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 78%;\r\n}\r\n.card\r\n{\r\n  width: 100%;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 80%;\r\n}\r\n.select\r\n{\r\n  width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "body\r\n{\r\n    background-color: white;\r\n    top: -20px;\r\n}\r\n.mat-toolbar.mat-primary {\r\n    background: #ef6c00;\r\n}\r\n.botao{\r\n    position:absolute;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00;\r\n    \r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.buttonAdd\r\n{\r\n    position: fixed;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00; \r\n    bottom:20px; \r\n    z-index: 1; \r\n} \r\n.buttons\r\n{\r\n    position: absolute;\r\n    z-index: 1; \r\n    left: 83%;\r\n}\r\n.Empty\r\n{\r\n    position: fixed;\r\n    left: 45%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".button\r\n{\r\n    position: absolute;\r\n    z-index: 1; \r\n    left: 555px;\r\n    bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 78%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-form \r\n{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width \r\n{\r\n  width: 100%;\r\n}\r\n.button\r\n{\r\n    position:relative;\r\n    left: 80%;\r\n}\r\n.deactivate\r\n{\r\n  color: white;\r\n  background-color: red;\r\n}\r\n.active\r\n{\r\n  color: white;\r\n  background-color: green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "body\r\n{\r\n    background-color: white;\r\n    top: -20px;\r\n}\r\n.mat-toolbar.mat-primary \r\n{\r\n    background: #ef6c00;\r\n}\r\n.botao\r\n{ \r\n    position:absolute;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00;\r\n}\r\nhtml, body, material-app, md-sidenav-container, .my-content \r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.deactivateButton\r\n{\r\n    color: red;\r\n}\r\n.activateButton\r\n{\r\n    color: green;\r\n}\r\n.buttonAdd\r\n{\r\n    position: fixed;\r\n    top: 100px;\r\n    left: 92%;\r\n    background-color: #ef6c00; \r\n    bottom:20px; \r\n    z-index: 1; \r\n}\r\n.Empty\r\n{\r\n    position: fixed;\r\n    left: 45%;\r\n}\r\n.buttons\r\n{\r\n    position: absolute;\r\n    z-index: 1; \r\n    left: 83%;\r\n}\r\n.table\r\n{\r\n    position: absolute;\r\n    z-index: 1; \r\n    left: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(19);
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


/**
 *
 */
var LocationService = (function () {
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    function LocationService(http) {
        this.http = http;
        /**
         *
         */
        this.url = '/projeto/api/location/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    /*-------------------------------------------------------------------
       *				 		     SERVICES
       *-------------------------------------------------------------------*/
    /**
     *
     * @param location
     */
    LocationService.prototype.saveLocation = function (location) {
        if (location.id != undefined) {
            return this.http.put(this.url + 'updateLocation', JSON.stringify(location), { headers: this.headers });
        }
        else {
            return this.http.post(this.url + 'insertLocation', JSON.stringify(location), { headers: this.headers });
        }
    };
    /**
     *
     * @param id
     */
    LocationService.prototype.listSubLocationByFilter = function (page, size, property, order, filter, id) {
        return this.http.get(this.url + 'listSubLocationByFilter/' + page + '/' + size + '/' + property + '/' + order + '/' + filter + '/' + id).map(function (res) { return res.json(); });
    };
    /**
     *
     */
    LocationService.prototype.deleteLocation = function (location) {
        return this.http.delete(this.url + 'deleteLocation/' + location.id);
    };
    /**
     *
     * @param id
     */
    LocationService.prototype.findLocationbyId = function (id) {
        return this.http.get(this.url + 'findLocationById/' + id).map(function (res) { return res.json(); });
        ;
    };
    /**
     *
     * @param page
     * @param size
     * @param property
     * @param order
     * @param filter
     */
    LocationService.prototype.listLocationsByFilters = function (page, size, property, order, filter) {
        return this.http.get(this.url + 'listLocationsByFilters/' + page + '/' + size + '/' + property + '/' + order + '/' + filter).map(function (res) { return res.json(); });
    };
    /**
     *
     * @param page
     * @param size
     * @param property
     * @param order
     * @param filter
     */
    LocationService.prototype.listMainLocationsByFilters = function (page, size, property, order, filter) {
        return this.http.get(this.url + 'listMainLocationsByFilters/' + page + '/' + size + '/' + property + '/' + order + '/' + filter).map(function (res) { return res.json(); });
    };
    /**
     *
     * @param page
     * @param size
     * @param property
     * @param order
     * @param id
     * @param filter
     */
    LocationService.prototype.ListNonAssociatedLocationByFilter = function (page, size, property, order, id, filter) {
        return this.http.get(this.url + 'ListNonAssociatedLocationByFilter/' + page + '/' + size + '/' + property + '/' + order + '/' + id + '/' + filter).map(function (res) { return res.json(); });
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(19);
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
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    /**
     *
     * @param http
     */
    function EquipmentService(http) {
        this.http = http;
        /**
         *
         */
        this.url = '/projeto/api/equipment/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        this.headersFile = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headersFile.append('Content-Type', 'multipart/form-data');
    }
    /*-------------------------------------------------------------------
       *				 		     SERVICES
       *-------------------------------------------------------------------*/
    /**
     *
     * @param id
     */
    EquipmentService.prototype.clearFileEquipment = function (id) {
        return this.http.delete(this.url + 'clearFileEquipment/' + id);
    };
    /**
     *
     * @param equipment
     */
    EquipmentService.prototype.insertEquipment = function (equipment) {
        if (equipment.id != undefined) {
            return this.http.put(this.url + 'updateEquipment', JSON.stringify(equipment), { headers: this.headers });
        }
        else {
            return this.http.post(this.url + 'insertEquipment', JSON.stringify(equipment), { headers: this.headers });
        }
    };
    /**
     *
     * @param page
     * @param size
     * @param property
     * @param order
     * @param filter
     * @param id
     */
    EquipmentService.prototype.listSubEquipmentByFilter = function (page, size, property, order, filter, id) {
        return this.http.get(this.url + 'listSubEquipmentByFilter/' + page + '/' + size + '/' + property + '/' + order + '/' + filter + '/' + id).map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     */
    EquipmentService.prototype.downloadFile = function (id) {
        return this.http.get(this.url + 'downloadFile/' + id);
    };
    /**
     *
     * @param file
     * @param id
     */
    EquipmentService.prototype.updateFile = function (file, id) {
        return this.http.post(this.url + 'uploadFile/' + id, file);
    };
    /**
     *
     * @param equipment
     */
    EquipmentService.prototype.deleteEquipment = function (equipment) {
        return this.http.delete(this.url + 'deleteEquipment/' + equipment.id);
    };
    /**
     *
     * @param id
     */
    EquipmentService.prototype.findEquipmentbyId = function (id) {
        return this.http.get(this.url + 'findEquipmentById/' + id).map(function (res) { return res.json(); });
        ;
    };
    /**
     *
     * @param page
     * @param size
     * @param property
     * @param order
     * @param filter
     */
    EquipmentService.prototype.listMainEquipmentsByFilters = function (page, size, property, order, filter) {
        return this.http.get(this.url + 'listMainEquipmentsByFilters/' + page + '/' + size + '/' + property + '/' + order + '/' + filter).map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     * @param filter
     */
    EquipmentService.prototype.ListNonAssociatedEquipmentByFilter = function (page, size, property, order, id, filter) {
        if (!id) {
            id = 0;
        }
        return this.http.get(this.url + 'ListNonAssociatedEquipmentByFilter/' + page + '/' + size + '/' + property + '/' + order + '/' + id + '/' + filter).map(function (res) { return res.json(); });
    };
    /**
     *
     * @param equipment
     */
    EquipmentService.prototype.disassociateEquipment = function (equipment) {
        return this.http.patch(this.url + 'disassociateEquipment/' + equipment.id, { headers: this.headers });
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Equipment; });
/**
 * Model Equipment
 */
var Equipment = (function () {
    function Equipment() {
    }
    return Equipment;
}());

//# sourceMappingURL=Equipment.js.map

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<body>\r\n<md-toolbar class=\"toolbar\">\r\n<button md-button (click)=\"sidenav.open()\" layout-align=\"center center\" class=\"button\"><md-icon>menu</md-icon></button>\r\n<button md-button md-button routerLink=\"\" (click)=\"sidenav.close()\" class=\"button\"><md-icon >home</md-icon></button>\r\n<a md-button class=\"botao\" href=\"/projeto/logout\"><md-icon >exit_to_app</md-icon></a>\r\n</md-toolbar>\r\n<md-sidenav-container >\r\n\r\n        <router-outlet></router-outlet>\r\n        <md-sidenav #sidenav class=\"example-sidenav\">\r\n            <li routerLinkActive=\"active\">\r\n                <button class=\"botao-lateral\" (click)=\"sidenav.close()\" routerLink=\"/user\" [queryParams]=\"{page:1}\">Usuários</button>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <button class=\"botao-lateral\" (click)=\"sidenav.close()\" routerLink=\"/location\" [queryParams]=\"{page:1}\">Localização</button>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <button class=\"botao-lateral\" (click)=\"sidenav.close()\" routerLink=\"/equipment\" [queryParams]=\"{page:1}\">Equipamentos</button>\r\n            </li>\r\n        </md-sidenav>\r\n\r\n        \r\n</md-sidenav-container>\r\n<div flex layout=\"column\" flex-gt-xs=\"30\" layout-align=\"right right\">\r\n          <p class=\"text-sm\">&copy; Projeto Desafio 2017 Eits, Inc. All rights reserved.</p>\r\n        </div>\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav toolbarTitle=\"Início\" navigationRoute=\"/\">\r\n  <router-outlet></router-outlet>\r\n  <td-layout-footer>\r\n    Optional footer\r\n  </td-layout-footer>\r\n</td-layout-nav>"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n        <td-search-box  [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" \r\n                        placeholder=\"Procurar por nome, descrição ou código localizador\" \r\n                        (searchDebounce)=\"search(textSearch.value)\" flex>\r\n        </td-search-box>\r\n    </div>\r\n    <md-divider></md-divider>\r\n    <td-data-table\r\n        #dataTable\r\n        [data]=\"mainEquipments.content\"\r\n        [columns]=\"columns\"\r\n        [selectable]=\"true\"\r\n        [clickable]=\"false\"\r\n        [multiple]=\"false\"\r\n        [sortable]=\"true\"\r\n        (rowSelect)=\"rowSelect($event)\"\r\n        (sortChange)=\"sortEvent($event)\">\r\n        <ng-template tdDataTableTemplate=\"name\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\r\n            <div layout=\"row\">\r\n                <span flex>{{value | truncate:20 }} </span>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template tdDataTableTemplate=\"description\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\r\n            <div layout=\"row\">\r\n                <span flex>{{value | truncate:15 }}</span>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template tdDataTableTemplate=\"location.codLocation\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\r\n            <div layout=\"row\">\r\n                <span flex>{{value | truncate:20 }}</span>\r\n            </div>\r\n        </ng-template>\r\n    </td-data-table>\r\n    <div class=\"md-padding\" *ngIf=\"!dataTable.hasData\" layout=\"row\" layout-align=\"center center\">\r\n            <h3>Sem resultados.</h3>\r\n    </div>\r\n    <td-paging-bar #pagingBar [pageSizes]=\"[5]\" [total]=\"total\" (change)=\"change($event)\">\r\n        <span td-paging-bar-label hide-xs>Equipamentos:</span>\r\n        {{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n    </td-paging-bar>\r\n</form>\r\n<div class=\"button\" >\r\n    <button md-raised-button  md-dialog-close color=\"accent\" (click)=\"emitter()\" >Salvar</button>\r\n    <button md-raised-button  md-dialog-close color=\"accent\" >Cancelar</button>\r\n</div>"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over  cardWidth=\"75\"  >\r\n        <md-card>    \r\n                <md-card-title>{{equipment.name}}</md-card-title>\r\n                <md-divider></md-divider>\r\n                <md-list>\r\n                    <md-list-item>\r\n                        <md-icon mdTooltip=\"Equipamento\" md-list-avatar>bug_report</md-icon>\r\n                        <h1 md-line >Equipamento: {{equipment.name}}</h1>\r\n                    </md-list-item>\r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item>\r\n                        <md-icon md-list-avatar mdTooltip=\"Localização\">location_on</md-icon>\r\n                        <h1 md-line>Localização: {{equipment?.location?.codLocation}}</h1>\r\n                    </md-list-item>\r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item>\r\n                        <md-icon md-list-avatar mdTooltip=\"Descrição\">description</md-icon>\r\n                        <h1 md-line>Descrição: {{equipment.description}}</h1>\r\n                    </md-list-item>\r\n                </md-list> \r\n                <md-divider></md-divider>\r\n                     <md-list>\r\n                        <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n                            <td-search-box [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Procurar sub equipamento por nome ou descrição do equipamento\" (searchDebounce)=\"search(textSearch.value)\" flex>\r\n                            </td-search-box>\r\n                        </div>\r\n                        <md-list-item *ngIf=\"total == 0\">\r\n                            <md-icon md-list-icon>hourglass_empty</md-icon>\r\n                            <h4 md-line>Sem resultados</h4>\r\n                        </md-list-item> \r\n                        <md-list-item *ngFor=\"let subEquipment of subEquipments.content\">\r\n                            <md-icon mdTooltip=\"Sub Equipamento\" md-list-icon>android</md-icon> \r\n                            <h4 md-line>Sub Equipamento: {{subEquipment?.name}}</h4>\r\n                            <p md-line> descrição: {{subEquipment?.description }} </p>                                \r\n                            <button md-button mdTooltip=\"Editar\" class=\"button\" [routerLink]=\"['/equipment-edit', subEquipment.id]\" class=\"text-upper\"><md-icon >edit</md-icon></button> \r\n                        </md-list-item>\r\n                    </md-list>\r\n                    <td-paging-bar #pagingBar [firstLast]=\"true\" \r\n                            [pageSizeAll]=\"false\" [pageSizes]=\"[5,10,20]\"\r\n                    pageLinkCount=\"5\" [initialPage]=\"1\" [pageSize]=\"5\" [total]=\"total\" (change)=\"change($event)\">\r\n                        {{pagingBar.range}} \r\n                        <span hide-xs>\r\n                            of {{pagingBar.total}}\r\n                        </span>\r\n                    </td-paging-bar>                       \r\n                <md-card-actions class=\"button\" >\r\n                    <button md-raised-button class=\"button\" color=\"accent\" [routerLink]=\"['/equipment-edit', equipment.id]\" class=\"text-upper\">Editar</button> \r\n                    <button md-raised-button class=\"button\" color=\"accent\" (click)=\"backClick()\" class=\"text-upper\">Voltar</button>\r\n                </md-card-actions>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Equipamento\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <form #myform=\"ngForm\" class=\"example-form\">\r\n                <md-input-container  *ngIf=\"equipment.id\" class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" disabled [value]=\"equipment?.id\">\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td> \r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #equipmentName maxlength=\"50\" name =\"name\" [(ngModel)]=\"equipment.name\" mdInput placeholder=\"Nome do equipamento\">\r\n                                <md-hint align=\"end\">{{equipmentName.value.length}} / 50</md-hint>\r\n                                <md-error>Este campo é obrigatório</md-error>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <textarea  required #equipmentDescription maxlength=\"144\" name =\"description\" [(ngModel)]=\"equipment.description\" mdInput placeholder=\"Descrição\"></textarea>\r\n                                <md-hint align=\"end\">{{equipmentDescription.value.length}} / 144</md-hint>\r\n                                <md-error>Este campo é obrigatório</md-error>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>   \r\n                <br>\r\n                <table class=\"select\">\r\n                    <tr layout=\"row\">\r\n                        <md-input-container class=\"select\" required (click)=\"dialogSelectLocation()\">                                \r\n                            <input required mdInput readonly name=\"location\" [(ngModel)]=\"fullCodLocation\" placeholder=\"Selecionar localização\">                                                                                                                                                                                                         \r\n                            <md-error>Este campo é obrigatório</md-error>\r\n                        </md-input-container>\r\n                        <button md-icon-button *ngIf=\"equipment.location\" (click)=\"clearLocation()\" >\r\n                            <md-icon>cancel</md-icon>\r\n                        </button>                                \r\n                        <div>\r\n                            <button md-raised-button color=\"accent\" (click)=\"dialogSelectLocation()\">Selecionar</button>\r\n                        </div>\r\n                    </tr>\r\n                </table>\r\n                <br> \r\n                 <table class=\"selectFile\" *ngIf=\"equipment.id\">\r\n                    <tr layout=\"row\">\r\n                        <md-input-container tdFileDrop\r\n                                            (fileDrop)=\"file = $event\"\r\n                                            (click)=\"fileInput.inputElement.click()\"\r\n                                            (keyup.enter)=\"fileInput.inputElement.click()\"\r\n                                            class=\"select\"\r\n                                            flex>\r\n                            <input mdInput\r\n                                placeholder=\"Selecione ou araste o arquivo\"\r\n                                [value]=\"file ? file?.name : equipment?.filePath \"\r\n                                [disabled]=\"disabled\"\r\n                                readonly/>\r\n                        </md-input-container>\r\n                        <button md-icon-button *ngIf=\"file || equipment.filePath\" (click)=\"clearFile()\" (keyup.enter)=\"clearFile()\">\r\n                            <md-icon>cancel</md-icon>\r\n                        </button>\r\n                        <div>\r\n                            <td-file-input color=\"accent\"  accept=\".pdf\" #fileInput name=\"file\" [(ngModel)]=\"file\"  [multiple]=\"false\" [disabled]=\"disabled\">\r\n                                <md-icon>attach_file</md-icon>\r\n                                <span >Selecionar...</span>\r\n                            </td-file-input>\r\n                        </div>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table class=\"selectMain\">\r\n                    <tr>\r\n                        <md-checkbox class=\"example-margin\" [checked]=\"equipment.equipment != null\" #checkBox >Associar equipamento principal</md-checkbox>\r\n                        <br><br><br>\r\n                        <div layout=\"row\" *ngIf=\"checkBox.checked\" class=\"comboBox\">\r\n                            <md-input-container class=\"selectMain\" required (click)=\"dialogSelectMainEquipment()\">                                \r\n                                <input required mdInput readonly name=\"mainEquipment\" [(ngModel)]=\"fullNameMainEquipment\" placeholder=\"Selecionar equipamento principal\">                                                                                                                                                                                                                                                                                                          \r\n                                <md-error>Este campo é obrigatório</md-error>\r\n                            </md-input-container>\r\n                            <button md-icon-button *ngIf=\"equipment.equipment\" (click)=\"clearMainEquipment()\" >\r\n                                <md-icon>cancel</md-icon>\r\n                            </button>                                \r\n                            <div>\r\n                                <button md-raised-button color=\"accent\" (click)=\"dialogSelectMainEquipment()\">Selecionar</button>\r\n                            </div>\r\n                        </div>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <md-tab-group *ngIf=\"equipment.id\">\r\n                    <md-tab label=\"Sub equipamentos\">\r\n                        <md-list>\r\n                            <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n                                <td-search-box [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Procurar sub equipamento por nome ou descrição do equipamento\" (searchDebounce)=\"search(textSearch.value)\" flex>\r\n                                </td-search-box>\r\n                            </div>\r\n                            <md-list-item *ngIf=\"total == 0\">\r\n                                <md-icon md-list-icon>hourglass_empty</md-icon>\r\n                                <h4 md-line>Sem resultados</h4>\r\n                            </md-list-item> \r\n                            <md-list-item *ngFor=\"let subEquipment of subEquipments.content\">\r\n                                <md-icon mdTooltip=\"Sub Equipamento\" md-list-icon>android</md-icon> \r\n                                <h4 md-line>Sub Equipamento: {{subEquipment?.name}}</h4>\r\n                                <p md-line> Descrição: {{subEquipment?.description }} </p>                                \r\n                                <button *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" md-icon-button mdTooltip=\"Excluir\" class=\"button\" (click)=\"openConfirmDelete(subEquipment)\" class=\"text-upper\"><md-icon md-list-avatar>delete</md-icon></button> \r\n                                 <a md-icon-button mdTooltip=\"Editar\" class=\"button\" [routerLink]=\"['/equipment-edit', subEquipment.id]\"class=\"text-upper\"><md-icon md-list-avatar>edit</md-icon></a>\r\n                                <button md-icon-button mdTooltip=\"Detalhar\" class=\"button\" [routerLink]=\"['/equipment-detail', subEquipment.id]\" class=\"text-upper\"><md-icon md-list-avatar>details</md-icon></button>  \r\n                            </md-list-item>\r\n                         </md-list>\r\n                         <td-paging-bar #pagingBar [firstLast]=\"true\" \r\n                                    [pageSizeAll]=\"false\" [pageSizes]=\"[5,10,20]\"\r\n                            pageLinkCount=\"5\" [initialPage]=\"1\" [pageSize]=\"5\" [total]=\"total\" (change)=\"change($event)\">\r\n                                {{pagingBar.range}} \r\n                            <span hide-xs>\r\n                                of {{pagingBar.total}}\r\n                            </span>\r\n                        </td-paging-bar>\r\n                    </md-tab>\r\n                </md-tab-group>\r\n                <br><br>\r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"accent\" type=\"submit\"class=\"button\" [disabled]=\"myform.form.invalid\" (click)=\"saveEquipment(equipment)\" >Salvar</button>\r\n                    <button md-raised-button  color=\"accent\" routerLink=\"/equipment\" [queryParams]=\"{page:1}\" class=\"button\">Cancelar</button>\r\n                </div>\r\n            </form>\r\n            \r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Lista de Equipamentos\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n                <td-search-box [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Procurar por nome, descrição ou código localizador\" (searchDebounce)=\"search(textSearch.value)\" flex>\r\n                </td-search-box>\r\n            </div>\r\n            <md-divider></md-divider>\r\n            <table td-data-table #dataTable>\r\n                <th td-data-table-column\r\n                     [name]=\"column.name\"\r\n                     [active]=\"sortBy == column.name\"\r\n                     [sortable]=\"column.sortable\"\r\n                     [sortOrder]=\"order\"\r\n                     (sortChange)=\"sortEvent($event)\"\r\n                    *ngFor=\"let column of columns\">\r\n                    {{column.label}}\r\n                </th>\r\n                <tr td-data-table-row *ngFor=\"let equipment of equipments.content\">\r\n                    <td td-data-table-cell>\r\n                      <span>\r\n                        {{equipment?.name | truncate:20}}\r\n                     </span>\r\n                    </td>\r\n                    <td td-data-table-cell>\r\n                      <span>  \r\n                        {{equipment?.description | truncate:20}} \r\n                     </span>\r\n                    </td>\r\n                    <td td-data-table-cell *ngIf=\"equipment.location == null\">\r\n                        <span>  \r\n                            - \r\n                        </span>\r\n                    </td>\r\n                    <td td-data-table-cell *ngIf=\"equipment.location != null\">\r\n                      <span>  \r\n                        {{equipment?.location?.codLocation | truncate:15}}\r\n                     </span>\r\n                    </td>\r\n                    <td>                        \r\n                        <button md-icon-button mdTooltip=\"Remover\"  *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" (click)=\"openConfirm(equipment)\"><md-icon md-list-avatar>delete</md-icon></button>\r\n                        <button md-icon-button mdTooltip=\"Editar\"  [routerLink]=\"['/equipment-edit', equipment.id]\"><md-icon md-list-avatar>edit</md-icon></button>       \r\n                        <button md-icon-button mdTooltip=\"Detalhar\" [routerLink]=\"['/equipment-detail', equipment.id]\" ><md-icon md-list-avatar>details</md-icon></button>\r\n                        <button *ngIf=\"equipment?.filePath != null\" md-icon-button (click)=\"downloadFile(equipment)\" ><md-icon md-list-avatar mdTooltip=\"Manual download\">cloud_download</md-icon></button>\r\n                    </td>\r\n                </tr>\r\n                <div class=\"Empty\" *ngIf=\"!total\" layout-align=\"center center\">\r\n                    <h3 class=\"Empty\">Sem resultados.</h3>\r\n                </div>\r\n            </table>\r\n             <td-paging-bar #pagingBar [firstLast]=\"true\" \r\n                         [pageSizeAll]=\"false\" [pageSizes]=\"[5,10,20]\"\r\n                pageLinkCount=\"5\" [initialPage]=\"1\" [pageSize]=\"5\" [total]=\"total\" (change)=\"change($event)\">\r\n                    {{pagingBar.range}} \r\n                <span hide-xs>\r\n                    of {{pagingBar.total}}\r\n                </span>\r\n            </td-paging-bar>\r\n          <a md-fab td-sidenav-content color=\"accent\" [routerLink]=\"['/equipment-new']\" class=\"buttonAdd\" > \r\n              <md-icon mdTooltip=\"Novo\" >add</md-icon>\r\n          </a>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>\r\n"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<form>\n    <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\n        <td-search-box  [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" \n                        placeholder=\"Procurar por Código localizador ou Nome completo do responsável\" \n                        (searchDebounce)=\"search(textSearch.value)\" flex>\n        </td-search-box>\n    </div>\n    <md-divider></md-divider>\n    <td-data-table\n        #dataTable\n        [data]=\"mainLocations.content\"\n        [columns]=\"columns\"\n        [selectable]=\"true\"\n        [clickable]=\"false\"\n        [multiple]=\"false\"\n        [sortable]=\"true\"\n        (rowSelect)=\"rowSelect($event)\"\n        (sortChange)=\"sortEvent($event)\">\n        <ng-template tdDataTableTemplate=\"codLocation\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\n            <div layout=\"row\">\n                <span flex>{{value | truncate:20 }} </span>\n            </div>\n        </ng-template>\n        <ng-template tdDataTableTemplate=\"responsible.name\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\n            <div layout=\"row\">\n                <span flex>{{value | truncate:15 }}</span>\n            </div>\n        </ng-template>\n        <ng-template tdDataTableTemplate=\"responsible.lastName\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\n            <div layout=\"row\">\n                <span flex>{{value | truncate:15 }}</span>\n            </div>\n        </ng-template>\n    </td-data-table>\n    <div class=\"md-padding\" *ngIf=\"!dataTable.hasData\" layout=\"row\" layout-align=\"center center\">\n            <h3>Sem resultados.</h3>\n    </div>\n    <td-paging-bar #pagingBar [pageSizes]=\"[5]\" [total]=\"total\" (change)=\"change($event)\">\n        <span td-paging-bar-label hide-xs>Localizações:</span>\n        {{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\n    </td-paging-bar>\n</form>\n<div class=\"button\" >\n    <button md-raised-button  md-dialog-close color=\"accent\" (click)=\"emitter()\" >Salvar</button>\n    <button md-raised-button  md-dialog-close color=\"accent\" >Cancelar</button>\n</div>"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over  cardWidth=\"75\"  >\r\n        <md-card>    \r\n                <md-card-title>{{location.codLocation}}</md-card-title>\r\n                <md-divider></md-divider>\r\n                <md-list>\r\n                    <md-list-item>\r\n                        <md-icon mdTooltip=\"Localização\" md-list-avatar>location_on</md-icon>\r\n                        <h1 md-line >Código localizador: {{location.codLocation}}</h1>\r\n                    </md-list-item>\r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item>\r\n                        <md-icon mdTooltip=\"Responsável\" md-list-avatar>perm_identity</md-icon>\r\n                        <h1 md-line>Responsável: {{location?.responsible?.name}} {{location?.responsible?.lastName}}</h1>\r\n                        <p md-line>{{location?.responsible?.email}}<p>\r\n                    </md-list-item>\r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item *ngIf=\"location.viceResponsible != null\">\r\n                        <md-icon mdTooltip=\"Vice Responsável\" md-list-avatar>person_outline</md-icon>\r\n                        <h1 md-line>Vice Responsável: {{location?.viceResponsible?.name}} {{location?.viceResponsible?.lastName}}</h1>\r\n                        <p md-line>{{location?.viceResponsible?.email}}<p>\r\n                    </md-list-item>\r\n                    </md-list> \r\n                    <md-list>\r\n                    <md-divider></md-divider>\r\n                    <md-list>\r\n                        <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n                            <td-search-box [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Procurar sub localização por código localizador ou nome completo do responsável\" (searchDebounce)=\"search(textSearch.value)\" flex>\r\n                            </td-search-box>\r\n                        </div>\r\n                        <md-list-item *ngIf=\"total == 0\">\r\n                            <md-icon md-list-icon>hourglass_empty</md-icon>\r\n                            <h4 md-line>Sem resultados</h4>\r\n                        </md-list-item> \r\n                        <md-list-item *ngFor=\"let subLocation of subLocations.content\">\r\n                            <md-icon mdTooltip=\"Sub Localização\" md-list-icon>location_on</md-icon> \r\n                            <h4 md-line>Sub Localização: {{subLocation?.codLocation}}</h4>\r\n                            <p md-line> Reponsável: {{subLocation?.responsible?.name }} {{ subLocation?.responsible?.lastName }} </p>                                \r\n                            <button md-button mdTooltip=\"Editar\" class=\"button\" [routerLink]=\"['/location-edit', subLocation.id]\" class=\"text-upper\"><md-icon >edit</md-icon></button> \r\n                        </md-list-item>\r\n                    </md-list>\r\n                    <td-paging-bar *ngIf=\"total != 0\" #pagingBar [firstLast]=\"true\" \r\n                            [pageSizeAll]=\"false\" [pageSizes]=\"[5,10,20]\"\r\n                    pageLinkCount=\"5\" [initialPage]=\"1\" [pageSize]=\"5\" [total]=\"total\" (change)=\"change($event)\">\r\n                        {{pagingBar.range}} \r\n                    <span hide-xs>\r\n                        of {{pagingBar.total}}\r\n                    </span>\r\n                </td-paging-bar>\r\n                </md-list>                        \r\n                <md-divider></md-divider>\r\n                <md-card-actions class=\"button\" >\r\n                    <button md-raised-button class=\"button\" color=\"accent\" [routerLink]=\"['/location-edit', location.id]\" class=\"text-upper\">Editar</button> \r\n                    <button md-raised-button class=\"button\" color=\"accent\" routerLink=\"/location\" [queryParams]=\"{page:1}\" class=\"text-upper\">Cancelar</button>\r\n                </md-card-actions>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav> "

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Localização\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <form #myform=\"ngForm\" class=\"example-form\" >\r\n                <md-input-container  *ngIf=\"location.id\" class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" disabled [value]=\"location?.id\">\r\n                </md-input-container>\r\n\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #codLocation maxlength=\"50\" name =\"codLocation\" [(ngModel)]=\"location.codLocation\" mdInput placeholder=\"Código localizador\">\r\n                                <md-hint align=\"end\">{{codLocation.value.length}} / 50</md-hint>\r\n                                <md-error>Este campo é obrigatório</md-error>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table> \r\n                <br>\r\n                <table class=\"select\">\r\n                    <tr layout=\"row\">\r\n                        <md-input-container  class=\"select\" (click)=\"dialogSelectResponsible()\">                                \r\n                            <input required name=\"fullNameResponsible\" [(ngModel)]=\"fullNameResponsible\" mdInput readonly placeholder=\"Selecionar responsável\">                                                                                               \r\n                            <md-error>Este campo é obrigatório</md-error>\r\n                        </md-input-container>\r\n                        <button md-icon-button *ngIf=\"fullNameResponsible\" (click)=\"clearResponsible()\" >\r\n                            <md-icon>cancel</md-icon>\r\n                        </button>             \r\n                        <div>\r\n                            <button md-raised-button color=\"accent\" (click)=\"dialogSelectResponsible()\">Selecionar</button>       \r\n                        </div>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table class=\"select\">\r\n                    <tr layout=\"row\">\r\n                        <md-input-container class=\"select\" (click)=\"dialogSelectViceResponsible()\">                                \r\n                            <input mdInput readonly name=\"fullNameViceResponsible\" [(ngModel)]=\"fullNameViceResponsible\" placeholder=\"Selecionar vice responsável\">                                                                                                     \r\n                        </md-input-container>\r\n                        <button md-icon-button *ngIf=\"fullNameViceResponsible\" (click)=\"clearViceResponsible()\" >\r\n                            <md-icon>cancel</md-icon>\r\n                        </button>                                \r\n                        <div>\r\n                            <button md-raised-button color=\"accent\" (click)=\"dialogSelectViceResponsible()\">Selecionar</button>\r\n                        </div>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <table class=\"select\" >\r\n                    <tr>\r\n                        <md-checkbox class=\"example-margin\" [checked]=\"location.location != null\" #checkBox >Associar localização principal</md-checkbox>\r\n                        <br><br><br>                         \r\n                        <div layout=\"row\" *ngIf=\"checkBox.checked\" class=\"comboBox\">                            \r\n                            <md-input-container  class=\"select\" (click)=\"dialogSelectMainLocation()\">                                \r\n                                <input required mdInput readonly name=\"location\" [(ngModel)]=\"fullCodLocation\" placeholder=\"Selecionar localização principal\">                                                                                                     \r\n                                <md-error>Este campo é obrigatório</md-error>\r\n                            </md-input-container>\r\n                            <button md-icon-button *ngIf=\"location.location\" (click)=\"clearMainLocation()\" >\r\n                                <md-icon>cancel</md-icon>\r\n                            </button>                                                        \r\n                            <div>\r\n                                <button md-raised-button color=\"accent\" (click)=\"dialogSelectMainLocation()\">Selecionar</button>\r\n                            </div>\r\n                        </div>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <md-tab-group *ngIf=\"location.id\">\r\n                    <md-tab label=\"Sub Localizações\">\r\n                        <md-list>\r\n                            <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n                                <td-search-box [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Procurar sub localização por código localizador ou nome completo do responsável\" (searchDebounce)=\"search(textSearch.value)\" flex>\r\n                                </td-search-box>\r\n                            </div>\r\n                            <md-list-item *ngIf=\"total == 0\">\r\n                                <md-icon md-list-icon>hourglass_empty</md-icon>\r\n                                <h4 md-line>Sem resultados</h4>\r\n                            </md-list-item> \r\n                            <md-list-item *ngFor=\"let subLocation of subLocations.content\">\r\n                                <md-icon mdTooltip=\"Sub Localização\" md-list-icon>location_on</md-icon> \r\n                                <h4 md-line>Sub Localização: {{subLocation?.codLocation}}</h4>\r\n                                <p md-line> Reponsável: {{subLocation?.responsible?.name }} {{ subLocation?.responsible?.lastName }} </p>                                \r\n                                <button *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" md-icon-button mdTooltip=\"Excluir\" class=\"button\" (click)=\"openConfirmDelete(subLocation)\" class=\"text-upper\"><md-icon md-list-avatar>delete</md-icon></button> \r\n                                 <a md-icon-button mdTooltip=\"Editar\" class=\"button\" [routerLink]=\"['/location-edit', subLocation.id]\" class=\"text-upper\"><md-icon md-list-avatar>edit</md-icon></a>\r\n                                <button md-icon-button mdTooltip=\"Detalhar\" class=\"button\" [routerLink]=\"['/location-detail', subLocation.id]\" class=\"text-upper\"><md-icon md-list-avatar>details</md-icon></button>  \r\n                            </md-list-item>\r\n                         </md-list>\r\n                         <td-paging-bar #pagingBar [firstLast]=\"true\" \r\n                                    [pageSizeAll]=\"false\" [pageSizes]=\"[5,10,20]\"\r\n                            pageLinkCount=\"5\" [initialPage]=\"1\" [pageSize]=\"5\" [total]=\"total\" (change)=\"change($event)\">\r\n                                {{pagingBar.range}} \r\n                            <span hide-xs>\r\n                                of {{pagingBar.total}}\r\n                            </span>\r\n                        </td-paging-bar>\r\n                    </md-tab> \r\n                </md-tab-group>\r\n                <br><br>\r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"accent\" type=\"submit\"class=\"button\" [disabled]=\"myform.form.invalid\" (click)=\"saveLocation($event)\" >Salvar</button>\r\n                    <button md-raised-button  color=\"accent\" routerLink=\"/location\" [queryParams]=\"{page:1}\" class=\"button\">Cancelar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Lista de Localizações\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n                <td-search-box [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Procurar por código localizador ou nome completo do responsável\" (searchDebounce)=\"search(textSearch.value)\" flex>\r\n                </td-search-box>\r\n            </div>\r\n            <md-divider></md-divider>\r\n            <table td-data-table #dataTable>\r\n                <th td-data-table-column\r\n                     [name]=\"column.name\"\r\n                     [active]=\"sortBy == column.name\"\r\n                     [sortable]=\"column.sortable\"\r\n                     [sortOrder]=\"order\"\r\n                     (sortChange)=\"sortEvent($event)\"\r\n                    *ngFor=\"let column of columns\">\r\n                    {{column.label}}\r\n                </th>\r\n                <tr td-data-table-row *ngFor=\"let location of locations.content\">\r\n                    <td td-data-table-cell>\r\n                      <span>\r\n                        {{location?.codLocation | truncate:20}}\r\n                     </span>\r\n                    </td>\r\n                    <td td-data-table-cell>\r\n                      <span>  \r\n                        {{location.responsible.name | truncate:15}} {{location.responsible.lastName | truncate:15}} \r\n                     </span>\r\n                    </td>\r\n                    <td>\r\n                    </td>\r\n                    <td td-data-table-row class=\"buttons\" layout-align=\"left left\">\r\n                        <button md-icon-button mdTooltip=\"Remover\"  *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" (click)=\"openConfirm(location)\"><md-icon md-list-avatar>delete</md-icon></button>\r\n                        <button md-icon-button mdTooltip=\"Editar\"  [routerLink]=\"['/location-edit', location.id]\"><md-icon md-list-avatar>edit</md-icon></button>       \r\n                        <button md-icon-button mdTooltip=\"Detalhar\" [routerLink]=\"['/location-detail', location.id]\" ><md-icon md-list-avatar>details</md-icon></button>\r\n                    </td>\r\n                </tr>\r\n                <div class=\"Empty\" *ngIf=\"!total\" layout-align=\"center center\">\r\n                    <h3 class=\"Empty\">Sem resultados.</h3>\r\n                </div>\r\n            </table>\r\n             <td-paging-bar #pagingBar [firstLast]=\"true\" \r\n                         [pageSizeAll]=\"false\" [pageSizes]=\"[5,10,20]\"\r\n                pageLinkCount=\"5\" [initialPage]=\"1\" [pageSize]=\"5\" [total]=\"total\" (change)=\"change($event)\">\r\n                    {{pagingBar.range}} \r\n                <span hide-xs>\r\n                    of {{pagingBar.total}}\r\n                </span>\r\n            </td-paging-bar>\r\n          <a md-fab td-sidenav-content color=\"accent\" [routerLink]=\"['/location-new']\" class=\"buttonAdd\" > \r\n              <md-icon mdTooltip=\"Novo\" >add</md-icon>\r\n          </a>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<form>\n    <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\n        <td-search-box  [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" \n                        placeholder=\"Procurar por nome, sobrenome ou email\" \n                        (searchDebounce)=\"search(textSearch.value)\" flex>\n        </td-search-box>\n    </div>\n    <md-divider></md-divider>\n    <td-data-table\n        #dataTable\n        [data]=\"users.content\"\n        [columns]=\"columns\"\n        [selectable]=\"true\"\n        [clickable]=\"false\"\n        [multiple]=\"false\"\n        [sortable]=\"true\"\n        (rowSelect)=\"rowSelect($event)\"\n        (sortChange)=\"sortEvent($event)\">\n        <ng-template tdDataTableTemplate=\"name\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\n            <div layout=\"row\">\n                <span flex>{{value | truncate:20 }} </span>\n            </div>\n        </ng-template>\n        <ng-template tdDataTableTemplate=\"lastName\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\n            <div layout=\"row\">\n                <span flex>{{value | truncate:15 }}</span>\n            </div>\n        </ng-template>\n        <ng-template tdDataTableTemplate=\"email\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\n            <div layout=\"row\">\n                <span flex>{{value | truncate:15 }}</span>\n            </div>\n        </ng-template>\n    </td-data-table>\n    <div class=\"md-padding\" *ngIf=\"!dataTable.hasData\" layout=\"row\" layout-align=\"center center\">\n            <h3>Sem resultados.</h3>\n    </div>\n    <td-paging-bar #pagingBar [pageSizes]=\"[5]\" [total]=\"total\" (change)=\"change($event)\">\n        <span td-paging-bar-label hide-xs>Usuários:</span>\n        {{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\n    </td-paging-bar>\n</form>\n<div class=\"button\" >\n    <button md-raised-button  md-dialog-close color=\"accent\" (click)=\"emitter()\" >Salvar</button>\n    <button md-raised-button  md-dialog-close color=\"accent\" >Cancelar</button>\n</div>"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over  cardWidth=\"75\"  >\r\n        <md-card>    \r\n                <md-card-title>{{user.name}} {{user.lastName}}</md-card-title>\r\n                <md-card-subtitle>{{user.email}}</md-card-subtitle>\r\n                <md-divider></md-divider>\r\n                <md-list> \r\n                    <md-list-item>\r\n                        <md-icon mdTooltip=\"Nome completo\" md-list-avatar>account_box</md-icon>\r\n                        <h1 md-line >Nome completo: {{user.name}} {{user.lastName}}</h1>\r\n                    </md-list-item>\r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item>\r\n                        <md-icon mdTooltip=\"Email\" md-list-avatar>email</md-icon>\r\n                        <h1 md-line>Email: {{user.email}}</h1>\r\n                    </md-list-item>\r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item>\r\n                        <md-icon mdTooltip=\"Sexo\" md-list-avatar>perm_identity</md-icon>\r\n                        <h1 md-line>Sexo: {{user.sex}}</h1>\r\n                    </md-list-item> \r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item *ngIf=\"user.permission == 'ROLE_ADMIN'\">\r\n                        <md-icon mdTooltip=\"Permissão\" md-list-avatar>security</md-icon>\r\n                        <h1 md-line>Permissão: Administrador</h1>\r\n                    </md-list-item> \r\n                    <md-list-item *ngIf=\"user.permission == 'ROLE_USER'\">\r\n                        <md-icon mdTooltip=\"Permissão\" md-list-avatar>security</md-icon>\r\n                        <h1 md-line>Permissão: Usuário</h1>\r\n                    </md-list-item> \r\n                    <md-divider md-inset></md-divider>\r\n                    <md-list-item>\r\n                        <md-icon mdTooltip=\"Status\" md-list-avatar>power_settings_new</md-icon>\r\n                        <h1 md-line *ngIf=\"user?.active\" >Status: Ativado</h1>\r\n                        <h1 md-line *ngIf=\"!user?.active\" >Status: Desativado</h1>\r\n                    </md-list-item>\r\n                </md-list>\r\n                <md-divider></md-divider>\r\n                <md-card-actions class=\"button\" >\r\n                    <button md-raised-button class=\"button\" color=\"accent\" *ngIf=\"( (user.id != 1) && (userCurrent?.permission == 'ROLE_ADMIN') )\" [routerLink]=\"['/user-edit', user.id]\" class=\"text-upper\">Editar</button> \r\n                    <button md-raised-button class=\"button\" color=\"accent\" routerLink=\"/user\" [queryParams]=\"{page:1}\" class=\"text-upper\">Voltar</button>\r\n                </md-card-actions>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Usuário\"  cardWidth=\"75\"  >\r\n        <md-card>   \r\n            <form #myform=\"ngForm\" class=\"example-form\">\r\n                <md-input-container *ngIf=\"user.id\" class=\"example-full-width\">\r\n                    <input mdInput placeholder=\"ID\" disabled  [value]=\"user?.id\">\r\n                </md-input-container>\r\n                <table class=\"example-full-width\" cellspacing=\"0\">\r\n                    <tr>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #userName maxlength=\"50\" tdAutoTrim name =\"name\" [(ngModel)]=\"user.name\" mdInput placeholder=\"Nome\">\r\n                                <md-hint align=\"end\">{{userName.value.length}} / 50</md-hint>\r\n                                <md-error>Este campo é obrigatório</md-error>\r\n                            </md-input-container>\r\n                        </td>\r\n                        <td>\r\n                            <md-input-container class=\"example-full-width\">\r\n                                <input required #userLastName maxlength=\"50\" name =\"lastName\" [(ngModel)]=\"user.lastName\" mdInput placeholder=\"Sobrenome\">\r\n                                <md-hint align=\"end\">{{userLastName.value.length}} / 50</md-hint>\r\n                                <md-error>Este campo é obrigatório</md-error>\r\n                            </md-input-container>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <table [hidden]=\"user.id\" class=\"example-full-width\" cellspacing=\"0\">\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input [required]=\"!user.id\" #userPassword minlength=\"8\" maxlength=\"50\" #password=\"ngModel\" name =\"password\" [(ngModel)]=\"user.password\"  type =\"password\" mdInput placeholder=\"Senha\">\r\n                            <md-hint align=\"end\">{{userPassword.value.length}} / 50</md-hint>\r\n                            <md-error>A senha deve possuir no mínimo 8 caracteres</md-error>\r\n                            <md-error *ngIf=\"myform.submitted\">Este campo é obrigatório</md-error>\r\n                        </md-input-container>\r\n                    </td>\r\n                </table> \r\n                <table [hidden]=\"user.id\" class=\"example-full-width\" cellspacing=\"0\">\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input [required]=\"!user.id\"  #userConfirmPassword minlength=\"8\" maxlength=\"50\" #confirmPassword=\"ngModel\" name =\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\"  type =\"password\" mdInput placeholder=\"Confirme a senha\">\r\n                            <md-hint align=\"end\">{{userConfirmPassword.value.length}} / 50</md-hint>\r\n                            <md-error>Este campo é obrigatório</md-error>\r\n                        </md-input-container>\r\n                        <md-hint>\r\n                            <span *ngIf=\"(userConfirmPassword.value != userPassword.value)  && myform.submitted\" class=\"tc-red-600\">\r\n                                 <span [hidden]=\"userConfirmPassword.pristine\" >Senhas não conferem</span>\r\n                            </span>\r\n                        </md-hint>\r\n                    </td>\r\n                </table>\r\n                <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n                    <td>\r\n                        <md-input-container class=\"example-full-width\">\r\n                            <input  mdInput \r\n                                    required \r\n                                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                                    maxlength=\"144\" \r\n                                    #email name =\"email\" \r\n                                    [(ngModel)]=\"user.email\" \r\n                                    type =\"email\"\r\n                                    placeholder=\"Email\">\r\n                            <md-hint align=\"end\">{{email.value.length}} / 144</md-hint>\r\n                            <md-error>Este campo é obrigatório</md-error>\r\n                        </md-input-container>\r\n                    </td>\r\n                </table> \r\n                <br>\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            <md-select required name =\"permission\" [(ngModel)]=\"user.permission\" placeholder=\"Permissão\">\r\n                                <md-option *ngFor=\"let role of roles\" [value]=\"role.value\">\r\n                                    {{ role.viewValue }}\r\n                                </md-option>\r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br><br>\r\n\r\n                <table >\r\n                    <tr>\r\n                        <td>\r\n                            <md-select required name =\"sex\" [(ngModel)]=\"user.sex\" placeholder=\"Sexo\">\r\n                                <md-option *ngFor=\"let sex of sexs\" [value]=\"sex.value\">\r\n                                    {{ sex.viewValue }}\r\n                                </md-option>                                \r\n                            </md-select>\r\n                        </td> \r\n                    </tr>\r\n                </table>\r\n                <br><br>\r\n                <td-expansion-panel *ngIf=\"user.id\" [expand]=\"false\">\r\n                <ng-template td-expansion-panel-label>\r\n                    <md-icon>security</md-icon>\r\n                    <span>Alterar senha</span>\r\n                </ng-template>\r\n\r\n                <form #passwordForm=\"ngForm\"  class=\"md-padding\" layout=\"column\">\r\n                    \r\n                    <md-input-container flex>\r\n                         <input mdInput [required]=\"user.id\" #newPassword minlength=\"8\" maxlength=\"50\" mdInput tdAutoTrim type=\"password\" name =\"password\" [(ngModel)]=\"user.password\" placeholder=\"Nova senha\"/>\r\n                         <md-error>A senha deve possuir no mínimo 8 caracteres</md-error>                         \r\n                         <md-error *ngIf=\"passwordForm.submitted\" >Este campo é obrigatório</md-error>\r\n                    </md-input-container>\r\n                    <br><br>\r\n                    <md-input-container flex>\r\n                         <input mdInput [required]=\"user.id\" #confirmNewPassword minlength=\"8\" maxlength=\"50\" mdInput tdAutoTrim type=\"password\" name =\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" placeholder=\"Confirme a senha\"/>\r\n                         <md-error>Este campo é obrigatório</md-error>\r\n                    </md-input-container>\r\n                    <md-hint>\r\n                        <span *ngIf=\"(newPassword.value != confirmNewPassword.value)  && passwordForm.submitted\" class=\"tc-red-600\">\r\n                                <span [hidden]=\"confirmNewPassword.pristine\" >Senhas não conferem</span>\r\n                        </span>\r\n                    </md-hint>\r\n                    <md-divider></md-divider>\r\n                    <div layout=\"row\" layout-margin layout-align=\"end center\">\r\n                        <button md-button [disabled]=\"passwordForm.form.invalid\" color=\"accent\" (click)=\"updatePassword(user)\" class=\"text-upper\">Salvar senha</button>\r\n                    </div>\r\n\r\n                </form>\r\n                </td-expansion-panel>\r\n                <div class=\"inset\">\r\n                    <button md-raised-button  color=\"accent\" type=\"submit\" class=\"button\" [disabled]=\"myform.form.invalid\" (click)=\"insertUser($event)\" >Salvar</button>\r\n                    <button md-raised-button  color=\"accent\" routerLink=\"/user\" [queryParams]=\"{page:1}\" class=\"button\">Cancelar</button>\r\n                </div>\r\n            </form>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav> "

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav> \r\n    <td-layout-card-over cardTitle=\"Lista de usuários\"  cardWidth=\"75\"  >\r\n        <md-card>      \r\n            <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\">\r\n                <td-search-box [alwaysVisible]=\"true\" #textSearch backIcon=\"arrow_back\" class=\"push-right-sm\" placeholder=\"Procurar por nome, sobrenome ou email\" (searchDebounce)=\"search(textSearch.value)\" flex>\r\n                </td-search-box>\r\n            </div>\r\n            <md-divider></md-divider>\r\n            <table td-data-table #dataTable>\r\n                <th td-data-table-column\r\n                     [name]=\"column.name\"\r\n                     [active]=\"sortBy == column.name\"\r\n                     [sortable]=\"column.sortable\"\r\n                     [sortOrder]=\"order\"\r\n                     (sortChange)=\"sortEvent($event)\"\r\n                    *ngFor=\"let column of columns\">\r\n                    {{column.label}}\r\n                </th>\r\n                <tr td-data-table-row *ngFor=\"let user of users.content\">\r\n                    <td td-data-table-cell>\r\n                      <span>\r\n                        {{user.name | truncate:15}}\r\n                     </span>\r\n                    </td> \r\n                    <td td-data-table-cell>\r\n                      <span>  \r\n                        {{user.lastName | truncate:15}} \r\n                     </span>\r\n                    </td>\r\n                    <td td-data-table-cell>\r\n                     <span>\r\n                        {{user.email | truncate:25}}\r\n                     </span>\r\n                    </td>\r\n                    <td td-data-table-row class=\"buttons\" layout-align=\"left left\">\r\n                        <button md-icon-button mdTooltip=\"Status\" *ngIf=\"( (userCurrent?.permission == 'ROLE_ADMIN') && ( user?.id != 1 ) )\" (click)=\"openConfirm($event, user)\" ><md-icon  [ngClass]=\"(user?.active)?'activateButton':'deactivateButton'\" >power_settings_new</md-icon></button>\r\n                        <button md-icon-button mdTooltip=\"Editar\" *ngIf=\"( (userCurrent?.permission == 'ROLE_ADMIN') && ( user?.id != 1 ) )\" [routerLink]=\"['/user-edit', user.id]\"><md-icon md-list-avatar >edit</md-icon></button>\r\n                        <button md-icon-button mdTooltip=\"Detalhar\" [routerLink]=\"['/user-detail', user.id]\" ><md-icon md-list-avatar>details</md-icon></button>\r\n                    </td>\r\n                </tr>\r\n                <div class=\"Empty\" *ngIf=\"!total\" layout-align=\"center center\">\r\n                    <h3 class=\"Empty\">Sem resultados.</h3>\r\n                </div>\r\n            </table>\r\n             <td-paging-bar #pagingBar [firstLast]=\"true\" \r\n                         [pageSizeAll]=\"false\" [pageSizes]=\"[5,10,20]\"\r\n                pageLinkCount=\"5\" [initialPage]=\"1\" [pageSize]=\"5\" [total]=\"total\" (change)=\"change($event)\">\r\n                    {{pagingBar.range}} \r\n                <span hide-xs>\r\n                    of {{pagingBar.total}}\r\n                </span>\r\n            </td-paging-bar>\r\n          <a md-fab td-sidenav-content *ngIf=\"userCurrent?.permission == 'ROLE_ADMIN'\" color=\"accent\" [routerLink]=\"['/user-new']\" class=\"buttonAdd\" > \r\n              <md-icon mdTooltip=\"Novo\" >add</md-icon>\r\n          </a>\r\n     </md-card> \r\n  </td-layout-card-over>\r\n</td-layout-nav>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
    /*-------------------------------------------------------------------
      * 		 					CONSTRUCTOR
      *-------------------------------------------------------------------*/
    /**
     *
     * @param userService
     * @param router
     */
    function AuthService(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        /*-------------------------------------------------------------------
           * 		 					ATTRIBUTES
           *-------------------------------------------------------------------*/
        /**
         *
         */
        this.userCurrent = new __WEBPACK_IMPORTED_MODULE_0__model_User__["a" /* User */]();
        userService.getCurrentUser().subscribe(function (user) {
            _this.userCurrent = user;
        }, function (erro) { return console.log(erro); });
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     * @param route
     * @param state
     */
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_location_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_PageRequest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationConsultLocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LocationConsultLocationComponent = (function () {
    /*-------------------------------------------------------------------
       * 		 					CONSTRUCTOR
       *-------------------------------------------------------------------*/
    function LocationConsultLocationComponent(locationService, activatedRoute, router, mdDialogRef, data) {
        this.locationService = locationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mdDialogRef = mdDialogRef;
        this.data = data;
        /*-------------------------------------------------------------------
           * 		 					ATTRIBUTES
           *-------------------------------------------------------------------*/
        /**
         *
         */
        this.mainLocations = new __WEBPACK_IMPORTED_MODULE_4__model_PageRequest__["a" /* PageRequest */]();
        /**
         *
         */
        this.page = 1;
        /**
         *
         */
        this.size = 5;
        /**
         *
         */
        this.order = "ASC";
        /**
         *
         */
        this.property = "codLocation";
        /**
         *
         */
        this.sortBy = "";
        /**
         *
         */
        this.filter = "";
        /**
        *
        */
        this.columns = [
            {
                name: 'codLocation', label: 'Código localizador', sortable: true
            },
            {
                name: 'responsible.name', label: 'Nome do responsável', sortable: true
            },
            {
                name: 'responsible.lastName', label: 'Sobrenome do responsável', sortable: true
            }
        ];
        this.id = data;
        this.getLocations(this.id);
    }
    /*-------------------------------------------------------------------
     *                           BEHAVIORS
     *-------------------------------------------------------------------*/
    LocationConsultLocationComponent.prototype.getLocations = function (id) {
        var _this = this;
        if (this.filter === '') {
            this.filter = "null";
        }
        if (!id) {
            this.locationService.listLocationsByFilters(this.page - 1, this.size, this.property, this.order, this.filter).subscribe(function (mainLocations) {
                _this.mainLocations = mainLocations;
                _this.total = mainLocations.totalElements;
            }, function (erro) { return console.log(erro); });
        }
        else {
            this.locationService.ListNonAssociatedLocationByFilter(this.page - 1, this.size, this.property, this.order, this.id, this.filter).subscribe(function (mainLocations) {
                _this.mainLocations = mainLocations;
                _this.total = mainLocations.totalElements;
            }, function (erro) { return console.log(erro); });
        }
    };
    /**
     *
     */
    LocationConsultLocationComponent.prototype.rowSelect = function (selectedRow) {
        if (selectedRow != null) {
            this.location = selectedRow.row;
        }
    };
    /**
     *
     */
    LocationConsultLocationComponent.prototype.selectLocation = function () {
        if (this.location != null) {
            this.mdDialogRef.close({ location: this.location });
        }
    };
    /**
     *
     */
    LocationConsultLocationComponent.prototype.emitter = function () {
        this.selectLocation();
    };
    /**
     *
     * @param textSearch
     */
    LocationConsultLocationComponent.prototype.search = function (textSearch) {
        this.filter = textSearch;
        this.page = 1;
        this.getLocations(this.id);
    };
    /**
     *
     * @param event
     */
    LocationConsultLocationComponent.prototype.change = function (event) {
        this.page = event.page.valueOf();
        this.size = event.pageSize.valueOf();
        this.getLocations(this.id);
    };
    /**
     *
     * @param sortEvent
     */
    LocationConsultLocationComponent.prototype.sortEvent = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.order = sortEvent.order == __WEBPACK_IMPORTED_MODULE_3__covalent_core__["q" /* TdDataTableSortingOrder */].Ascending ? 'DESC' : 'ASC';
        this.property = sortEvent.name;
        this.getLocations(this.id);
    };
    return LocationConsultLocationComponent;
}());
LocationConsultLocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_12" /* Component */])({
        selector: 'app-location-consult-location',
        template: __webpack_require__(488),
        styles: [__webpack_require__(296)]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["W" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_location_service__["a" /* LocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["G" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["G" /* MdDialogRef */]) === "function" && _d || Object, Object])
], LocationConsultLocationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=location-consult-location.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
/**
 * MODEL Location
 */
var Location = (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=Location.js.map

/***/ })

},[558]);
//# sourceMappingURL=main.bundle.js.map