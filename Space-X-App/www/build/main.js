webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsCapsulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(41);
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
            selector: 'page-details-capsule',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-capsule/details-capsule.html"*/'<!--\n  Generated template for the DetailsCapsulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{capsule.name}} </ion-title>\n\n  </ion-navbar>\n  <ion-item no-lines>\n    <ion-avatar item-start>\n      <img src="../../assets/icon/capsule.svg">\n    </ion-avatar>\n    <h2>{{capsule.name}} </h2>\n    <p>Type : {{capsule.type}}</p>\n    <p>Active :\n      <ion-badge color="primary" item-end>{{ capsule.active }}</ion-badge>\n    </p>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list inset>\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(0)">\n        <p>{{sectionsName[0]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[0]" no-lines>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Crew Capacity : </h1>\n            <p>{{capsule.crew_capacity}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Sidewall angle : </h1>\n            <p>{{capsule.sidewall_angle_deg}}°</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Orbit duration : </h1>\n            <p>{{capsule.orbit_duration_yr}} year</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Height : </h1>\n            <p>{{capsule.height_w_trunk.meters}}m</p>\n          </ion-col>\n          <ion-col col-6>\n            <h1>Diameter : </h1>\n            <p>{{capsule.diameter.meters}}m</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-item>\n      <!-- export interface Capsule {\n   material: string;\n    size_meters: number;\n    temp_degrees: number;\n    dev_partner: string;\n  }\n  -->\n      <div>\n        <button ion-item detail-push item-end clear (click)="sectionSelected(1)">\n          <p>{{sectionsName[1]}}</p>\n        </button>\n        <ion-item *ngIf="sectionsOpen[1]" no-lines>\n            <p>Material : {{capsule.heat_shield.material}}</p>\n            <p>Size : {{capsule.heat_shield.size_meters}}m</p>\n            <p>Temperature : {{capsule.heat_shield.temp_degrees}}°</p>\n            <p>Dev partner : {{capsule.heat_shield.dev_partner}}</p>\n        </ion-item>\n\n      </div>\n\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(2)">\n            <p>{{sectionsName[2]}}</p>\n          </button>\n\n\n          <ion-item *ngIf="sectionsOpen[2]" no-lines>\n              <ion-card *ngFor="let thrust of capsule.thrusters; let i = index" [attr.data-index]="i">\n                <ion-card-header>\n                  <p text-wrap> Thrust n°{{i+1}}</p>\n                </ion-card-header>  \n                <ion-card-content>\n                    <p text-wrap>Amount : {{thrust.amount}}</p>\n                    <p text-wrap>Pods : {{thrust.pods}}</p>\n                    <p text-wrap>Fuel 1 : {{thrust.fuel_1}}</p>\n                    <p text-wrap>Fuel 2 : {{thrust.fuel_2}}</p>\n                  </ion-card-content>\n                </ion-card>\n                \n          </ion-item>\n  \n        </div>\n\n    </div>\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-capsule/details-capsule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], DetailsCapsulePage);
    return DetailsCapsulePage;
}());

