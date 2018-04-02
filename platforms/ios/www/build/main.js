webpackJsonp([8],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZeegnalserviceProvider; });
/* unused harmony export ZeegnalRequst */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the ZeegnalserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ZeegnalserviceProvider = /** @class */ (function () {
    function ZeegnalserviceProvider(http) {
        this.http = http;
        console.log('Hello ZeegnalserviceProvider Provider');
    }
    ZeegnalserviceProvider.prototype.getRandomUser = function () {
        return this.http.get("https://randomuser.me/api/").map(function (data) { return data; });
    };
    ZeegnalserviceProvider.prototype.getSentZeegnalService = function (epobj) {
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
        console.log("URL ", epurl);
        console.log("Endpoint Object x", epobj);
        return this.http.post(epurl, epobj);
    };
    ZeegnalserviceProvider.prototype.getReceivedZeegnalService = function (epobj) {
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        console.log("URL ", epurl);
        console.log("Endpoint Object x", epobj);
        return this.http.post(epurl, epobj);
    };
    ZeegnalserviceProvider.prototype.getguid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    ZeegnalserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ZeegnalserviceProvider);
    return ZeegnalserviceProvider;
}());

var ZeegnalRequst = /** @class */ (function () {
    function ZeegnalRequst() {
    }
    return ZeegnalRequst;
}());

//# sourceMappingURL=zeegnalservice.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitydetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the CommunitydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunitydetailPage = /** @class */ (function () {
    function CommunitydetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = ["Surveys", "Elections", "Market Place", "Make Payments", "complaints"];
        this.parObj = this.navParams.get('paramObj');
    }
    CommunitydetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommunitydetailPage');
    };
    CommunitydetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communitydetail',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/communitydetail/communitydetail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{parObj.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n			<div class="vertical-center txt-center">\n						\n              <!-- <span class="txt-center" style="font-size:12px;text-transform: uppercase;margin-top:30px">Welcome to {{parObj.name}}</span> -->\n              \n      \n      <ion-row data-transation="fadeInDown" data-start-time="400">\n      <ion-item text-center no-padding>\n      <ngx-qrcode [qrc-value] ="parObj.createdat + parObj.createdat" qrc-class ="aclass" qrc-errorCorrectionLevel="L"></ngx-qrcode>\n      <span text-center class="text2 txt-light" style="font-size:10px">Community Center QR access Code<i class="fa fa-arrow-up" style="margin-left:5px"></i> </span>\n      <span text-center class="text2 txt-light" style="font-size:12px;display:block;margin-top:5px;color:#04679b;font-weight:500">{{parObj.name}}: \n        {{parObj.zeegnalcode}}</span>\n    </ion-item>\n    </ion-row>\n   <div style="margin-top: 10px;text-align:left">\n    <ion-list inset>\n   \n  <button ion-item>\n   Make Payments <!--<i style="padding-left:5px" class="fa fa-angle-double-right"></i> --> \n  </button> \n<button ion-item>\n  Market Place <!--<i style="padding-left:5px" class="fa fa-angle-double-right"></i> --> \n  </button> \n <button ion-item>\n  Complaints <!-- <i style="padding-left:5px" class="fa fa-angle-double-right"></i> -->\n  </button> \n  <button ion-item>\n  Invitations <!-- <i style="padding-left:5px" class="fa fa-angle-double-right"></i> -->\n  </button>\n<button ion-item>\n  Elections <!-- <i style="padding-left:5px" class="fa fa-angle-double-right"></i> -->\n  </button> \n<button ion-item>\n  Surveys  <!-- <i style="padding-left:5px" class="fa fa-angle-double-right"></i> -->\n</button> \n\n</ion-list>\n			</div> 						\n             \n   \n						\n					</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/communitydetail/communitydetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CommunitydetailPage);
    return CommunitydetailPage;
}());

//# sourceMappingURL=communitydetail.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntercodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntercodePage = /** @class */ (function () {
    function EntercodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zeegnalreference = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', {});
    }
    EntercodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntercodePage');
    };
    EntercodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-entercode',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/entercode/entercode.html"*/'<!--\n  Generated template for the EntercodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Enter Access Code</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n      <ion-input formControlName="zeegnalreference" type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input formControlName="zeegnalreference" type="text"></ion-input>\n  </ion-item>\n  <button ion-button type="submit">Access</button>\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/entercode/entercode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], EntercodePage);
    return EntercodePage;
}());

//# sourceMappingURL=entercode.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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
 * Generated class for the InvitedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitedetailPage = /** @class */ (function () {
    function InvitedetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hashstring = this.navParams.get('hashstring');
        this.parObj = this.navParams.get('paramObj');
        var startMoment = __WEBPACK_IMPORTED_MODULE_2_moment__(this.parObj.invitestart);
        var endMoment = __WEBPACK_IMPORTED_MODULE_2_moment__(this.parObj.inviteend);
        this.startdate = startMoment.calendar();
        this.enddate = endMoment.calendar();
        var nowtime = new Date();
        var starttime = new Date(this.parObj.invitestart);
        console.log(starttime);
        if (starttime < nowtime) {
            this.arrivaltimestatus = false;
        }
        else {
            this.arrivaltimestatus = true;
        }
        console.log(this.arrivaltimestatus);
    }
    InvitedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitedetailPage');
    };
    InvitedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invitedetail',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/invitedetail/invitedetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Invite</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n			<div class="vertical-center txt-center">\n						\n              <span class="txt-center" style="font-size:12px;text-transform: uppercase;">Your invite to {{parObj.name}}</span>\n              \n      \n      <ion-row data-transation="fadeInDown" data-start-time="400">\n      <ion-item text-center no-padding>\n      <ngx-qrcode [qrc-value] ="hashstring" qrc-class ="aclass" qrc-errorCorrectionLevel="L"></ngx-qrcode>\n      <span text-center class="text2 txt-light" style="font-size:10px">Show this on arrival<i class="fa fa-arrow-up" style="margin-left:5px"></i> </span>\n      <span text-center class="text2 txt-light" style="font-size:12px;display:block;margin-top:5px;color:#04679b;font-weight:500">Or use access Code: \n        {{parObj.reference}}</span>\n    </ion-item>\n    </ion-row>\n   \n							<div style="margin-top: 20px;">\n                <span text-left class="text2 block txt-light" style="font-size:14px">You are Visting {{parObj.fromfirstname}}  {{parObj.fromlastname}}</span>\n              <hr/>\n              <span text-left  *ngIf="!arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> You had access since {{startdate}}</span>\n               <span text-left *ngIf="arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> You have access from {{startdate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> But be there before {{enddate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invite is {{parObj.invitestatus}}</span>\n              <hr/>\n             \n							</div>\n						\n					</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/invitedetail/invitedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], InvitedetailPage);
    return InvitedetailPage;
}());

