webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrer_registrer__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.newCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registrer_registrer__["a" /* RegistrerPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cartão de Visitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-row class="pb-5">\n    <ion-col>\n        <h2>Seja bem vindo</h2>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button (click)="newCard()" col-12>Gerar Novo Cartão</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_validateRegistrer__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_alert__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrerPage = /** @class */ (function () {
    function RegistrerPage(navCtrl, navParams, formBuilder, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alert = alert;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* userModel */]();
        this.title = "MEU CARTÃO";
    }
    RegistrerPage.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)
                ])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)
                ])],
            comercialAdress: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            numberComercial: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)
                ])],
            complementAdress: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)
                ])],
            cep: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(12)
                ])],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)
                ])],
            state: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)
                ])],
            comercialPhone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            celPhone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            photoUrl: [''],
        });
    };
    RegistrerPage.prototype.generate = function () {
        this.formValidate();
        if (!this.msgValid) {
            this.alert.showErrorAlert('Cadastro realizado com sucesso');
        }
    };
    RegistrerPage.prototype.formValidate = function () {
        this.msgValid = __WEBPACK_IMPORTED_MODULE_4__util_validateRegistrer__["a" /* validateRegistrer */].validate(this.formGroup);
    };
    RegistrerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrer',template:/*ion-inline-start:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\pages\registrer\registrer.html"*/'<component-header [title]="title"></component-header>\n\n\n<ion-content padding class="bg">\n\n  <ion-row class="pb-4" text-center>\n    <ion-col>\n      Insira seus dados para gerar seu cartão de visitas.\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]="formGroup" (ngSubmit)="generate()">\n  <ion-row style="align-items: center;">\n    <ion-col class="col-4">\n      <ion-icon name="ios-contact" class="photoIcon"></ion-icon>\n    </ion-col>\n    <ion-col class="col-8">\n      <ion-row style="margin-right: -6px;">\n        <ion-col class="col-12">\n          <ion-label>Nome *</ion-label>\n          <input type=\'text\' formControlName="name" class="col" mask="SSSSSSSSSSSSSSS">\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="msgValid?.v_name != undefined">\n        <ion-col>\n          <ion-row>\n          <ion-col class="col-12"class="bg-warning">\n            <i class="fa fa-exclamation-triangle"></i> \n            {{msgValid?.v_name}}\n          </ion-col>\n        </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style="margin-right: -6px;">\n        <ion-col class="col-12">\n          <ion-label>Sobrenome *</ion-label>\n          <input type=\'text\' formControlName="lastName" class="col" mask="SSSSSSSSSSSSSSS">\n        </ion-col>\n      </ion-row> \n\n      <ion-row *ngIf="msgValid?.v_lastName != undefined">\n        <ion-col>\n          <ion-row>\n          <ion-col class="col-12"class="bg-warning">\n            <i class="fa fa-exclamation-triangle"></i> \n            {{msgValid?.v_lastName}}\n          </ion-col>\n        </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>Usar foto de perfil</ion-label>\n        <ion-checkbox formControlName="photoUrl"></ion-checkbox>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <hr>\n  <ion-row>\n    <ion-col>\n      <ion-label>Endereço Comercial *</ion-label>\n      <input type=\'text\' formControlName="comercialAdress" class="col" mask="wwwwwwwwwwwwwww">\n    </ion-col>\n  </ion-row>  \n\n  <ion-row *ngIf="msgValid?.v_comercialAdress != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_comercialAdress}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="col-6">\n      <ion-label>Número *</ion-label>\n      <input type=\'text\' formControlName="numberComercial" class="col" mask="000000">\n    </ion-col>\n    <ion-col class="col-6">\n      <ion-label>Complemento</ion-label>\n      <input type=\'text\' formControlName="complementAdress" class="col" mask="wwwwwwwwwwwwwww">\n    </ion-col>\n  </ion-row>  \n\n  <ion-row *ngIf="msgValid?.v_numberComercial != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_numberComercial}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="msgValid?.v_complementAdress != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_complementAdress}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="col-6">\n      <ion-label>CEP *</ion-label>\n      <input type=\'text\' mask="00000.000" formControlName="cep" class="col">\n    </ion-col>\n    <ion-col class="col-4">\n      <ion-label>Cidade *</ion-label>\n      <input type=\'text\' formControlName="city" class="col" mask="ttttttttttttttt">\n    </ion-col>\n    <ion-col class="col-2">\n      <ion-label>UF *</ion-label>\n      <input type=\'text\' formControlName="state" class="col" mask="SS">\n    </ion-col>\n  </ion-row>  \n\n  <ion-row *ngIf="msgValid?.v_cep != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_cep}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="msgValid?.v_city != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_city}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="msgValid?.v_state != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_state}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="col-6">\n      <ion-label>Tel. Comercial *</ion-label>\n      <input type=\'text\' mask=\'(00) 000-000000\' formControlName="numberComercial" class="col">\n    </ion-col>\n    <ion-col class="col-6">\n      <ion-label>Tel. Celular</ion-label>\n      <input type=\'text\' mask=\'(00) 000-000000\' formControlName="celPhone" class="col">\n    </ion-col>\n  </ion-row>  \n\n  <ion-row *ngIf="msgValid?.v_numberComercial != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_numberComercial}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="msgValid?.v_celPhone != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12"class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_celPhone}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="col-12">\n      <ion-label>E-mail *</ion-label>\n      <input type=\'text\' formControlName="email" class="col" mask="eeeeeeeeeeeeeeeeeeee">\n    </ion-col>\n  </ion-row>  \n  \n  <ion-row *ngIf="msgValid?.v_email != undefined">\n    <ion-col>\n      <ion-row>\n      <ion-col class="col-12" class="bg-warning">\n        <i class="fa fa-exclamation-triangle"></i> \n        {{msgValid?.v_email}}\n      </ion-col>\n    </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="pt-5">\n    <ion-col class="col-6">\n      * Campos obrigatórios\n    </ion-col>\n    <ion-col class="col-6">\n      <button ion-button type="submit" col-12 class="btnGerar">Gerar</button>\n    </ion-col>\n  </ion-row>\n</form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\pages\registrer\registrer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__util_alert__["a" /* Alert */]])
    ], RegistrerPage);
    return RegistrerPage;
}());