//# sourceMappingURL=details-capsule.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsLaunchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_rocket_details_rocket__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_capsule_details_capsule__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_launchpad_details_launchpad__ = __webpack_require__(103);
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
            selector: 'page-details-launch',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launch/details-launch.html"*/'<!--\n  Generated template for the DetailsLaunchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{launch.mission_name}}</ion-title>\n  </ion-navbar>\n\n  <ion-item no-lines>\n      <ion-avatar item-start>\n        <img src="{{ launch.links.mission_patch_small }}">\n      </ion-avatar>\n      <ion-badge color ="primary" item-end>{{ launch.launch_success }}</ion-badge>\n      <h2>{{ launch.mission_name }}</h2>\n      <p text-wrap> {{ launch.details }}</p>\n  </ion-item>\n\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list inset >\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(0)" >\n            <p>{{sectionsName[0]}}</p>\n          </button>\n            <ion-item *ngIf="sectionsOpen[0] && rocket" no-lines>\n                    <h2 text-wrap>{{rocket.name}}</h2>\n                    <h5 text-wrap>{{rocket.description}}</h5>\n\n                    <ion-col>\n                        <ion-badge color ="primary" item-end >{{rocket.active}}</ion-badge>\n                        <button ion-button color="light" item-end (click)="goToRocket(rocket)">More</button>\n                    </ion-col>\n            </ion-item>\n      </div>\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(1)" >\n            <p>{{sectionsName[1]}}</p>\n          </button>\n            <ion-item *ngIf="sectionsOpen[1] && caps" no-lines>\n                    <h2 text-wrap>{{caps.type}}</h2>\n                    <h5 text-wrap>{{caps.details}}</h5>\n\n                    <ion-col>\n                        <ion-badge color ="primary" item-end  >{{ caps.status}}</ion-badge>\n                        <button ion-button color="light" item-end (click)="goToCapsule()">More</button>\n                    </ion-col>\n            </ion-item>\n            <ion-item *ngIf="sectionsOpen[1] && !caps" no-lines>\n              <h5 text-wrap>There is no capsule corresponding to the following launch.</h5>\n            </ion-item>\n      </div>\n      <div>\n          <button ion-item detail-push item-end clear (click)="sectionSelected(2)" >\n            <p>{{sectionsName[2]}}</p>\n          </button>\n            <ion-item *ngIf="sectionsOpen[2] && launchpad" no-lines>\n                    <h2 text-wrap>{{launchpad.full_name}}</h2>\n                    <h5 text-wrap>{{launchpad.details}}</h5>\n\n                    <ion-col>\n                        <ion-badge color ="primary" item-end >{{launchpad.status}}</ion-badge>\n                        <button ion-button color="light" item-end (click)="goToLaunchpad(launchpad)">More</button>\n                    </ion-col>\n            </ion-item>\n      </div>\n      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launch/details-launch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], DetailsLaunchPage);
    return DetailsLaunchPage;
}());

//# sourceMappingURL=details-launch.js.map

/***/ }),

/***/ 102:
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
            selector: 'page-details-rocket',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-rocket/details-rocket.html"*/'<!--\n  Generated template for the DetailsRocketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>{{rocket.name}} </ion-title>\n\n  </ion-navbar>\n  <ion-item no-lines>\n    <ion-avatar item-start>\n      <img src="../../assets/icon/rocket.svg">\n    </ion-avatar>\n    <h2>{{rocket.name}} </h2>\n    <p>Type : {{rocket.type}}</p>\n    <p>Active :\n      <ion-badge color="primary" item-end>{{ rocket.active }}</ion-badge>\n    </p>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list inset>\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(0)">\n        <p>{{sectionsName[0]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[0]" no-lines>\n        <p text-wrap> {{ rocket.description }}</p>\n      </ion-item>\n    </div>\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(1)">\n        <p>{{sectionsName[1]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[1]" no-lines>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Stages : </h1>\n            <p>{{rocket.stages}}</p>\n          </ion-col>\n          <ion-col col-6>\n            <h1>Boosters : </h1>\n            <p>{{rocket.boosters}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Coast per launch : </h1>\n            <p>{{rocket.cost_per_launch}}$</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h1>Success rate : </h1>\n            <p>{{rocket.success_rate_pct}}%</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <h1>Height : </h1>\n            <p>{{rocket.height.meters}}m</p>\n          </ion-col>\n          <ion-col col-6>\n            <h1>Diameter : </h1>\n            <p>{{rocket.diameter.meters}}m</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-item>\n    </div>\n\n    <div>\n      <button ion-item detail-push item-end clear (click)="sectionSelected(2)">\n        <p>{{sectionsName[2]}}</p>\n      </button>\n      <ion-item *ngIf="sectionsOpen[2]" no-lines>\n        <p text-wrap>Number : {{ rocket.engines.number }}</p>\n        <p text-wrap>Type : {{ rocket.engines.type }}</p>\n        <p text-wrap>Version : {{ rocket.engines.version }}</p>\n        <p text-wrap>Layout : {{ rocket.engines.layout }}</p>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-rocket/details-rocket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DetailsRocketPage);
    return DetailsRocketPage;
}());

//# sourceMappingURL=details-rocket.js.map

/***/ }),

