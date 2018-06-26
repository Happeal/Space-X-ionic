webpackJsonp([9],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapsuleListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_capsule_details_capsule__ = __webpack_require__(51);
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
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CapsuleListPage = /** @class */ (function () {
    function CapsuleListPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.capsule = "active";
        this.spacexApi.getAllCapsule().subscribe(function (data) {
            _this.capsules = data;
        });
    }
    CapsuleListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CapsuleListPage');
    };
    CapsuleListPage.prototype.goToCapsule = function (capsule) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_capsule_details_capsule__["a" /* DetailsCapsulePage */], capsule);
    };
    CapsuleListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-capsule-list',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/capsule-list/capsule-list.html"*/'<!--\n  Generated template for the CapsuleListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Capsules</ion-title>\n  </ion-navbar>\n  <div padding>\n      <ion-segment [(ngModel)]="capsule">\n        <ion-segment-button value="active">\n          Active\n        </ion-segment-button>\n        <ion-segment-button value="retired">\n          Retired\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="capsule">\n      <ion-list *ngSwitchCase="\'active\'">\n        <div *ngFor = "let capsule of capsules">\n          <button ion-item *ngIf="capsule.active == true" (click)="goToCapsule(capsule)">\n              <h2>\n                  <div float-left>{{ capsule.name }}</div>\n                  <div float-right>\n                    <ion-badge color ="secondary">Active</ion-badge>\n                  </div>\n                </h2>\n                <br />\n          </button>\n          </div>\n      </ion-list>\n    \n      <ion-list *ngSwitchCase="\'retired\'">\n        <div *ngFor = "let capsule of capsules">\n        <button ion-item *ngIf="capsule.active == false" >\n            <h2>\n                <div float-left>{{ capsule.name }}</div>\n                <div float-right>\n                  <ion-badge color ="danger">Retired</ion-badge>\n                </div>\n              </h2>\n              <br />\n        </button>\n        </div>\n      </ion-list>\n    </div>  \n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/capsule-list/capsule-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], CapsuleListPage);
    return CapsuleListPage;
}());