//# sourceMappingURL=invitedetail.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__communitydetail_communitydetail__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlacesPage = /** @class */ (function () {
    function PlacesPage(navCtrl, navParams, events, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.app = app;
        this.events.subscribe('retreive:community', function (data, time) {
            console.log(data);
            console.log(time);
            _this.communityarray = data;
        });
    }
    PlacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacesPage');
    };
    PlacesPage.prototype.gotoplacesdetail = function (objectparam) {
        console.log("go to places detail");
        console.log(objectparam);
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_0__communitydetail_communitydetail__["a" /* CommunitydetailPage */], { paramObj: objectparam }, { animation: 'ios-transition' });
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-places',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/places/places.html"*/'<!--\n  Generated template for the PlacesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-list no-lines>\n   <ion-item-sliding  *ngFor ="let item of communityarray">\n     <ion-item  style="border-bottom:0.25px solid #c8c7cc;" (click)="gotoplacesdetail(item)">\n    <ion-avatar item-start >\n         <ngx-avatar name="{{item.name}} {{item.zeegnalcode}}"></ngx-avatar>\n  </ion-avatar>\n    <h2 style="font-weight:bold;font-size: 14px;">{{item.name}} {{item.zeegnalcode}}</h2>\n         <span style="font-size:10px;font-size: 10px;position: absolute;top: 8px;\n    right: 10px;color:grey" *ngIf="item.category==\'Company\'" item-end ><i class="fa fa-2x fa-building"></i></span>\n       <span style="font-size:10px;font-size: 10px;position: absolute;top: 8px;\n    right: 10px;color:grey"   *ngIf="item.category==\'Estate\'" item-end><i class="fa fa-2x fa-home"></i></span> \n    <p style="font-size:12px">{{item.membercode}} | {{item.category}}</p>\n    <p style="font-size:12px">{{item.phonenumber}}</p>\n    <p style="font-size:12px">{{item.memberstatus}}</p>\n       </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="light">\n        <ion-icon name="trash"></ion-icon>\n        <small>Exit <br/>{{item.name}}</small>\n      </button>\n    </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/places/places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestdetail_requestdetail__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, navParams, http, alertCtrl, events, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.app = app;
        console.log("all invitation obj", JSON.stringify(this.receivedarray));
        this.events.subscribe('requests:retrieved', function (result, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('Invites returned', result, 'at', time);
            _this.receivedarray = result;
        });
    }
    RequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    RequestPage.prototype.gotorequestdetail = function (object) {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_1__requestdetail_requestdetail__["a" /* RequestdetailPage */], { hashstring: object.hashstring, paramObj: object }, { animation: 'ios-transition' });
    };
    RequestPage.prototype.createNewInvite = function () {
        console.log(" Create a new Invite to your estate");
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */]);
    };
    RequestPage.prototype.calctimeleft = function (timestring) {
        if (timestring) {
            var timemoment = __WEBPACK_IMPORTED_MODULE_5_moment__(timestring);
            this.showemptylist = false;
            return timemoment.fromNow();
        }
        else {
            this.showemptylist = true;
            return "";
        }
    };
    RequestPage.prototype.doRefresh = function (ev) {
        var _this = this;
        console.log(ev);
        var userphonenumber = "";
        if (localStorage.getItem("userphonenumber")) {
            userphonenumber = localStorage.getItem("userphonenumber");
        }
        var requesturl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
        var requestobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: "", fromphonenumber: userphonenumber, tofirstname: "", tolastname: "", invitestart: "", inviteend: "", zeegnalcode: "" };
        console.log("refresher ", requestobj);
        this.http.post(requesturl, requestobj).subscribe(function (data) {
            ev.complete();
            if (data['responsecode'] == "00") {
                console.log("All Requests returned");
                console.log(data['result']);
                localStorage.setItem("allrequestsobj", JSON.stringify(data['result']));
                data['result'].sort(function (a, b) {
                    if (a.id > b.id) {
                        return -1;
                    }
                    else if (a.id < b.id) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                _this.events.publish('requests:retrieved', data['result'], Date.now());
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Notification',
                    subTitle: (data['responsemessage']),
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Notification',
                subTitle: (err),
                buttons: ['OK']
            });
            alert.present();
        });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-request',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/request/request.html"*/'<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list no-lines>\n  <ion-item  *ngFor ="let inviteitem of receivedarray" (click)="gotorequestdetail(inviteitem)" style="border-bottom:0.25px solid #c8c7cc;">\n    <ion-avatar item-start >\n         <ngx-avatar name="{{inviteitem.tofirstname}} {{inviteitem.tolastname}}"></ngx-avatar>\n  </ion-avatar>\n    <h2 style="font-weight:bold;font-size: 14px;">{{inviteitem.tofirstname}} {{inviteitem.tolastname}}</h2>\n        <span style="font-size:10px;font-size: 10px;position: absolute;top: 8px;\n    left: 220px;color: rgba(0, 0, 0, 0.5)" item-end>\n      <i style="padding-right:2px" class="fa fa-clock-o"></i>\n     {{inviteitem.createdat | date:\'shortTime\'}} {{calctimeleft(inviteitem.createdat)}}</span>\n    <p style="font-size:12px">{{inviteitem.tophonenumber}}</p>\n    <p style="font-size:12px">{{inviteitem.name}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light" (click)="createNewInvite()">  <ion-icon ios="ios-add" md="md-add"></ion-icon></button>\n    <!-- <ion-fab-list side="left">\n      <button ion-fab><ion-icon ios="ios-add" md="md-add" ></ion-icon></button>\n    </ion-fab-list> -->\n  </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]])
    ], RequestPage);
    return RequestPage;
}());

function getguid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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
 * Generated class for the RequestdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestdetailPage = /** @class */ (function () {
    function RequestdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hashstring = this.navParams.get('hashstring');
        this.parObj = this.navParams.get('paramObj');
        var startMoment = __WEBPACK_IMPORTED_MODULE_2_moment__(this.parObj.invitestart);
        var endMoment = __WEBPACK_IMPORTED_MODULE_2_moment__(this.parObj.inviteend);
        this.startdate = startMoment.calendar();
        this.enddate = endMoment.calendar();
        var nowtime = new Date();
        var starttime = new Date(this.parObj.invitestart);
        console.log(starttime);
        if (starttime < nowtime) {
            this.arrivaltimestatus = false;
        }
        else {
            this.arrivaltimestatus = true;
        }
        console.log(this.arrivaltimestatus);
    }
    RequestdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestdetailPage');
    };
    RequestdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-requestdetail',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/requestdetail/requestdetail.html"*/'<!--\n  Generated template for the RequestdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n			<div class="vertical-center txt-center">\n						\n              <span class="txt-center" style="font-size:12px;text-transform: uppercase;">Your sent invitation to {{parObj.tofirstname}}  {{parObj.tolastname}}<br/> visiting {{parObj.name}}</span>\n              \n      \n      <ion-row data-transation="fadeInDown" data-start-time="400">\n      <ion-item text-center no-padding>\n      <ngx-qrcode [qrc-value] ="hashstring" qrc-class ="aclass" qrc-errorCorrectionLevel="L"></ngx-qrcode>\n      <span text-center class="text2 txt-light" style="font-size:12px;display:block;margin-top:5px;color:#04679b;font-weight:500">Access Code: \n        {{parObj.reference}}</span>\n    </ion-item>\n    </ion-row>\n   \n							<div style="margin-top: 20px;">\n                <span text-left class="text2 block txt-light" style="font-size:14px">{{parObj.tofirstname}}  {{parObj.tolastname}} is visiting you</span>\n              <hr/>\n              <span text-left  *ngIf="!arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> {{parObj.tofirstname}}  {{parObj.tolastname}} has had access since {{startdate}}</span>\n               <span text-left *ngIf="arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> {{parObj.tofirstname}}  {{parObj.tolastname}} will have access from {{startdate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invitation expires  {{enddate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invitation is {{parObj.invitestatus}}</span>\n              <hr/>\n             \n							</div>\n						\n					</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/requestdetail/requestdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], RequestdetailPage);
    return RequestdetailPage;
}());