/***/ 103:
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
            selector: 'page-details-launchpad',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launchpad/details-launchpad.html"*/'<!--\n  Generated template for the DetailsLaunchpadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- export interface Launchpad {\n    id: string;\n    full_name: string;\n    status: string;\n    location: Location;\n    vehicles_launched: string[];\n    details: string;\n  }\n  \n  export interface Location {\n    name: string;\n    region: string;\n    latitude: number;\n    longitude: number;\n  } -->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{launchpad.full_name}}</ion-title>\n  </ion-navbar>\n\n  <ion-item no-lines>\n      <ion-avatar item-start>\n          <img src="">\n        </ion-avatar>\n      <h2>{{launchpad.full_name}} </h2>\n      <p>Status : <ion-badge color ="primary" item-end>{{ launchpad.status }}</ion-badge></p>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list inset >\n        <div>\n            <button ion-item detail-push item-end clear (click)="sectionSelected(0)" >\n              <p>{{sectionsName[0]}}</p>\n            </button>\n              <ion-item *ngIf="sectionsOpen[0]" no-lines>\n                      <p text-wrap>{{launchpad.details}}</p>\n              </ion-item>\n        </div>\n        <div>\n            <button ion-item detail-push item-end clear (click)="sectionSelected(1)">\n              <p>{{sectionsName[1]}}</p>\n            </button>\n  \n  \n            <ion-item *ngIf="sectionsOpen[1]" no-lines>\n                <div *ngFor="let vehicle of launchpad.vehicles_launched; let i = index" [attr.data-index]="i">\n                  <h2>Vehicle n°{{i+1}} : </h2>\n                  <p text-wrap>{{vehicle}}</p>\n                </div>\n            </ion-item>\n    \n          </div>\n          <div>\n              <button ion-item detail-push item-end clear (click)="sectionSelected(2)">\n                <p>{{sectionsName[2]}}</p>\n              </button>\n              <ion-item *ngIf="sectionsOpen[2]" no-lines>\n                <p text-wrap>Name : {{ launchpad.location.name }}</p>\n                <p text-wrap>Region : {{ launchpad.location.region }}</p>\n                <p text-wrap>Latitude : {{ launchpad.location.latitude }}</p>\n                <p text-wrap>Longitude : {{ launchpad.location.longitude }}</p>\n              </ion-item>\n            </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/details-launchpad/details-launchpad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DetailsLaunchpadPage);
    return DetailsLaunchpadPage;
}());

//# sourceMappingURL=details-launchpad.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_launch_details_launch__ = __webpack_require__(101);
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
    LaunchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch-list',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/launch-list/launch-list.html"*/'<!--\n  Generated template for the LaunchListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>launch-list</ion-title>\n  </ion-navbar>\n\n  <div padding>\n      <ion-segment [(ngModel)]="launch">\n        <ion-segment-button value="latest">\n          Latest\n        </ion-segment-button>\n        <ion-segment-button value="soon">\n          Soon\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n</ion-header>\n\n\n<ion-content padding>\n\n      \n      <div [ngSwitch]="launch">\n        <ion-list *ngSwitchCase="\'latest\'">\n            <button ion-item *ngFor = "let launch of launchesLatest" (click)="goToDetails(launch)">\n                <ion-avatar item-start>\n                  <img src="{{ launch.links.mission_patch_small }}">\n                </ion-avatar>\n                <h2>\n                  <div float-left>{{ launch.mission_name }}</div>\n                  <div float-right>\n                    <ion-badge color ="primary">{{ launch.launch_success }}</ion-badge>\n                  </div>\n                </h2>\n                <br />\n                <p>{{ launch.details }}</p>\n            </button>\n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'soon\'">\n            <button ion-item *ngFor = "let launch of launches"> \n                <h2>\n                  <div float-left>{{ launch.mission_name }}</div>\n                  <div float-right>\n                    <ion-badge color ="primary">{{ launch.launch_success }}</ion-badge>\n                  </div>\n                </h2>\n                <br />\n                <p>{{ launch.site_name_long }}</p>\n            </button> \n        </ion-list>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/launch-list/launch-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], LaunchListPage);
    return LaunchListPage;
}());