//# sourceMappingURL=capsule-list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsLaunchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_rocket_details_rocket__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_capsule_details_capsule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_launchpad_details_launchpad__ = __webpack_require__(53);
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
 * Generated class for the DetailsLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsLaunchPage = /** @class */ (function () {
    function DetailsLaunchPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.sections = [];
        this.sectionsName = [
            "Rocket",
            "Capsule",
            "Site",
        ];
        this.sectionsOpen = [
            false,
            false,
            false
        ];
        this.sectionBadges = [];
        this.launch = this.navParams.data;
        this.spacexApi.getLaunchpadByName(this.launch.launch_site.site_id).subscribe(function (data) {
            _this.launchpad = data;
        });
        this.spacexApi.getRocketById(this.launch.rocket.rocket_id).subscribe(function (data) {
            _this.rocket = data;
        });
        this.spacexApi.getCapsuleDetailBySerial(this.launch.rocket.second_stage.payloads[0].cap_serial)
            .subscribe(function (data) {
            _this.caps = data;
        });
    }
    DetailsLaunchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsLaunchPage');
    };
    DetailsLaunchPage.prototype.sectionSelected = function (index) {
        for (var i = 0; i < this.sectionsOpen.length; i++) {
            if (i == index) {
                this.sectionsOpen[i] = !this.sectionsOpen[i];
            }
            else {
                this.sectionsOpen[i] = false;
            }
        }
    };
    DetailsLaunchPage.prototype.goToRocket = function (rocket) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_rocket_details_rocket__["a" /* DetailsRocketPage */], rocket);
    };
    DetailsLaunchPage.prototype.goToCapsule = function () {
        var _this = this;
        this.spacexApi.getCapsuleById(this.caps.capsule_id).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_capsule_details_capsule__["a" /* DetailsCapsulePage */], data);
        });
    };
    DetailsLaunchPage.prototype.goToLaunchpad = function (launchpad) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_launchpad_details_launchpad__["a" /* DetailsLaunchpadPage */], launchpad);
    };
    DetailsLaunchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-launch',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launch/details-launch.html"*/'<!--\n  Generated template for the DetailsLaunchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{launch.mission_name}}</ion-title>\n  </ion-navbar>\n\n  <ion-item no-lines>\n      <ion-avatar item-start>\n        <img src="{{ launch.links.mission_patch_small }}">\n      </ion-avatar>\n      <ion-badge *ngIf="launch.launch_success" color ="secondary">Success</ion-badge>\n      <ion-badge *ngIf="!launch.launch_success" color ="danger">Failure</ion-badge>\n      <h2>{{ launch.mission_name }}</h2>\n      <p text-wrap> {{ launch.details }}</p>\n  </ion-item>\n\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list inset >\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(0)" >\n            <p>{{sectionsName[0]}}</p>\n          </button>\n            <ion-item *ngIf="sectionsOpen[0] && rocket" no-lines>\n                    <h2 text-wrap>{{rocket.name}}</h2>\n                    <h5 text-wrap>{{rocket.description}}</h5>\n\n                    <ion-col>\n                        <ion-badge *ngIf="rocket.active" color ="secondary" item-end >Active</ion-badge>\n                        <ion-badge *ngIf="!rocket.active" color ="danger" item-end >Retired</ion-badge>\n                        <button ion-button color="light" item-end (click)="goToRocket(rocket)">More</button>\n                    </ion-col>\n            </ion-item>\n      </div>\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(1)" >\n            <p>{{sectionsName[1]}}</p>\n          </button>\n            <ion-item *ngIf="sectionsOpen[1] && caps" no-lines>\n                    <h2 text-wrap>{{caps.type}}</h2>\n                    <h5 text-wrap>{{caps.details}}</h5>\n\n                    <ion-col>\n                        <ion-badge *ngIf="caps.status" color ="secondary" item-end >Active</ion-badge>\n                        <ion-badge *ngIf="!caps.status" color ="danger" item-end >Retired</ion-badge>\n                        <button ion-button color="light" item-end (click)="goToCapsule()">More</button>\n                    </ion-col>\n            </ion-item>\n            <ion-item *ngIf="sectionsOpen[1] && !caps" no-lines>\n              <h5 text-wrap>There is no capsule corresponding to the following launch.</h5>\n            </ion-item>\n      </div>\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(2)" >\n            <p>{{sectionsName[2]}}</p>\n          </button>\n            <ion-item *ngIf="sectionsOpen[2] && launchpad" no-lines>\n                    <h2 text-wrap>{{launchpad.full_name}}</h2>\n                    <h5 text-wrap>{{launchpad.details}}</h5>\n\n                    <ion-col>\n                        <ion-badge *ngIf="launchpad.status" color ="secondary" item-end >Active</ion-badge>\n                        <ion-badge *ngIf="!launchpad.status" color ="danger" item-end >Retired</ion-badge>\n                        <button ion-button color="light" item-end (click)="goToLaunchpad(launchpad)">More</button>\n                    </ion-col>\n            </ion-item>\n      </div>\n      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launch/details-launch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], DetailsLaunchPage);
    return DetailsLaunchPage;
}());