//# sourceMappingURL=registrer.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userModel; });
var userModel = /** @class */ (function () {
    function userModel() {
    }
    return userModel;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Alert = /** @class */ (function () {
    function Alert(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    Alert.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            cssClass: 'alert-default',
            buttons: ['OK']
        });
        alert.present();
        setTimeout(function () {
            alert.dismiss();
        }, 10000);
    };
    Alert.prototype.showErrorAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            cssClass: 'alert-danger',
            buttons: ['OK']
        });
        alert.present();
        setTimeout(function () {
            alert.dismiss();
        }, 10000);
    };
    Alert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], Alert);
    return Alert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_mask__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registrer_registrer__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_alert__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registrer_registrer__["a" /* RegistrerPage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registrer_registrer__["a" /* RegistrerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5_ngx_mask__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__util_alert__["a" /* Alert */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateRegistrer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model__ = __webpack_require__(195);

var validateRegistrer = /** @class */ (function () {
    function validateRegistrer() {
    }
    validateRegistrer.validate = function (data) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* userModel */]();
        if (data.controls.name.errors) {
            if (data.controls.name.errors.required) {
                obj.v_name = "Campo de preenchimento obrigatório";
            }
            else if (data.controls.name.errors.minlength) {
                obj.v_name = "Este campo deve possuir pelo menos 3 caracteres.";
            }
            else if (data.controls.name.errors.maxlength) {
                obj.v_name = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.lastName.errors) {
            if (data.controls.lastName.errors.required) {
                obj.v_lastName = "Campo de preenchimento obrigatório";
            }
            else if (data.controls.lastName.errors.minlength) {
                obj.v_lastName = "Este campo deve possuir pelo menos 3 caracteres.";
            }
            else if (data.controls.lastName.errors.maxlength) {
                obj.v_lastName = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.comercialAdress.errors) {
            if (data.controls.comercialAdress.errors.required) {
                obj.v_comercialAdress = "Campo de preenchimento obrigatório";
            }
            else if (data.controls.comercialAdress.errors.minlength) {
                obj.v_comercialAdress = "Este campo deve possuir pelo menos 3 caracteres.";
            }
            else if (data.controls.comercialAdress.errors.maxlength) {
                obj.v_comercialAdress = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.numberComercial.errors) {
            if (data.controls.numberComercial.errors.required) {
                obj.v_numberComercial = "Campo de preenchimento obrigatório";
            }
            else if (data.controls.numberComercial.errors.minlength) {
                obj.v_numberComercial = "Este campo deve possuir pelo menos 3 caracteres.";
            }
            else if (data.controls.numberComercial.errors.maxlength) {
                obj.v_numberComercial = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.complementAdress.errors) {
            if (data.controls.complementAdress.errors.minlength) {
                obj.v_complementAdress = "Este campo deve possuir pelo menos 3 caracteres.";
            }
            else if (data.controls.complementAdress.errors.maxlength) {
                obj.v_complementAdress = "Este campo não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.cep.errors) {
            if (data.controls.cep.errors.required) {
                obj.v_cep = "Campo Cep preenchimento obrigatório";
            }
            else if (data.controls.cep.errors.minlength) {
                obj.v_cep = "Campo Cep deve possuir pelo menos 8 caracteres.";
            }
            else if (data.controls.cep.errors.maxlength) {
                obj.v_cep = "Campo Cep não deve possuir mais que 12 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.city.errors) {
            if (data.controls.city.errors.required) {
                obj.v_city = "Campo cidade preenchimento obrigatório";
            }
            else if (data.controls.city.errors.minlength) {
                obj.v_city = "Campo cidade deve possuir pelo menos 4 caracteres.";
            }
            else if (data.controls.city.errors.maxlength) {
                obj.v_city = "Campo cidade não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.state.errors) {
            if (data.controls.state.errors.required) {
                obj.v_state = "Campo UF preenchimento obrigatório";
            }
            else if (data.controls.state.errors.minlength) {
                obj.v_state = "Campo UF deve possuir pelo menos 4 caracteres.";
            }
            else if (data.controls.state.errors.maxlength) {
                obj.v_state = "Campo UF não deve possuir mais que 15 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.comercialPhone.errors) {
            if (data.controls.comercialPhone.errors.required) {
                obj.v_comercialPhone = "Campo de preenchimento obrigatório";
            }
            else if (data.controls.comercialPhone.errors.minlength) {
                obj.v_comercialPhone = "Este campo deve possuir pelo menos 10 caracteres.";
            }
            else if (data.controls.comercialPhone.errors.maxlength) {
                obj.v_comercialPhone = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.celPhone.errors) {
            if (data.controls.celPhone.errors.minlength) {
                obj.v_comercialPhone = "Este campo deve possuir pelo menos 10 caracteres.";
            }
            else if (data.controls.celPhone.errors.maxlength) {
                obj.v_comercialPhone = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }
        if (data.controls.email.errors) {
            if (data.controls.email.errors.required) {
                obj.v_email = "Campo de preenchimento obrigatório";
            }
            else if (data.controls.email.errors.minlength) {
                obj.v_email = "Este campo deve possuir pelo menos 3 caracteres.";
            }
            else if (data.controls.email.errors.maxlength) {
                obj.v_email = "Este campo não deve possuir mais que 20 caracteres.";
            }
            obj.valid = true;
        }
        return obj;
    };
    return validateRegistrer;
}());

//# sourceMappingURL=validateRegistrer.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'component-header',template:/*ion-inline-start:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\components\header\header.html"*/'<ion-header>\n  <ion-navbar no-border>\n    <ion-row style="align-items: center;" text-center>\n      <ion-col class="col-9 cssTitle">\n        <h3>{{ title }}</h3>\n      </ion-col>\n      <ion-col class="col-3">\n        <ion-icon name="ios-contact" class="personIcon"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"C:\Users\Aline\Documents\Multiplataforma\RepositorioGit\desafioIonicCadastro\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map