//# sourceMappingURL=requestdetail.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/communitydetail/communitydetail.module": [
		469,
		7
	],
	"../pages/entercode/entercode.module": [
		470,
		6
	],
	"../pages/invitedetail/invitedetail.module": [
		471,
		5
	],
	"../pages/places/places.module": [
		472,
		4
	],
	"../pages/request/request.module": [
		473,
		3
	],
	"../pages/requestdetail/requestdetail.module": [
		474,
		2
	],
	"../pages/scanner/scanner.module": [
		475,
		1
	],
	"../pages/userprofile/userprofile.module": [
		476,
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
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_usernamevalidator__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(304);
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
    function AboutPage(navCtrl, formBuilder, http, loadingCtrl, alertCtrl, app, supertabsctrl, events, contacts) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.supertabsctrl = supertabsctrl;
        this.events = events;
        this.contacts = contacts;
        this.submitAttempt = false;
        this.pickfromphonebookflag = true;
        this.createInviteForm = formBuilder.group({
            userphone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]), __WEBPACK_IMPORTED_MODULE_1__validators_usernamevalidator__["a" /* UsernameValidator */].checkUsername],
            community: ['Please Choose a community']
        });
        this.supplyUserDetailsForm = formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])],
            startdate: [''],
            enddate: ['']
        });
        this.supplydateForm = formBuilder.group({
            startday: [''],
            starttime: [''],
            endday: [''],
            endtime: ['']
        });
        events.subscribe('retreive:community', function (results, time) {
            // user and time are the same arguments passed in `events.publish(user, time)
            _this.communities = results;
            console.log('Welcome', results, 'at', time);
        });
        this.communities = JSON.parse(localStorage.getItem("communitiesarray"));
        // console.log(this.createformslider.isBeginning());
    }
    AboutPage.prototype.slideNext = function () {
        this.createformslider.slideNext();
    };
    AboutPage.prototype.checkPhoneBook = function () {
        var _this = this;
        console.log("check phone book");
        // this.createInviteForm.setValue({userphone:"08182120030"});
        var alert = this.alertCtrl.create({
            title: 'PhoneBook',
            message: 'Do you want to pick from Phonebook?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.pickfromphonebookflag = false;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes pick from PhoneBook');
                        _this.contacts.pickContact().then(function (pickedcontact) {
                            console.log(JSON.stringify(pickedcontact));
                            console.log("select just phone no");
                            var cnt = pickedcontact;
                            console.log(cnt.phoneNumbers[0].value);
                            var phonenum = cnt.phoneNumbers[0].value;
                            phonenum = phonenum.replace(/\D/g, '');
                            _this.createInviteForm.controls['userphone'].setValue(phonenum);
                        }, function (err) {
                            console.log("error occurred");
                            console.log(err);
                        });
                        // this.createInviteForm.controls['userphone'].setValue("08182120030");
                    }
                }
            ]
        });
        alert.present();
    };
    AboutPage.prototype.slidePrev = function () {
        this.createformslider.slidePrev();
    };
    AboutPage.prototype.loadComms = function () {
        console.log("Load Comms");
        this.communities = JSON.parse(localStorage.getItem("communitiesarray"));
    };
    AboutPage.prototype.createZeegnal = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.createInviteForm.valid) {
            this.createformslider.slideTo(0);
        }
        else if (!this.supplyUserDetailsForm.valid) {
            this.createformslider.slideTo(1);
        }
        else if (!this.supplydateForm.valid) {
            this.createformslider.slideTo(2);
        }
        else {
            this.submitAttempt = false;
            console.log("success!");
            console.log(this.createInviteForm.value);
            console.log(this.supplyUserDetailsForm.value);
            console.log(this.supplydateForm.value);
            var start_date = this.supplydateForm.value.startday + ' ' + this.supplydateForm.value.starttime + '.000';
            var end_date = this.supplydateForm.value.endday + ' ' + this.supplydateForm.value.endtime + '.000';
            var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/sendinvitation";
            var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: localStorage.getItem("userphonenumber"),
                tophonenumber: this.createInviteForm.value.userphone, tofirstname: this.supplyUserDetailsForm.value.firstname,
                tolastname: this.supplyUserDetailsForm.value.lastname, invitestart: start_date, inviteend: end_date,
                zeegnalcode: this.createInviteForm.value.community };
            console.log("Request Object to Create Zeegnal");
            console.log(epobj);
            var loader_1 = this.loadingCtrl.create({
                content: "Sending Zeegnal ..."
            });
            loader_1.present();
            this.http.post(epurl, epobj).subscribe(function (data) {
                loader_1.dismiss();
                console.log("Response Object from Create Zeegnal");
                console.log(data);
                if (data['responsecode'] == "00") {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Notification',
                        subTitle: data['responsemessage'],
                        buttons: [{
                                text: 'Ok',
                                handler: function (data) {
                                    console.log('Ok clicked');
                                    //this.navCtrl.push(HomePage)
                                    _this.createInviteForm.reset();
                                    _this.supplyUserDetailsForm.reset();
                                    _this.supplydateForm.reset();
                                    _this.createformslider.slideTo(0, 500);
                                    // this.supertabsctrl.slideTo(0);
                                    // this.app.getRootNavs()[0].push(HomePage);
                                }
                            }]
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Notification',
                        subTitle: data['responsemessage'],
                        buttons: [{
                                text: 'Ok',
                                handler: function (data) {
                                    console.log('Ok clicked');
                                    //this.navCtrl.push(HomePage)
                                    _this.createInviteForm.reset();
                                    _this.supplyUserDetailsForm.reset();
                                    _this.supplydateForm.reset();
                                    _this.createformslider.slideTo(0, 500);
                                    // this.supertabsctrl.slideTo(0);
                                    // this.app.getRootNavs()[0].push(HomePage);
                                }
                            }]
                    });
                    alert_2.present();
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    // fetchCommunities(){
    //     let loader = this.loadingCtrl.create({
    //       content: "Please Wait..."
    //     });
    //     loader.present();
    //   let epurl ="http://35.164.119.185:8080/zeegnal/api/operations/getcustomerscommunity";
    //   let epobj = {source:"MOBILE",transid:getguid(),sessid:getguid(),phonenumber:localStorage.getItem("userphonenumber")}
    //   console.log("Request Obj");
    //   console.log(JSON.stringify(epobj));
    //   this.http.post(epurl,epobj).subscribe((data) => {
    //      console.log(data);
    //      loader.dismiss();
    //     if(data['responsecode'] =="00"){
    //         this.communities = data['result'];
    //     }else{
    //            let al = this.alertCtrl.create({
    //                 title: 'Notification',
    //                 subTitle:data['responsemessage'],
    //                 buttons: ['Ok']
    //               });
    //           al.present();
    //     }
    //   })
    // }
    AboutPage.prototype.slideChanged = function () {
        var slideindx = this.createformslider.getActiveIndex();
        console.log("current index", slideindx);
        if (slideindx == 0) {
            this.communities = JSON.parse(localStorage.getItem("communitiesarray"));
        }
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log("init slider form");
        this.createInviteForm.reset();
        this.supplyUserDetailsForm.reset();
        this.supplydateForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__["a" /* SuperTabs */])
    ], AboutPage.prototype, "superTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('createformslider'),
        __metadata("design:type", Object)
    ], AboutPage.prototype, "createformslider", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title>New Zeegnal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  \n  </ion-navbar>\n  <!-- \n  <ion-navbar>\n    <ion-title>Zeegnal</ion-title>\n  </ion-navbar> \n  -->\n</ion-header>\n\n<ion-content>\n  <ion-slides #createformslider style="margin-top:80px"  (ionSlideDidChange)="slideChanged()" (ionSlideTap)="loadComms()">\n    <ion-slide>\n          <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n        <form [formGroup]="createInviteForm">\n          <ion-list>\n          <ion-item>\n                <ion-label floating style="font-weight:200">Guest Phone Number</ion-label>\n                <ion-input formControlName="userphone" type="tel" style="font-weight:200"></ion-input>\n          </ion-item>\n              <ion-item no-lines>\n                <button ion-button (click)="checkPhoneBook()">Check Phonebook</button>\n              </ion-item>\n          <ion-item>\n            <ion-label style="font-weight:200;" floating>Community</ion-label>\n            <ion-select formControlName="community"  no-padding style="font-weight:200;">\n              <ion-option  *ngFor="let citem of communities" [value]="citem.zeegnalcode">{{citem.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n            <ion-item no-lines>\n                  <button ion-button color="uniformgrey" (click)="slideNext()" style="width:80px">Send</button>\n            </ion-item>\n          </ion-list>\n      </form>\n    </ion-slide>\n        \n    <ion-slide>\n      <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n      <form [formGroup]="supplyUserDetailsForm">\n        <ion-item>\n          <ion-label floating style="font-weight:200;">First Name</ion-label>\n          <ion-input formControlName="firstname" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating style="font-weight:200;">Last Name</ion-label>\n          <ion-input formControlName="lastname" type="text"></ion-input>\n        </ion-item>\n\n          <ion-item no-lines>\n                  <button ion-button item-start color="uniformgrey"  (click)="slidePrev()"  style="width:80px">Back</button>\n                  <button ion-button item-end color="uniformgrey"  (click)="slideNext()"  style="width:80px">Next</button>\n              </ion-item>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <form [formGroup]="supplydateForm">\n        <ion-row>\n          <ion-col col-6>\n    <ion-item>\n          <ion-label floating style="font-weight:200;">Arrival Day</ion-label>\n          <ion-datetime formControlName="startday" displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" padding></ion-datetime>\n        </ion-item>\n          </ion-col>\n          <ion-col col-6>\n <ion-item>\n          <ion-label floating style="font-weight:200;"> Time</ion-label>\n          <ion-datetime formControlName="starttime" displayFormat="HH:mm:ss" pickerFormat="HH:mm:ss" padding></ion-datetime>\n        </ion-item>\n          </ion-col>\n        \n        </ion-row>\n         <ion-row>\n           <ion-col col-6>\n        <ion-item>\n          <ion-label floating style="font-weight:200;"> Till Date</ion-label>\n          <ion-datetime formControlName="endday" displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" padding></ion-datetime>\n        </ion-item>\n           </ion-col>\n            <ion-col col-6>\n          <ion-item>\n          <ion-label floating style="font-weight:200;"> Time</ion-label>\n          <ion-datetime formControlName="endtime" displayFormat="HH:mm:ss" pickerFormat="HH:mm:ss" padding></ion-datetime>\n        </ion-item>\n      </ion-col>\n        \n         </ion-row>\n       \n        <ion-item no-lines>\n                  <button ion-button item-start color="uniformgrey"  (click)="slidePrev()"  style="width:80px">Back</button>\n\n                  <button ion-button item-end color="uniformgrey"  (click)="createZeegnal()"  style="width:100px">Confirm</button>\n              </ion-item>\n      </form>\n    </ion-slide>\n\n  </ion-slides>\n\n<!-- <form [formGroup]="createform">\n      <ion-item>\n      <ion-label floating>Phone Number</ion-label>\n      <ion-input formControlName="phonenumber" type="number"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input formControlName="firstname" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input formControlName="lastname" type="text"></ion-input>\n      </ion-item>\n</form> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__["b" /* SuperTabsController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["b" /* Contacts */]])
    ], AboutPage);
    return AboutPage;
}());