//# sourceMappingURL=details-launch.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(26);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.spacexApi.getInfoOfSpaceX().subscribe(function (data) {
            _this.infoSpaceX = data;
        });
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/info/info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<!-- {\nname: "SpaceX",\nfounder: "Elon Musk",\nfounded: 2002,\nemployees: 7000,\nvehicles: 3,\nlaunch_sites: 3,\ntest_sites: 1,\nceo: "Elon Musk",\ncto: "Elon Musk",\ncoo: "Gwynne Shotwell",\ncto_propulsion: "Tom Mueller",\nvaluation: 15000000000,\nheadquarters: {\naddress: "Rocket Road",\ncity: "Hawthorne",\nstate: "California"\n},\nsummary: "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."\n} -->\n  <ion-navbar>\n    <ion-title>SpaceX</ion-title>\n  </ion-navbar>\n\n  <ion-item >\n    <h2 >SpaceX</h2>\n\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="infoSpaceX">\n    <p>\n      {{infoSpaceX.summary}}\n    </p>\n      <p >Valuation :\n          <ion-badge color ="money" item-end >{{infoSpaceX.valuation}}</ion-badge>\n      </p>\n      <ion-item-divider>\n          Global informations\n        </ion-item-divider>\n    <ion-row>\n        <ion-col col-6>\n          <h3>Founder : </h3>\n          <p >{{infoSpaceX.founder}}</p>\n        </ion-col>\n        <ion-col col-6>\n            <h3>Founded : </h3>\n            <p >{{infoSpaceX.founded}}</p>\n          </ion-col>\n      </ion-row>\n\n        <ion-row>\n            <ion-col col-6>\n              <h5>Employees : </h5>\n              <p >{{infoSpaceX.employees}}</p>\n            </ion-col>\n            <ion-col col-6>\n                <h5>Vehicles : </h5>\n                <p >{{infoSpaceX.vehicles}}</p>\n              </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6>\n              <h5>Launch Sites :</h5>\n              <p >{{infoSpaceX.launch_sites}}</p>\n            </ion-col>\n            <ion-col col-6>\n                <h5>Test Sites : </h5>\n                <p >{{infoSpaceX.test_sites}}</p>\n              </ion-col>\n        </ion-row>\n        <ion-item-divider>\n            Headquarter informations\n          </ion-item-divider>\n          <ion-row>\n              <ion-col col-6>\n                <h5>Address</h5>\n                <p >{{infoSpaceX.headquarters.address}}</p>\n              </ion-col>\n              <ion-col col-6>\n                  <h5>City : </h5>\n                  <p >{{infoSpaceX.headquarters.city}}</p>\n                </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-6>\n                <h5>State : </h5>\n                <p >{{infoSpaceX.headquarters.state}}</p>\n              </ion-col>\n          </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchpadListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_launchpad_details_launchpad__ = __webpack_require__(53);
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
 * Generated class for the LaunchpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchpadListPage = /** @class */ (function () {
    function LaunchpadListPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.launchpad = "active";
        this.spacexApi.getAllLaunchpads().subscribe(function (data) {
            _this.launchpads = data;
        });
    }
    LaunchpadListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaunchpadListPage');
    };
    LaunchpadListPage.prototype.goToLaunchpad = function (launchpad) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_launchpad_details_launchpad__["a" /* DetailsLaunchpadPage */], launchpad);
    };
    LaunchpadListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launchpad-list',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/launchpad-list/launchpad-list.html"*/'<!--\n  Generated template for the LaunchpadListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Launchpads</ion-title>\n  </ion-navbar>\n  <div padding>\n      <ion-segment [(ngModel)]="launchpad">\n        <ion-segment-button value="active">\n          Active\n        </ion-segment-button>\n        <ion-segment-button value="retired">\n          Retired\n        </ion-segment-button>\n      </ion-segment>\n    </div>  \n</ion-header>\n\n<ion-content padding>\n  <div [ngSwitch]="launchpad">\n      <ion-list *ngSwitchCase="\'active\'">\n        <div *ngFor = "let launchpad of launchpads"  >\n          <button ion-item *ngIf="launchpad.status == \'active\' || launchpad.status == \'under construction\'" (click)="goToLaunchpad(launchpad)">\n            <h2>\n                  <div float-left>{{ launchpad.location.name }}</div>\n                  <div float-right>\n                    <ion-badge color ="secondary">{{ launchpad.status }}</ion-badge>\n                  </div>\n                </h2>\n                <br />\n                <p>{{ launchpad.location.region }}</p>\n          </button>\n          </div>\n      </ion-list>\n    \n      <ion-list *ngSwitchCase="\'retired\'">\n        <div *ngFor = "let launchpad of launchpads">\n        <button ion-item *ngIf="launchpad.status == \'retired\'" >\n            <h2>\n                <div float-left>{{ launchpad.location.name }}</div>\n                <div float-right>\n                  <ion-badge color ="danger">{{ launchpad.status }}</ion-badge>\n                </div>\n              </h2>\n              <br />\n              <p>{{ launchpad.location.region }}</p>\n        </button>\n        </div>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/launchpad-list/launchpad-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], LaunchpadListPage);
    return LaunchpadListPage;
}());