//# sourceMappingURL=launch-list.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RocketListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__ = __webpack_require__(41);
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
        this.spacexApi.getAllRockets().subscribe(function (data) {
            _this.rockets = data;
        });
    }
    RocketListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RocketListPage');
    };
    RocketListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rocket-list',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/rocket-list/rocket-list.html"*/'<!--\n  Generated template for the RocketListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rocket-list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor = "let rocket of rockets">\n      <h2>\n        <div float-left>{{ rocket.name }}</div>\n        <div float-right>\n          <ion-badge color ="primary">{{ rocket.active }}</ion-badge>\n        </div>\n      </h2>\n      <br />\n      <p>{{ rocket.first_flight }}</p>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/rocket-list/rocket-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]])
    ], RocketListPage);
    return RocketListPage;
}());

//# sourceMappingURL=rocket-list.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details-capsule/details-capsule.module": [
		285,
		2
	],
	"../pages/details-launch/details-launch.module": [
		286,
		5
	],
	"../pages/details-launchpad/details-launchpad.module": [
		287,
		1
	],
	"../pages/details-rocket/details-rocket.module": [
		288,
		0
	],
	"../pages/launch-list/launch-list.module": [
		289,
		4
	],
	"../pages/rocket-list/rocket-list.module": [
		290,
		3
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__launch_list_launch_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rocket_list_rocket_list__ = __webpack_require__(105);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__launch_list_launch_list__["a" /* LaunchListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__rocket_list_rocket_list__["a" /* RocketListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Launch" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Rocket" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__provider_spacex_api_spacex_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_details_launch_details_launch__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_details_rocket_details_rocket__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_details_capsule_details_capsule__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_launchpad_details_launchpad__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_launch_list_launch_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_rocket_list_rocket_list__ = __webpack_require__(105);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_launch_details_launch__["a" /* DetailsLaunchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_rocket_details_rocket__["a" /* DetailsRocketPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_details_capsule_details_capsule__["a" /* DetailsCapsulePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_launchpad_details_launchpad__["a" /* DetailsLaunchpadPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_rocket_list_rocket_list__["a" /* RocketListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details-capsule/details-capsule.module#DetailsCapsulePageModule', name: 'DetailsCapsulePage', segment: 'details-capsule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-launch/details-launch.module#DetailsLaunchPageModule', name: 'DetailsLaunchPage', segment: 'details-launch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-launchpad/details-launchpad.module#DetailsLaunchpadPageModule', name: 'DetailsLaunchpadPage', segment: 'details-launchpad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-rocket/details-rocket.module#DetailsRocketPageModule', name: 'DetailsRocketPage', segment: 'details-rocket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch-list/launch-list.module#LaunchListPageModule', name: 'LaunchListPage', segment: 'launch-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rocket-list/rocket-list.module#RocketListPageModule', name: 'RocketListPage', segment: 'rocket-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_launch_details_launch__["a" /* DetailsLaunchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_rocket_details_rocket__["a" /* DetailsRocketPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_details_capsule_details_capsule__["a" /* DetailsCapsulePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_rocket_list_rocket_list__["a" /* RocketListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__provider_spacex_api_spacex_api__["a" /* SpacexApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/benjaminmetaut/Documents/Dev/ionicProjects/Space-X-ionic/Space-X-App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacexApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(160);
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
    SpacexApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SpacexApiProvider);
    return SpacexApiProvider;
}());

//# sourceMappingURL=spacex-api.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map