function getguid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__places_places__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__request_request__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__ = __webpack_require__(351);
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
    function TabsPage(superTabsCtrl, http, alertCtrl, loadingCtrl, navParams, zeegnalservice, events, simCtrl, toastCtrl, platform, appMinimize) {
        var _this = this;
        this.superTabsCtrl = superTabsCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.zeegnalservice = zeegnalservice;
        this.events = events;
        this.simCtrl = simCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.appMinimize = appMinimize;
        this.platform.registerBackButtonAction(function () {
            console.log("back button presed");
            _this.appMinimize.minimize();
        });
        this.platform.ready().then(function (info) {
            console.log("Platform ready");
            _this.detectPhoneNumber();
        }, function (err) {
            console.log(" Platform not ready");
        });
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_7__request_request__["a" /* RequestPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__places_places__["a" /* PlacesPage */];
        superTabsCtrl.enableTabsSwipe(true);
        superTabsCtrl.showToolbar(true);
        // this.userInfo = this.getallrequests();
        //  this.detectPhoneNumber();
    }
    TabsPage.prototype.onTabSelect = function (ev) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
        if (ev.index == 0) {
            this.getinviterequestnoloading();
        }
        if (ev.index == 1) {
            this.getinviterequestnoloading();
        }
        if (ev.index == 2) {
            this.getallcommunities(localStorage.getItem("userphonenumber"));
        }
    };
    TabsPage.prototype.showToolbar = function () {
        this.superTabsCtrl.showToolbar(true);
    };
    TabsPage.prototype.ngAfterViewInit = function () {
        // must wait for AfterViewInit if you want to modify the tabs instantly
        console.log("View Init");
    };
    TabsPage.prototype.detectPhoneNumber = function () {
        var _this = this;
        console.log("Detect phone number");
        this.numberfromsim = "";
        console.log(this.numberfromsim);
        var userphonenumber = localStorage.getItem("userphonenumber");
        if (userphonenumber != undefined && userphonenumber != "" && userphonenumber != null && userphonenumber != {}) {
            console.log("number has been detected ", userphonenumber);
            this.getallinvitesandrequests(userphonenumber);
        }
        else {
            this.simCtrl.getSimInfo().then(function (data) {
                console.log('Sim info: ');
                console.log(JSON.stringify(data));
                if (data.phoneNumber) {
                    _this.numberfromsim = data.phoneNumber;
                    _this.numberfromsim = _this.numberfromsim.replace(/\D/g, '');
                }
                var prompt = _this.alertCtrl.create({
                    title: 'Hi',
                    message: "Seems you're new on Zeegnal<br/> Let's have your <b>Mobile Phone</b> number",
                    inputs: [
                        {
                            name: 'phonenumber',
                            placeholder: 'Phone Number',
                            type: 'tel',
                            value: _this.numberfromsim
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: function (data) {
                                console.log('Cancel clicked');
                                _this.detectPhoneNumber();
                                return;
                            },
                            role: 'cancel'
                        },
                        {
                            text: 'Ok',
                            handler: function (data) {
                                console.log("number has been detected ", data.phonenumber);
                                localStorage.setItem("userphonenumber", data.phonenumber);
                                _this.getallinvitesandrequests(data.phonenumber);
                            }
                        }
                    ]
                });
                prompt.present();
            }, function (error) {
                console.log("error occurred getting sim data");
                console.log(error);
                var prompt = _this.alertCtrl.create({
                    title: 'Hi',
                    message: "Seems you're new on Zeegnal<br/> Let's have your <b>Mobile Phone</b> number",
                    inputs: [
                        {
                            name: 'phonenumber',
                            placeholder: 'Phone Number',
                            type: 'tel',
                            value: _this.numberfromsim
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: function (data) {
                                console.log('Cancel clicked');
                                _this.detectPhoneNumber();
                                return;
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function (data) {
                                console.log("number has been detected ", data.phonenumber);
                                localStorage.setItem("userphonenumber", data.phonenumber);
                                _this.getallinvitesandrequests(data.phonenumber);
                            }
                        }
                    ]
                });
                prompt.present();
            });
        }
    };
    TabsPage.prototype.getallinvites = function (phone) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        console.log("User Phone Number");
        console.log(phone);
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone, tophonenumber: phone };
        this.http.post(epurl, epobj).subscribe(function (data) {
            loader.dismiss();
            if (data['responsecode'] == "00") {
                console.log("All Invites returned");
                console.log(data['result']);
                _this.zeegnalservice.receivedinvites = data['result'];
                localStorage.setItem("allinvitationobj", JSON.stringify(data['result']));
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Notification',
                    subTitle: (data['responsemessage']),
                    buttons: ['OK']
                });
                alert_1.present();
                console.log(data['responsecode']);
                console.log(data['responsemessage']);
                console.log("Error retreiving invites");
            }
        }, function (err) {
            console.log("Error Invites");
            console.log(err);
        });
    };
    TabsPage.prototype.getinviterequestnoloading = function () {
        var _this = this;
        var phone = localStorage.getItem("userphonenumber");
        var requesturl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
        var requestobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: "", fromphonenumber: phone, tofirstname: "", tolastname: "", invitestart: "", inviteend: "", zeegnalcode: "" };
        console.log("User Phone Number");
        console.log(phone);
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone, tophonenumber: phone };
        this.http.post(epurl, epobj).subscribe(function (data) {
            if (data['responsecode'] == "00") {
                console.log("All Invites returned");
                data['result'].sort(function (a, b) {
                    if (a.id > b.id) {
                        return -1;
                    }
                    else if (a.id < b.id) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                localStorage.setItem("allinvitationobj", JSON.stringify(data['result']));
                _this.events.publish('invitations:retrieved', data['result'], Date.now());
            }
            else {
                // let alert = this.alertCtrl.create({
                //   title: 'Notification',
                //   subTitle: (data['responsemessage']),
                //   buttons: ['OK']
                // });
                // alert.present();
                var toast = _this.toastCtrl.create({
                    message: JSON.stringify(data['responsemessage']),
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                console.log(data['responsecode']);
                console.log(data['responsemessage']);
                console.log("Error retreiving invites");
            }
            _this.getallcommunities(phone);
            _this.http.post(requesturl, requestobj).subscribe(function (data) {
                if (data['responsecode'] == "00") {
                    console.log("All Requests returned");
                    console.log(data['result']);
                    localStorage.setItem("allrequestsobj", JSON.stringify(data['result']));
                    data['result'].sort(function (a, b) {
                        if (a.id > b.id) {
                            return -1;
                        }
                        else if (a.id < b.id) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    _this.events.publish('requests:retrieved', data['result'], Date.now());
                }
                else {
                    //  let alert = this.alertCtrl.create({
                    //   title: 'Notification',
                    //   subTitle: (data['responsemessage']),
                    //   buttons: ['OK']
                    //   });
                    //     alert.present();
                    console.log(JSON.stringify(data));
                    var toast = _this.toastCtrl.create({
                        message: JSON.stringify(data['responsemessage']),
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, function (err) {
                // let alert = this.alertCtrl.create({
                // title: 'Notification',
                // subTitle: (JSON.stringify(err)),
                // buttons: ['OK']
                // });
                //   alert.present();
                var toast = _this.toastCtrl.create({
                    message: JSON.stringify(err),
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        }, function (err) {
            console.log("Error Invites");
            console.log(err);
            //  let alert = this.alertCtrl.create({
            //   title: '',
            //   subTitle: (JSON.stringify(err)),
            //   buttons: ['OK']
            // });
            // alert.present();
            var toast = _this.toastCtrl.create({
                message: JSON.stringify(err),
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    TabsPage.prototype.getallinvitesandrequests = function (phone) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        var requesturl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
        var requestobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: "", fromphonenumber: phone, tofirstname: "", tolastname: "", invitestart: "", inviteend: "", zeegnalcode: "" };
        console.log("User Phone Number");
        console.log(phone);
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone, tophonenumber: phone };
        this.http.post(epurl, epobj).subscribe(function (data) {
            if (data['responsecode'] == "00") {
                console.log("All Invites returned");
                console.log(data['result']);
                data['result'].sort(function (a, b) {
                    if (a.id > b.id) {
                        return -1;
                    }
                    else if (a.id < b.id) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                localStorage.setItem("allinvitationobj", JSON.stringify(data['result']));
                _this.events.publish('invitations:retrieved', data['result'], Date.now());
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data['responsemessage'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                console.log(data['responsecode']);
                console.log(data['responsemessage']);
                console.log("Error retreiving invites");
            }
            var communitiesarray = [];
            var commurl = "http://35.164.119.185:8080/zeegnal/api/operations/getcustomerscommunity";
            var commobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone };
            _this.http.post(commurl, commobj).subscribe(function (data) {
                console.log(data);
                if (data['responsecode'] == "00") {
                    communitiesarray = data['result'];
                    localStorage.setItem("communitiesarray", JSON.stringify(communitiesarray));
                    _this.events.publish('retreive:community', communitiesarray, Date());
                }
                else {
                    console.log(data['responsemessage']);
                    //  let al = this.alertCtrl.create({
                    //       title: 'Notification',
                    //       subTitle:data['responsemessage'],
                    //       buttons: ['Ok']
                    //     });
                    // al.present();
                }
            });
            _this.http.post(requesturl, requestobj).subscribe(function (data) {
                loader.dismiss();
                if (data['responsecode'] == "00") {
                    console.log("All Requests returned");
                    data['result'].sort(function (a, b) {
                        if (a.id > b.id) {
                            return -1;
                        }
                        else if (a.id < b.id) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    console.log(data['result']);
                    localStorage.setItem("allrequestsobj", JSON.stringify(data['result']));
                    _this.events.publish('requests:retrieved', data['result'], Date.now());
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data['responsemessage'],
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: JSON.stringify(err),
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        }, function (err) {
            console.log("Error Invites");
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: JSON.stringify(err),
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    TabsPage.prototype.getallcommunities = function (phone) {
        var _this = this;
        var communitiesarray = [];
        var commurl = "http://35.164.119.185:8080/zeegnal/api/operations/getcustomerscommunity";
        var commobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone };
        this.http.post(commurl, commobj).subscribe(function (data) {
            console.log(data);
            if (data['responsecode'] == "00") {
                communitiesarray = data['result'];
                localStorage.setItem("communitiesarray", JSON.stringify(communitiesarray));
                _this.events.publish('retreive:community', communitiesarray, Date());
            }
            else {
                console.log(data['responsemessage']);
                //  let al = this.alertCtrl.create({
                //       title: 'Notification',
                //       subTitle:data['responsemessage'],
                //       buttons: ['Ok']
                //     });
                // al.present();
            }
        });
    };
    TabsPage.prototype.getallrequests = function () {
        var userphonenumber = localStorage.getItem("userphonenumber");
        console.log("Do get Pending Requests");
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: "", fromphonenumber: "", tophonenumber: userphonenumber };
        return this.zeegnalservice.getSentZeegnalService(epobj).map(function (data) { return data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabs */])
    ], TabsPage.prototype, "superTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('formslider'),
        __metadata("design:type", Object)
    ], TabsPage.prototype, "formslider", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/tabs/tabs.html"*/'\n<ion-header>\n<ion-toolbar>\n   \n    <ion-title>Zeegnal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <!-- <ion-navbar>\n    <ion-title>Zeegnal</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n<ion-content>\n<super-tabs  no-shadow id="mainTabs" tabsPlacement="top" selectedTabIndex="0" toolbarBackground="light"  indicatorColor="softgrey" badgeColor="light" [config]="{ sideMenu: \'both\' }" (tabSelect)="onTabSelect($event)">\n  <super-tab [root]="tab1Root" title="My Hosts" id="inviteTab"></super-tab>\n  <super-tab [root]="tab2Root" title="My Guests" id="outboxTab"></super-tab>\n  <super-tab [root]="tab3Root" title="My Places" icon="" id="newrequestTab"> </super-tab>\n</super-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["b" /* SuperTabsController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_zeegnalservice_zeegnalservice__["a" /* ZeegnalserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__["a" /* Sim */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__["a" /* AppMinimize */]])
    ], TabsPage);
    return TabsPage;
}());

function getguid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entercode_entercode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitedetail_invitedetail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_dialogs__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
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
    function HomePage(navCtrl, barcodeScanner, http, dialogCtrl, simCtrl, loadingCtrl, alertCtrl, superTabsCtrl, app, zeegnalervice, nvparams, events) {
        // this.allinvitationobj = JSON.parse(localStorage.getItem("allinvitationobj"));
        // console.log("all invitation obj",JSON.stringify(this.allinvitationobj));
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.http = http;
        this.dialogCtrl = dialogCtrl;
        this.simCtrl = simCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.superTabsCtrl = superTabsCtrl;
        this.app = app;
        this.zeegnalervice = zeegnalervice;
        this.nvparams = nvparams;
        this.events = events;
        this.events.subscribe('invitations:retrieved', function (result, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('Invites returned', result, 'at', time);
            _this.allinvitationobj = result;
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    HomePage.prototype.doRefresh = function (ev) {
        var _this = this;
        console.log(ev);
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var phone = localStorage.getItem("userphonenumber");
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone, tophonenumber: phone };
        console.log(epobj);
        console.log(epurl);
        this.http.post(epurl, epobj).subscribe(function (data) {
            loader.dismiss();
            ev.complete();
            if (data['responsecode'] == "00") {
                console.log("All Invites returned");
                localStorage.removeItem("allinvitationobj");
                localStorage.setItem("allinvitationobj", JSON.stringify(data['result'].sort(function (a, b) {
                    if (a.id > b.id) {
                        return -1;
                    }
                    else if (a.id < b.id) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                })));
                _this.events.publish('invitations:retrieved', data['result'], Date.now);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Notification',
                    subTitle: (data['responsemessage']),
                    buttons: ['OK']
                });
                alert_1.present();
                console.log(data['responsecode']);
                console.log(data['responsemessage']);
                console.log("Error retreiving invites");
            }
        }, function (err) {
            console.log("Error Invites");
            console.log(err);
        });
    };
    HomePage.prototype.calctimeleft = function (timestring) {
        if (timestring) {
            var timemoment = __WEBPACK_IMPORTED_MODULE_10_moment__(timestring);
            this.showemptylist = false;
            return timemoment.fromNow();
        }
        else {
            this.showemptylist = true;
            return "";
        }
    };
    HomePage.prototype.gotoinvitedetail = function (object) {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_2__invitedetail_invitedetail__["a" /* InvitedetailPage */], { hashstring: object.hashstring, paramObj: object }, {
            animation: 'ios-transition'
        });
    };
    HomePage.prototype.hideToolbar = function () {
        this.superTabsCtrl.showToolbar(false);
    };
    HomePage.prototype.showToolbar = function () {
        this.superTabsCtrl.showToolbar(true);
    };
    HomePage.prototype.onTabSelect = function (ev) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    };
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
    };
    HomePage.prototype.getallcommunities = function (phone) {
        var _this = this;
        var communitiesarray = [];
        var loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        loader.present();
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/getcustomerscommunity";
        var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone };
        console.log("Request Object");
        console.log(JSON.stringify(epobj));
        this.http.post(epurl, epobj).subscribe(function (data) {
            console.log(data);
            loader.dismiss();
            if (data['responsecode'] == "00") {
                communitiesarray = data['result'];
                localStorage.setItem("communitiesarray", JSON.stringify(communitiesarray));
            }
            else {
                var al = _this.alertCtrl.create({
                    title: 'Notification',
                    subTitle: data['responsemessage'],
                    buttons: ['Ok']
                });
                al.present();
            }
        });
    };
    HomePage.prototype.getallinvites = function (phone) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        console.log("User Phone Number");
        console.log(phone);
        var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        var epobj = { source: "MOBILE", transid: getguid(), sessid: getguid(), phonenumber: phone, tophonenumber: phone };
        this.http.post(epurl, epobj).subscribe(function (data) {
            loader.dismiss();
            if (data['responsecode'] == "00") {
                console.log("All Invites returned");
                localStorage.removeItem("allinvitationobj");
                localStorage.setItem("allinvitationobj", JSON.stringify(data['result']));
                _this.allinvitationobj = JSON.parse(localStorage.getItem("allinvitationobj"));
                _this.getallcommunities(localStorage.getItem("userphonenumber"));
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Notification',
                    subTitle: (data['responsemessage']),
                    buttons: ['OK']
                });
                alert_2.present();
                console.log(data['responsecode']);
                console.log(data['responsemessage']);
                console.log("Error retreiving invites");
            }
        }, function (err) {
            console.log("Error Invites");
            console.log(err);
        });
    };
    //+2348182120030
    HomePage.prototype.qrcodescan = function () {
        var _this = this;
        var options = {
            prompt: "Scan Visitor",
            resultDisplayDuration: 0,
            disableSuccessBeep: false
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            // Success! Barcode data is here
            console.log(" ******************  Success Data Scanned  *******************  ");
            console.log(JSON.stringify(barcodeData));
            _this.codetext = barcodeData.text;
            var epurl = "http://35.164.119.185:8080/zeegnal/api/operations/checkinvitation";
            var epobj = {};
            if (_this.codetext) {
                var sessreference = getguid();
                //this.codetext="Alimi|Omotayo|2347038901111|Alimi|Omotayo|2347038901111|ZE000IMPDON28|ZE000|Mar 15, 2018 9:50:22 PM|Mar 16, 2018 10:08:22 PM|used"
                //make http call to validate QR Code
                var codetextarr = _this.codetext.split('|');
                epobj.phonenumber = codetextarr[2];
                epobj.source = "MOBILE";
                epobj.transid = sessreference;
                epobj.sessid = sessreference;
                epobj.reference = codetextarr[6];
                epobj.zeegnalcode = codetextarr[7];
                epobj.tophonenumber = codetextarr[5];
                console.log("EP Object ");
                console.log(JSON.stringify(epobj));
                _this.presentLoading();
                _this.http.post(epurl, epobj).subscribe(function (result) {
                    if (result['responsecode'] == "00") {
                        console.log("Code Validated - success");
                        //this.showAlert("Success","Please Grant "+codetextarr[3]+" "+codetextarr[4]+" Access");
                        _this.dialogCtrl.alert("Please Grant " + codetextarr[3] + " " + codetextarr[4] + " Access", 'Success', 'Ok')
                            .then(function () {
                            console.log('Dialog dismissed');
                            _this.navCtrl.pop();
                        });
                        //  this.dialogs.alert("Please Grant "+codetextarr[3]+" "+codetextarr[4]+" Access")
                        //   .then(() => {
                        //     console.log('Dialog dismissed');
                        //     this.navCtrl.push(HomePage)
                        //   })
                        // .catch(e => console.log('Error displaying dialog', e));
                    }
                    else {
                        console.log("Code invalid - error");
                        //     this.dialogs.alert("Deny Access")
                        //   .then(() => {
                        //     console.log('Dialog dismissed');
                        //     this.navCtrl.push(HomePage)
                        //   })
                        // .catch(e => console.log('Error displaying dialog', e));
                        //this.showAlert("Notification","Please Deny Access");
                        _this.dialogCtrl.alert("Please Deny Access", 'Notification', 'Ok')
                            .then(function () {
                            console.log('Dialog dismissed');
                        });
                    }
                });
            }
            else {
                _this.dialogCtrl.alert("Unable Scan Code, Please enter your Zeegnal Code", 'Notification', 'Ok')
                    .then(function () {
                    console.log('Dialog dismissed');
                });
            }
        }, function (err) {
            // An error occurred
            console.log(" Error During Scanning ", err);
            JSON.stringify(err);
        });
    };
    HomePage.prototype.gotoentercode = function () {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_1__entercode_entercode__["a" /* EntercodePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/home/home.html"*/'\n<ion-content >\n<!-- <div>\n<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n</div> -->\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list no-lines>\n     <!-- <ion-item>{{(myjson | async)?.results[0].name.first}}</ion-item> -->\n  <ion-item *ngFor =" let inviteitem of allinvitationobj" (click)="gotoinvitedetail(inviteitem)" style="border-bottom:0.25px solid #c8c7cc;">\n    <!-- <ion-avatar item-start>\n      <ngx-qrcode [qrc-value]= "inviteitem.hashstring" qrc-class = "aclass"  qrc-errorCorrectionLevel = "L"></ngx-qrcode>\n    </ion-avatar> -->\n    <ion-avatar item-start>\n        <ngx-avatar  name="{{inviteitem.fromlastname}} {{inviteitem.fromfirstname}}"></ngx-avatar>\n    </ion-avatar>\n    <h2 style="font-weight:bold;font-size: 14px;">{{inviteitem.fromlastname}} {{inviteitem.fromfirstname}}</h2>\n    <span style="font-size:10px;font-size: 10px;position: absolute;top: 8px;\n    left: 210px;color: rgba(0, 0, 0, 0.5)" item-end>\n      <i style="padding-right:2px" class="fa fa-clock-o"></i>\n     {{inviteitem.createdat | date:\'shortTime\'}} {{calctimeleft(inviteitem.createdat)}}</span>\n    <p style="font-size:12px">{{inviteitem.fromphonenumber}}</p>\n    <p style="font-size:12px">{{inviteitem.name}}</p>\n  </ion-item>\n</ion-list>\n\n <ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="qrcodescan()"><ion-icon ios="ios-qr-scanner" md="md-qr-scanner" ></ion-icon></button>\n      <button ion-fab (click)="gotoentercode()"> <ion-icon ios="ios-settings" md="md-settings"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_dialogs__["a" /* Dialogs */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__["a" /* Sim */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["b" /* SuperTabsController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__providers_zeegnalservice_zeegnalservice__["a" /* ZeegnalserviceProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* Events */]])
    ], HomePage);
    return HomePage;
}());

function getguid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_communitydetail_communitydetail__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_places_places__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_requestdetail_requestdetail__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_request_request__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entercode_entercode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_invitedetail_invitedetail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_dialogs__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_sim__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_qrcode2__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_avatar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ngx_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_invitation_invitation__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_contacts__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_minimize__ = __webpack_require__(351);
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
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_5__pages_invitedetail_invitedetail__["a" /* InvitedetailPage */], __WEBPACK_IMPORTED_MODULE_4__pages_entercode_entercode__["a" /* EntercodePage */], __WEBPACK_IMPORTED_MODULE_3__pages_request_request__["a" /* RequestPage */], __WEBPACK_IMPORTED_MODULE_2__pages_requestdetail_requestdetail__["a" /* RequestdetailPage */], __WEBPACK_IMPORTED_MODULE_1__pages_places_places__["a" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_0__pages_communitydetail_communitydetail__["a" /* CommunitydetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], { scrollAssist: false }, {
                    links: [
                        { loadChildren: '../pages/communitydetail/communitydetail.module#CommunitydetailPageModule', name: 'CommunitydetailPage', segment: 'communitydetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entercode/entercode.module#EntercodePageModule', name: 'EntercodePage', segment: 'entercode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invitedetail/invitedetail.module#InvitedetailPageModule', name: 'InvitedetailPage', segment: 'invitedetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requestdetail/requestdetail.module#RequestdetailPageModule', name: 'RequestdetailPage', segment: 'requestdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_19_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_avatar__["AvatarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_5__pages_invitedetail_invitedetail__["a" /* InvitedetailPage */], __WEBPACK_IMPORTED_MODULE_4__pages_entercode_entercode__["a" /* EntercodePage */], __WEBPACK_IMPORTED_MODULE_3__pages_request_request__["a" /* RequestPage */], __WEBPACK_IMPORTED_MODULE_2__pages_requestdetail_requestdetail__["a" /* RequestdetailPage */], __WEBPACK_IMPORTED_MODULE_1__pages_places_places__["a" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_0__pages_communitydetail_communitydetail__["a" /* CommunitydetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_dialogs__["a" /* Dialogs */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_invitation_invitation__["a" /* InvitationProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_zeegnalservice_zeegnalservice__["a" /* ZeegnalserviceProvider */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_contacts__["b" /* Contacts */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_contacts__["a" /* Contact */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_minimize__["a" /* AppMinimize */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 174,
	"./af.js": 174,
	"./ar": 175,
	"./ar-dz": 176,
	"./ar-dz.js": 176,
	"./ar-kw": 177,
	"./ar-kw.js": 177,
	"./ar-ly": 178,
	"./ar-ly.js": 178,
	"./ar-ma": 179,
	"./ar-ma.js": 179,
	"./ar-sa": 180,
	"./ar-sa.js": 180,
	"./ar-tn": 181,
	"./ar-tn.js": 181,
	"./ar.js": 175,
	"./az": 182,
	"./az.js": 182,
	"./be": 183,
	"./be.js": 183,
	"./bg": 184,
	"./bg.js": 184,
	"./bm": 185,
	"./bm.js": 185,
	"./bn": 186,
	"./bn.js": 186,
	"./bo": 187,
	"./bo.js": 187,
	"./br": 188,
	"./br.js": 188,
	"./bs": 189,
	"./bs.js": 189,
	"./ca": 190,
	"./ca.js": 190,
	"./cs": 191,
	"./cs.js": 191,
	"./cv": 192,
	"./cv.js": 192,
	"./cy": 193,
	"./cy.js": 193,
	"./da": 194,
	"./da.js": 194,
	"./de": 195,
	"./de-at": 196,
	"./de-at.js": 196,
	"./de-ch": 197,
	"./de-ch.js": 197,
	"./de.js": 195,
	"./dv": 198,
	"./dv.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en-au": 200,
	"./en-au.js": 200,
	"./en-ca": 201,
	"./en-ca.js": 201,
	"./en-gb": 202,
	"./en-gb.js": 202,
	"./en-ie": 203,
	"./en-ie.js": 203,
	"./en-il": 204,
	"./en-il.js": 204,
	"./en-nz": 205,
	"./en-nz.js": 205,
	"./eo": 206,
	"./eo.js": 206,
	"./es": 207,
	"./es-do": 208,
	"./es-do.js": 208,
	"./es-us": 209,
	"./es-us.js": 209,
	"./es.js": 207,
	"./et": 210,
	"./et.js": 210,
	"./eu": 211,
	"./eu.js": 211,
	"./fa": 212,
	"./fa.js": 212,
	"./fi": 213,
	"./fi.js": 213,
	"./fo": 214,
	"./fo.js": 214,
	"./fr": 215,
	"./fr-ca": 216,
	"./fr-ca.js": 216,
	"./fr-ch": 217,
	"./fr-ch.js": 217,
	"./fr.js": 215,
	"./fy": 218,
	"./fy.js": 218,
	"./gd": 219,
	"./gd.js": 219,
	"./gl": 220,
	"./gl.js": 220,
	"./gom-latn": 221,
	"./gom-latn.js": 221,
	"./gu": 222,
	"./gu.js": 222,
	"./he": 223,
	"./he.js": 223,
	"./hi": 224,
	"./hi.js": 224,
	"./hr": 225,
	"./hr.js": 225,
	"./hu": 226,
	"./hu.js": 226,
	"./hy-am": 227,
	"./hy-am.js": 227,
	"./id": 228,
	"./id.js": 228,
	"./is": 229,
	"./is.js": 229,
	"./it": 230,
	"./it.js": 230,
	"./ja": 231,
	"./ja.js": 231,
	"./jv": 232,
	"./jv.js": 232,
	"./ka": 233,
	"./ka.js": 233,
	"./kk": 234,
	"./kk.js": 234,
	"./km": 235,
	"./km.js": 235,
	"./kn": 236,
	"./kn.js": 236,
	"./ko": 237,
	"./ko.js": 237,
	"./ky": 238,
	"./ky.js": 238,
	"./lb": 239,
	"./lb.js": 239,
	"./lo": 240,
	"./lo.js": 240,
	"./lt": 241,
	"./lt.js": 241,
	"./lv": 242,
	"./lv.js": 242,
	"./me": 243,
	"./me.js": 243,
	"./mi": 244,
	"./mi.js": 244,
	"./mk": 245,
	"./mk.js": 245,
	"./ml": 246,
	"./ml.js": 246,
	"./mr": 247,
	"./mr.js": 247,
	"./ms": 248,
	"./ms-my": 249,
	"./ms-my.js": 249,
	"./ms.js": 248,
	"./mt": 250,
	"./mt.js": 250,
	"./my": 251,
	"./my.js": 251,
	"./nb": 252,
	"./nb.js": 252,
	"./ne": 253,
	"./ne.js": 253,
	"./nl": 254,
	"./nl-be": 255,
	"./nl-be.js": 255,
	"./nl.js": 254,
	"./nn": 256,
	"./nn.js": 256,
	"./pa-in": 257,
	"./pa-in.js": 257,
	"./pl": 258,
	"./pl.js": 258,
	"./pt": 259,
	"./pt-br": 260,
	"./pt-br.js": 260,
	"./pt.js": 259,
	"./ro": 261,
	"./ro.js": 261,
	"./ru": 262,
	"./ru.js": 262,
	"./sd": 263,
	"./sd.js": 263,
	"./se": 264,
	"./se.js": 264,
	"./si": 265,
	"./si.js": 265,
	"./sk": 266,
	"./sk.js": 266,
	"./sl": 267,
	"./sl.js": 267,
	"./sq": 268,
	"./sq.js": 268,
	"./sr": 269,
	"./sr-cyrl": 270,
	"./sr-cyrl.js": 270,
	"./sr.js": 269,
	"./ss": 271,
	"./ss.js": 271,
	"./sv": 272,
	"./sv.js": 272,
	"./sw": 273,
	"./sw.js": 273,
	"./ta": 274,
	"./ta.js": 274,
	"./te": 275,
	"./te.js": 275,
	"./tet": 276,
	"./tet.js": 276,
	"./tg": 277,
	"./tg.js": 277,
	"./th": 278,
	"./th.js": 278,
	"./tl-ph": 279,
	"./tl-ph.js": 279,
	"./tlh": 280,
	"./tlh.js": 280,
	"./tr": 281,
	"./tr.js": 281,
	"./tzl": 282,
	"./tzl.js": 282,
	"./tzm": 283,
	"./tzm-latn": 284,
	"./tzm-latn.js": 284,
	"./tzm.js": 283,
	"./ug-cn": 285,
	"./ug-cn.js": 285,
	"./uk": 286,
	"./uk.js": 286,
	"./ur": 287,
	"./ur.js": 287,
	"./uz": 288,
	"./uz-latn": 289,
	"./uz-latn.js": 289,
	"./uz.js": 288,
	"./vi": 290,
	"./vi.js": 290,
	"./x-pseudo": 291,
	"./x-pseudo.js": 291,
	"./yo": 292,
	"./yo.js": 292,
	"./zh-cn": 293,
	"./zh-cn.js": 293,
	"./zh-hk": 294,
	"./zh-hk.js": 294,
	"./zh-tw": 295,
	"./zh-tw.js": 295
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 402;

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.checkUsername = function (control) {
        return new Promise(function (resolve) {
            //Fake a slow response from server
            console.log("running the checkusername validator");
            setTimeout(function () {
                if (control.value == "2348182120030") {
                    resolve({
                        "username taken": true
                    });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    return UsernameValidator;
}());

//# sourceMappingURL=usernamevalidator.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(347);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
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
    function ContactPage(navCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.receivedarray = [{}];
        var epurl = "";
        var epobj = {};
        if (localStorage.getItem("receiveditem") != "undefined") {
            this.receivedarray = JSON.parse(localStorage.getItem("receiveditem"));
        }
        else {
            this.alertCtrl.create({
                title: 'Notification',
                subTitle: 'You have no active Requests!',
                buttons: ['OK']
            });
        }
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        var phone = localStorage.getItem("userphonenumber");
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/contact/contact.html"*/'<ion-content padding>\n \n  <ion-list  *ngFor =" let inviteitem of receivedarray">\n  <ion-item>\n  <ion-avatar item-start>\n    <ngx-avatar  name="{{inviteitem.fromlastname}} {{inviteitem.fromfirstname}}"></ngx-avatar>\n    </ion-avatar>\n    <h2 style="font-weight:bold;font-size: 14px;">{{inviteitem.fromlastname}} {{inviteitem.fromfirstname}}</h2>\n    <p style="font-size:12px">{{inviteitem.fromphonenumber}}</p>\n    <p style="font-size:12px">{{inviteitem.name}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

function getguid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
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
  Generated class for the InvitationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InvitationProvider = /** @class */ (function () {
    function InvitationProvider(http) {
        this.http = http;
        console.log('Hello InvitationProvider Provider');
    }
    InvitationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InvitationProvider);
    return InvitationProvider;
}());

//# sourceMappingURL=invitation.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map