//# sourceMappingURL=launchpad-list.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_launch_details_launch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(105);
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
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchListPage = /** @class */ (function () {
    function LaunchListPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.launch = "latest";
        this.spacexApi.getAllLaunchesLatest().subscribe(function (data) {
            _this.launchesLatest = data;
        });
        this.spacexApi.getAllLaunchesNext().subscribe(function (data) {
            _this.launches = data;
            console.log("Data Next  : " + data);
            console.log("Nom : " + _this.launches[0]);
            console.log(JSON.stringify(_this.launches));
        });
    }
    LaunchListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaunchListPage');
    };
    LaunchListPage.prototype.goToDetails = function (launch) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_launch_details_launch__["a" /* DetailsLaunchPage */], launch);
    };
    LaunchListPage.prototype.goToInformation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */]);
    };
    LaunchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch-list',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/launch-list/launch-list.html"*/'<!--\n  Generated template for the LaunchListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-row>\n        <ion-title>Launches</ion-title>\n        <button ion-button icon-only end (click)="goToInformation()">\n          <ion-icon name="information"></ion-icon>\n        </button>\n    </ion-row>\n\n  </ion-navbar>\n\n  <div padding>\n      <ion-segment [(ngModel)]="launch">\n        <ion-segment-button value="latest">\n          Latest\n        </ion-segment-button>\n        <ion-segment-button value="soon">\n          Soon\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n</ion-header>\n\n\n<ion-content padding>\n\n      \n      <div [ngSwitch]="launch">\n        <ion-list *ngSwitchCase="\'latest\'">\n            <button ion-item *ngFor = "let launch of launchesLatest" (click)="goToDetails(launch)">\n                <ion-avatar item-start>\n                  <img src="{{ launch.links.mission_patch_small }}">\n                </ion-avatar>\n                <h2>\n                  <div float-left>{{ launch.mission_name }}</div>\n                  <div float-right>\n                    <ion-badge *ngIf="launch.launch_success" color ="secondary">Success</ion-badge>\n                    <ion-badge *ngIf="!launch.launch_success" color ="danger">Failure</ion-badge>\n                  </div>\n                </h2>\n                <br />\n                <p>{{ launch.details }}</p>\n            </button>\n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'soon\'">\n            <button ion-item *ngFor = "let launch of launches"> \n                <h2>\n                  <div float-left>{{ launch.mission_name }}</div>\n                  <div float-right>\n                    <ion-badge color ="primary">{{ launch.launch_success }}</ion-badge>\n                  </div>\n                </h2>\n                <br />\n                <p>{{ launch.site_name_long }}</p>\n            </button> \n        </ion-list>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/launch-list/launch-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], LaunchListPage);
    return LaunchListPage;
}());

//# sourceMappingURL=launch-list.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RocketListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_rocket_details_rocket__ = __webpack_require__(52);
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
 * Generated class for the RocketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RocketListPage = /** @class */ (function () {
    function RocketListPage(navCtrl, navParams, spacexApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.rocket = "active";
        this.spacexApi.getAllRockets().subscribe(function (data) {
            _this.rockets = data;
        });
    }
    RocketListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RocketListPage');
    };
    RocketListPage.prototype.goToRocket = function (rocket) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_rocket_details_rocket__["a" /* DetailsRocketPage */], rocket);
    };
    RocketListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rocket-list',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/rocket-list/rocket-list.html"*/'<!--\n  Generated template for the RocketListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Rockets</ion-title>\n  </ion-navbar>\n  <div padding>\n    <ion-segment [(ngModel)]="rocket">\n      <ion-segment-button value="active">\n        Active\n      </ion-segment-button>\n      <ion-segment-button value="retired">\n        Retired\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div [ngSwitch]="rocket">\n    <ion-list *ngSwitchCase="\'active\'">\n      <div *ngFor = "let rocket of rockets">\n        <button ion-item *ngIf="rocket.active == true" (click)="goToRocket(rocket)">\n          <h2>\n            <div float-left>{{ rocket.name }}</div>\n            <div float-right>\n              <ion-badge color ="secondary">Active</ion-badge>\n            </div>\n          </h2>\n          <br />\n          <p>{{ rocket.first_flight }}</p>\n        </button>\n        </div>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'retired\'">\n      <div *ngFor = "let rocket of rockets">\n      <button ion-item *ngIf="rocket.active == false" >\n        <h2>\n          <div float-left>{{ rocket.name }}</div>\n          <div float-right>\n            <ion-badge color ="danger">Retired</ion-badge>\n          </div>\n        </h2>\n        <br />\n        <p>{{ rocket.first_flight }}</p>\n      </button>\n      </div>\n    </ion-list>\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/rocket-list/rocket-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], RocketListPage);
    return RocketListPage;
}());

//# sourceMappingURL=rocket-list.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/capsule-list/capsule-list.module": [
		285,
		8
	],
	"../pages/details-capsule/details-capsule.module": [
		286,
		7
	],
	"../pages/details-launch/details-launch.module": [
		287,
		6
	],
	"../pages/details-launchpad/details-launchpad.module": [
		288,
		5
	],
	"../pages/details-rocket/details-rocket.module": [
		289,
		4
	],
	"../pages/info/info.module": [
		290,
		3
	],
	"../pages/launch-list/launch-list.module": [
		292,
		2
	],
	"../pages/launchpad-list/launchpad-list.module": [
		291,
		1
	],
	"../pages/rocket-list/rocket-list.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__launch_list_launch_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rocket_list_rocket_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capsule_list_capsule_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__launchpad_list_launchpad_list__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__launch_list_launch_list__["a" /* LaunchListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__rocket_list_rocket_list__["a" /* RocketListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__capsule_list_capsule_list__["a" /* CapsuleListPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__launchpad_list_launchpad_list__["a" /* LaunchpadListPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Launch" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Rocket" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Capsule" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Launchpad" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__provider_spacex_api_spacex_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_launch_details_launch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_details_rocket_details_rocket__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_details_capsule_details_capsule__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_details_launchpad_details_launchpad__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_launch_list_launch_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rocket_list_rocket_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_capsule_list_capsule_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_launchpad_list_launchpad_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_info_info__ = __webpack_require__(105);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_launch_details_launch__["a" /* DetailsLaunchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_rocket_details_rocket__["a" /* DetailsRocketPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_details_capsule_details_capsule__["a" /* DetailsCapsulePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_launchpad_details_launchpad__["a" /* DetailsLaunchpadPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_rocket_list_rocket_list__["a" /* RocketListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_capsule_list_capsule_list__["a" /* CapsuleListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_launchpad_list_launchpad_list__["a" /* LaunchpadListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_info__["a" /* InfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/capsule-list/capsule-list.module#CapsuleListPageModule', name: 'CapsuleListPage', segment: 'capsule-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-capsule/details-capsule.module#DetailsCapsulePageModule', name: 'DetailsCapsulePage', segment: 'details-capsule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-launch/details-launch.module#DetailsLaunchPageModule', name: 'DetailsLaunchPage', segment: 'details-launch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-launchpad/details-launchpad.module#DetailsLaunchpadPageModule', name: 'DetailsLaunchpadPage', segment: 'details-launchpad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-rocket/details-rocket.module#DetailsRocketPageModule', name: 'DetailsRocketPage', segment: 'details-rocket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launchpad-list/launchpad-list.module#LaunchpadListPageModule', name: 'LaunchpadListPage', segment: 'launchpad-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch-list/launch-list.module#LaunchListPageModule', name: 'LaunchListPage', segment: 'launch-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rocket-list/rocket-list.module#RocketListPageModule', name: 'RocketListPage', segment: 'rocket-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_launch_details_launch__["a" /* DetailsLaunchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_rocket_details_rocket__["a" /* DetailsRocketPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_details_capsule_details_capsule__["a" /* DetailsCapsulePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_rocket_list_rocket_list__["a" /* RocketListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_capsule_list_capsule_list__["a" /* CapsuleListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_launchpad_list_launchpad_list__["a" /* LaunchpadListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_launchpad_details_launchpad__["a" /* DetailsLaunchpadPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_info__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacexApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(163);
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


/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SpacexApiProvider = /** @class */ (function () {
    function SpacexApiProvider(http) {
        this.http = http;
        this.baseUrl = 'https://api.spacexdata.com/v2';
    }
    SpacexApiProvider.prototype.getInfoOfSpaceX = function () {
        var EndpointUtl = this.baseUrl + "/info";
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getAllLaunchesNext = function () {
        var EndpointUtl = this.baseUrl + "/launches/upcoming";
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getAllLaunchesLatest = function () {
        var EndpointUtl = this.baseUrl + "/launches";
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getAllRockets = function () {
        var EndpointUtl = this.baseUrl + "/rockets";
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getLaunchpadByName = function (name) {
        var EndpointUtl = this.baseUrl + "/launchpads/" + name;
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getAllLaunchpads = function () {
        var EndpointUtl = this.baseUrl + "/launchpads";
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getRocketById = function (id) {
        var EndpointUtl = this.baseUrl + "/rockets/" + id;
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getCapsuleDetailBySerial = function (serial) {
        var EndpointUtl = this.baseUrl + "/parts/caps/" + serial;
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getCapsuleById = function (id) {
        var EndpointUtl = this.baseUrl + "/capsules/" + id;
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider.prototype.getAllCapsule = function () {
        var EndpointUtl = this.baseUrl + "/capsules/";
        return this.http.get(EndpointUtl);
    };
    SpacexApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SpacexApiProvider);
    return SpacexApiProvider;
}());

//# sourceMappingURL=spacex-api.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(207);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsCapsulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(26);
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
 * Generated class for the DetailsCapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsCapsulePage = /** @class */ (function () {
    function DetailsCapsulePage(navCtrl, navParams, spacexApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spacexApi = spacexApi;
        this.sections = [];
        this.sectionsName = [
            "Numbers",
            "Heatshield",
            "Thrusters"
        ];
        this.sectionsOpen = [
            false,
            false,
            false
        ];
        this.capsule = this.navParams.data;
    }
    DetailsCapsulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsCapsulePage');
    };
    DetailsCapsulePage.prototype.sectionSelected = function (index) {
        for (var i = 0; i < this.sectionsOpen.length; i++) {
            if (i == index) {
                this.sectionsOpen[i] = !this.sectionsOpen[i];
            }
            else {
                this.sectionsOpen[i] = false;
            }
        }
    };
    DetailsCapsulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-capsule',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-capsule/details-capsule.html"*/'<!--\n  Generated template for the DetailsCapsulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{capsule.name}} </ion-title>\n\n  </ion-navbar>\n  <ion-item no-lines>\n    <ion-avatar item-start>\n      <img src="../../assets/icon/capsule.svg">\n    </ion-avatar>\n    <h2>{{capsule.name}} </h2>\n    <p>Type : {{capsule.type}}</p>\n    <p>Active :\n        <ion-badge *ngIf="capsule.active" color ="secondary" item-end >Active</ion-badge>\n        <ion-badge *ngIf="!capsule.active" color ="danger" item-end >Retired</ion-badge>\n    </p>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list inset>\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(0)">\n        <p>{{sectionsName[0]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[0]" no-lines>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Crew Capacity : </h1>\n            <p>{{capsule.crew_capacity}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Sidewall angle : </h1>\n            <p>{{capsule.sidewall_angle_deg}}°</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Orbit duration : </h1>\n            <p>{{capsule.orbit_duration_yr}} year</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Height : </h1>\n            <p>{{capsule.height_w_trunk.meters}}m</p>\n          </ion-col>\n          <ion-col col-6>\n            <h1>Diameter : </h1>\n            <p>{{capsule.diameter.meters}}m</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-item>\n      <!-- export interface Capsule {\n   material: string;\n    size_meters: number;\n    temp_degrees: number;\n    dev_partner: string;\n  }\n  -->\n      <div>\n        <button ion-item detail-push item-end clear (click)="sectionSelected(1)">\n          <p>{{sectionsName[1]}}</p>\n        </button>\n        <ion-item *ngIf="sectionsOpen[1]" no-lines>\n            <p>Material : {{capsule.heat_shield.material}}</p>\n            <p>Size : {{capsule.heat_shield.size_meters}}m</p>\n            <p>Temperature : {{capsule.heat_shield.temp_degrees}}°</p>\n            <p>Dev partner : {{capsule.heat_shield.dev_partner}}</p>\n        </ion-item>\n\n      </div>\n\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(2)">\n            <p>{{sectionsName[2]}}</p>\n          </button>\n\n\n          <ion-item *ngIf="sectionsOpen[2]" no-lines>\n              <ion-card *ngFor="let thrust of capsule.thrusters; let i = index" [attr.data-index]="i">\n                <ion-card-header>\n                  <p text-wrap> Thrust n°{{i+1}}</p>\n                </ion-card-header>  \n                <ion-card-content>\n                    <p text-wrap>Amount : {{thrust.amount}}</p>\n                    <p text-wrap>Pods : {{thrust.pods}}</p>\n                    <p text-wrap>Fuel 1 : {{thrust.fuel_1}}</p>\n                    <p text-wrap>Fuel 2 : {{thrust.fuel_2}}</p>\n                  </ion-card-content>\n                </ion-card>\n                \n          </ion-item>\n  \n        </div>\n\n    </div>\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-capsule/details-capsule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], DetailsCapsulePage);
    return DetailsCapsulePage;
}());

//# sourceMappingURL=details-capsule.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsRocketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the DetailsRocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsRocketPage = /** @class */ (function () {
    function DetailsRocketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sections = [];
        this.sectionsName = [
            "Description",
            "Numbers",
            "Engines"
        ];
        this.sectionsOpen = [
            false,
            false,
            false
        ];
        //console.log(navParams.data);
        this.rocket = this.navParams.data;
    }
    DetailsRocketPage.prototype.sectionSelected = function (index) {
        for (var i = 0; i < this.sectionsOpen.length; i++) {
            if (i == index) {
                this.sectionsOpen[i] = !this.sectionsOpen[i];
            }
            else {
                this.sectionsOpen[i] = false;
            }
        }
    };
    DetailsRocketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsRocketPage');
    };
    DetailsRocketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-rocket',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-rocket/details-rocket.html"*/'<!--\n  Generated template for the DetailsRocketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>{{rocket.name}} </ion-title>\n\n  </ion-navbar>\n  <ion-item no-lines>\n    <ion-avatar item-start>\n      <img src="../../assets/icon/rocket.svg">\n    </ion-avatar>\n    <h2>{{rocket.name}} </h2>\n    <p>Type : {{rocket.type}}</p>\n    <p>Active :\n        <ion-badge *ngIf="rocket.active" color ="secondary" item-end >Active</ion-badge>\n        <ion-badge *ngIf="!rocket.active" color ="danger" item-end >Retired</ion-badge>\n    </p>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list inset>\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(0)">\n        <p>{{sectionsName[0]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[0]" no-lines>\n        <p text-wrap> {{ rocket.description }}</p>\n      </ion-item>\n    </div>\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(1)">\n        <p>{{sectionsName[1]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[1]" no-lines>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Stages : </h1>\n            <p>{{rocket.stages}}</p>\n          </ion-col>\n          <ion-col col-6>\n            <h1>Boosters : </h1>\n            <p>{{rocket.boosters}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Coast per launch : </h1>\n            <p>{{rocket.cost_per_launch}}$</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Success rate : </h1>\n            <p>{{rocket.success_rate_pct}}%</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Height : </h1>\n            <p>{{rocket.height.meters}}m</p>\n          </ion-col>\n          <ion-col col-6>\n            <h1>Diameter : </h1>\n            <p>{{rocket.diameter.meters}}m</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-item>\n    </div>\n\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(2)">\n        <p>{{sectionsName[2]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[2]" no-lines>\n        <p text-wrap>Number : {{ rocket.engines.number }}</p>\n        <p text-wrap>Type : {{ rocket.engines.type }}</p>\n        <p text-wrap>Version : {{ rocket.engines.version }}</p>\n        <p text-wrap>Layout : {{ rocket.engines.layout }}</p>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-rocket/details-rocket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DetailsRocketPage);
    return DetailsRocketPage;
}());

//# sourceMappingURL=details-rocket.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsLaunchpadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the DetailsLaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsLaunchpadPage = /** @class */ (function () {
    function DetailsLaunchpadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sections = [];
        this.sectionsName = [
            "Description",
            "Vehicles Launched",
            "Location"
        ];
        this.sectionsOpen = [
            false,
            false,
            false
        ];
        this.launchpad = this.navParams.data;
    }
    DetailsLaunchpadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsLaunchpadPage');
    };
    DetailsLaunchpadPage.prototype.sectionSelected = function (index) {
        for (var i = 0; i < this.sectionsOpen.length; i++) {
            if (i == index) {
                this.sectionsOpen[i] = !this.sectionsOpen[i];
            }
            else {
                this.sectionsOpen[i] = false;
            }
        }
    };
    DetailsLaunchpadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-launchpad',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launchpad/details-launchpad.html"*/'<!--\n  Generated template for the DetailsLaunchpadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- export interface Launchpad {\n    id: string;\n    full_name: string;\n    status: string;\n    location: Location;\n    vehicles_launched: string[];\n    details: string;\n  }\n  \n  export interface Location {\n    name: string;\n    region: string;\n    latitude: number;\n    longitude: number;\n  } -->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{launchpad.full_name}}</ion-title>\n  </ion-navbar>\n\n  <ion-item no-lines>\n      <ion-avatar item-start>\n          <img src="../../assets/icon/launchpad.svg">\n        </ion-avatar>\n      <h2>{{launchpad.full_name}} </h2>\n      <p>Status : <ion-badge *ngIf="launchpad.status" color ="secondary" item-end >{{launchpad.status}}</ion-badge>\n        <ion-badge *ngIf="!launchpad.status" color ="danger" item-end >Retired</ion-badge></p>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list inset >\n        <div>\n            <button ion-item detail-push item-end clear (click)="sectionSelected(0)" >\n              <p>{{sectionsName[0]}}</p>\n            </button>\n              <ion-item *ngIf="sectionsOpen[0]" no-lines>\n                      <p text-wrap>{{launchpad.details}}</p>\n              </ion-item>\n        </div>\n        <div>\n            <button ion-item detail-push item-end clear (click)="sectionSelected(1)">\n              <p>{{sectionsName[1]}}</p>\n            </button>\n  \n  \n            <ion-item *ngIf="sectionsOpen[1]" no-lines>\n                <div *ngFor="let vehicle of launchpad.vehicles_launched; let i = index" [attr.data-index]="i">\n                  <h2>Vehicle n°{{i+1}} : </h2>\n                  <p text-wrap>{{vehicle}}</p>\n                </div>\n            </ion-item>\n    \n          </div>\n          <div>\n              <button ion-item detail-push item-end clear (click)="sectionSelected(2)">\n                <p>{{sectionsName[2]}}</p>\n              </button>\n              <ion-item *ngIf="sectionsOpen[2]" no-lines>\n                <p text-wrap>Name : {{ launchpad.location.name }}</p>\n                <p text-wrap>Region : {{ launchpad.location.region }}</p>\n                <p text-wrap>Latitude : {{ launchpad.location.latitude }}</p>\n                <p text-wrap>Longitude : {{ launchpad.location.longitude }}</p>\n              </ion-item>\n            </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launchpad/details-launchpad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DetailsLaunchpadPage);
    return DetailsLaunchpadPage;
}());

//# sourceMappingURL=details-launchpad.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map