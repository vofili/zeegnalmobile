webpackJsonp([6],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZeegnalserviceProvider; });
/* unused harmony export ZeegnalRequst */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(111);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__communitydetail_communitydetail__ = __webpack_require__(131);
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestdetail_requestdetail__ = __webpack_require__(118);
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

/***/ 118:
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
            selector: 'page-requestdetail',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/requestdetail/requestdetail.html"*/'<!--\n  Generated template for the RequestdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n			<div class="vertical-center txt-center">\n						\n              <span class="txt-center" style="font-size:12px;text-transform: uppercase;">You invited {{parObj.tofirstname}}  {{parObj.tolastname}}<br/> to visit {{parObj.name}}</span>\n              \n      \n      <ion-row data-transation="fadeInDown" data-start-time="400">\n      <ion-item text-center no-padding>\n      <ngx-qrcode [qrc-value] ="hashstring" qrc-class ="aclass" qrc-errorCorrectionLevel="L"></ngx-qrcode>\n      <span text-center class="text2 txt-light" style="font-size:12px;display:block;margin-top:5px;color:#04679b;font-weight:500">Access Code: \n        {{parObj.reference}}</span>\n    </ion-item>\n    </ion-row>\n   \n							<div style="margin-top: 20px;">\n                <span text-left class="text2 block txt-light" style="font-size:14px">{{parObj.tofirstname}}  {{parObj.tolastname}} is visiting you</span>\n              <hr/>\n              <span text-left  *ngIf="!arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> {{parObj.tofirstname}}  {{parObj.tolastname}} had access {{startdate}}</span>\n               <span text-left *ngIf="arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> {{parObj.tofirstname}}  {{parObj.tolastname}} will have access {{startdate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invitation expires  {{enddate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invitation is {{parObj.invitestatus}}</span>\n              <hr/>\n             \n							</div>\n						\n					</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/requestdetail/requestdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], RequestdetailPage);
    return RequestdetailPage;
}());

//# sourceMappingURL=requestdetail.js.map

/***/ }),

/***/ 130:
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
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 131:
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

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/entercode/entercode.module": [
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
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_usernamevalidator__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(181);
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

/***/ 344:
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
            selector: 'page-invitedetail',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/invitedetail/invitedetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Invite</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n			<div class="vertical-center txt-center">\n						\n              <span class="txt-center" style="font-size:12px;text-transform: uppercase;">Your invite to {{parObj.name}}</span>\n              \n      \n      <ion-row data-transation="fadeInDown" data-start-time="400">\n      <ion-item text-center no-padding>\n      <ngx-qrcode [qrc-value] ="hashstring" qrc-class ="aclass" qrc-errorCorrectionLevel="L"></ngx-qrcode>\n      <span text-center class="text2 txt-light" style="font-size:10px">Show this on arrival<i class="fa fa-arrow-up" style="margin-left:5px"></i> </span>\n      <span text-center class="text2 txt-light" style="font-size:12px;display:block;margin-top:5px;color:#04679b;font-weight:500">Or use access Code: \n        {{parObj.reference}}</span>\n    </ion-item>\n    </ion-row>\n   \n							<div style="margin-top: 20px;">\n                <span text-left class="text2 block txt-light" style="font-size:14px">You are Visting {{parObj.fromfirstname}}  {{parObj.fromlastname}}</span>\n              <hr/>\n              <span text-left  *ngIf="!arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> You had access {{startdate}}</span>\n               <span text-left *ngIf="arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> You will have access by {{startdate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> But be there before {{enddate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invite is {{parObj.invitestatus}}</span>\n              <hr/>\n             \n							</div>\n						\n					</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/invitedetail/invitedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], InvitedetailPage);
    return InvitedetailPage;
}());

//# sourceMappingURL=invitedetail.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__places_places__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__request_request__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sim__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_minimize__ = __webpack_require__(352);
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
    function TabsPage(superTabsCtrl, http, alertCtrl, loadingCtrl, navParams, zeegnalservice, events, simCtrl, toastCtrl, platform, appMinimize, popoverCtrl) {
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
        this.popoverCtrl = popoverCtrl;
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_8__request_request__["a" /* RequestPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__places_places__["a" /* PlacesPage */];
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
                                if (data.phonenumber && data.phonenumber.length < 10) {
                                    __WEBPACK_IMPORTED_MODULE_0__ionic_pro__["Pro"].monitoring.log('Incorrect Phone number supplied ' + data.phonenumber, { level: 'error' });
                                }
                                else {
                                    _this.getallinvitesandrequests(data.phonenumber);
                                }
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
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabs */])
    ], TabsPage.prototype, "superTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('formslider'),
        __metadata("design:type", Object)
    ], TabsPage.prototype, "formslider", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/tabs/tabs.html"*/'\n<ion-header>\n<ion-toolbar>\n   \n    <ion-title>Zeegnal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <!-- <ion-navbar>\n    <ion-title>Zeegnal</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n<ion-content>\n<super-tabs  no-shadow id="mainTabs" tabsPlacement="top" selectedTabIndex="0" toolbarBackground="light"  indicatorColor="softgrey" badgeColor="light" [config]="{ sideMenu: \'both\' }" (tabSelect)="onTabSelect($event)">\n  <super-tab [root]="tab1Root" title="My Hosts" id="inviteTab"></super-tab>\n  <super-tab [root]="tab2Root" title="My Guests" id="outboxTab"></super-tab>\n  <super-tab [root]="tab3Root" title="My Places" icon="" id="newrequestTab"> </super-tab>\n</super-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["b" /* SuperTabsController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_zeegnalservice_zeegnalservice__["a" /* ZeegnalserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_sim__["a" /* Sim */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_minimize__["a" /* AppMinimize */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* PopoverController */]])
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entercode_entercode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitedetail_invitedetail__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_dialogs__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(111);
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_communitydetail_communitydetail__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_places_places__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_requestdetail_requestdetail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_request_request__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entercode_entercode__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_invitedetail_invitedetail__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_dialogs__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_sim__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_qrcode2__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_super_tabs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_avatar__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ngx_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_invitation_invitation__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_contacts__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_minimize__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_onesignal__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_pro__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__ionic_pro__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























// These are all imports required for Pro Client with Monitoring & Deploy,
// feel free to merge into existing imports above.


__WEBPACK_IMPORTED_MODULE_28__ionic_pro__["Pro"].init('70125b20', {
    appVersion: '0.0.1'
});
var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler(injector) {
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* IonicErrorHandler */]);
            console.log(this.ionicErrorHandler);
        }
        catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
            console.log(e);
        }
    }
    MyErrorHandler.prototype.handleError = function (err) {
        console.log("handleError");
        console.log(err);
        // Pro.monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injector"]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

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
                        { loadChildren: '../pages/entercode/entercode.module#EntercodePageModule', name: 'EntercodePage', segment: 'entercode', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_dialogs__["a" /* Dialogs */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* IonicErrorHandler */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: MyErrorHandler },
                __WEBPACK_IMPORTED_MODULE_23__providers_invitation_invitation__["a" /* InvitationProvider */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_24__providers_zeegnalservice_zeegnalservice__["a" /* ZeegnalserviceProvider */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_contacts__["b" /* Contacts */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_contacts__["a" /* Contact */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_minimize__["a" /* AppMinimize */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
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

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 183,
	"./af.js": 183,
	"./ar": 184,
	"./ar-dz": 185,
	"./ar-dz.js": 185,
	"./ar-kw": 186,
	"./ar-kw.js": 186,
	"./ar-ly": 187,
	"./ar-ly.js": 187,
	"./ar-ma": 188,
	"./ar-ma.js": 188,
	"./ar-sa": 189,
	"./ar-sa.js": 189,
	"./ar-tn": 190,
	"./ar-tn.js": 190,
	"./ar.js": 184,
	"./az": 191,
	"./az.js": 191,
	"./be": 192,
	"./be.js": 192,
	"./bg": 193,
	"./bg.js": 193,
	"./bm": 194,
	"./bm.js": 194,
	"./bn": 195,
	"./bn.js": 195,
	"./bo": 196,
	"./bo.js": 196,
	"./br": 197,
	"./br.js": 197,
	"./bs": 198,
	"./bs.js": 198,
	"./ca": 199,
	"./ca.js": 199,
	"./cs": 200,
	"./cs.js": 200,
	"./cv": 201,
	"./cv.js": 201,
	"./cy": 202,
	"./cy.js": 202,
	"./da": 203,
	"./da.js": 203,
	"./de": 204,
	"./de-at": 205,
	"./de-at.js": 205,
	"./de-ch": 206,
	"./de-ch.js": 206,
	"./de.js": 204,
	"./dv": 207,
	"./dv.js": 207,
	"./el": 208,
	"./el.js": 208,
	"./en-au": 209,
	"./en-au.js": 209,
	"./en-ca": 210,
	"./en-ca.js": 210,
	"./en-gb": 211,
	"./en-gb.js": 211,
	"./en-ie": 212,
	"./en-ie.js": 212,
	"./en-il": 213,
	"./en-il.js": 213,
	"./en-nz": 214,
	"./en-nz.js": 214,
	"./eo": 215,
	"./eo.js": 215,
	"./es": 216,
	"./es-do": 217,
	"./es-do.js": 217,
	"./es-us": 218,
	"./es-us.js": 218,
	"./es.js": 216,
	"./et": 219,
	"./et.js": 219,
	"./eu": 220,
	"./eu.js": 220,
	"./fa": 221,
	"./fa.js": 221,
	"./fi": 222,
	"./fi.js": 222,
	"./fo": 223,
	"./fo.js": 223,
	"./fr": 224,
	"./fr-ca": 225,
	"./fr-ca.js": 225,
	"./fr-ch": 226,
	"./fr-ch.js": 226,
	"./fr.js": 224,
	"./fy": 227,
	"./fy.js": 227,
	"./gd": 228,
	"./gd.js": 228,
	"./gl": 229,
	"./gl.js": 229,
	"./gom-latn": 230,
	"./gom-latn.js": 230,
	"./gu": 231,
	"./gu.js": 231,
	"./he": 232,
	"./he.js": 232,
	"./hi": 233,
	"./hi.js": 233,
	"./hr": 234,
	"./hr.js": 234,
	"./hu": 235,
	"./hu.js": 235,
	"./hy-am": 236,
	"./hy-am.js": 236,
	"./id": 237,
	"./id.js": 237,
	"./is": 238,
	"./is.js": 238,
	"./it": 239,
	"./it.js": 239,
	"./ja": 240,
	"./ja.js": 240,
	"./jv": 241,
	"./jv.js": 241,
	"./ka": 242,
	"./ka.js": 242,
	"./kk": 243,
	"./kk.js": 243,
	"./km": 244,
	"./km.js": 244,
	"./kn": 245,
	"./kn.js": 245,
	"./ko": 246,
	"./ko.js": 246,
	"./ky": 247,
	"./ky.js": 247,
	"./lb": 248,
	"./lb.js": 248,
	"./lo": 249,
	"./lo.js": 249,
	"./lt": 250,
	"./lt.js": 250,
	"./lv": 251,
	"./lv.js": 251,
	"./me": 252,
	"./me.js": 252,
	"./mi": 253,
	"./mi.js": 253,
	"./mk": 254,
	"./mk.js": 254,
	"./ml": 255,
	"./ml.js": 255,
	"./mr": 256,
	"./mr.js": 256,
	"./ms": 257,
	"./ms-my": 258,
	"./ms-my.js": 258,
	"./ms.js": 257,
	"./mt": 259,
	"./mt.js": 259,
	"./my": 260,
	"./my.js": 260,
	"./nb": 261,
	"./nb.js": 261,
	"./ne": 262,
	"./ne.js": 262,
	"./nl": 263,
	"./nl-be": 264,
	"./nl-be.js": 264,
	"./nl.js": 263,
	"./nn": 265,
	"./nn.js": 265,
	"./pa-in": 266,
	"./pa-in.js": 266,
	"./pl": 267,
	"./pl.js": 267,
	"./pt": 268,
	"./pt-br": 269,
	"./pt-br.js": 269,
	"./pt.js": 268,
	"./ro": 270,
	"./ro.js": 270,
	"./ru": 271,
	"./ru.js": 271,
	"./sd": 272,
	"./sd.js": 272,
	"./se": 273,
	"./se.js": 273,
	"./si": 274,
	"./si.js": 274,
	"./sk": 275,
	"./sk.js": 275,
	"./sl": 276,
	"./sl.js": 276,
	"./sq": 277,
	"./sq.js": 277,
	"./sr": 278,
	"./sr-cyrl": 279,
	"./sr-cyrl.js": 279,
	"./sr.js": 278,
	"./ss": 280,
	"./ss.js": 280,
	"./sv": 281,
	"./sv.js": 281,
	"./sw": 282,
	"./sw.js": 282,
	"./ta": 283,
	"./ta.js": 283,
	"./te": 284,
	"./te.js": 284,
	"./tet": 285,
	"./tet.js": 285,
	"./tg": 286,
	"./tg.js": 286,
	"./th": 287,
	"./th.js": 287,
	"./tl-ph": 288,
	"./tl-ph.js": 288,
	"./tlh": 289,
	"./tlh.js": 289,
	"./tr": 290,
	"./tr.js": 290,
	"./tzl": 291,
	"./tzl.js": 291,
	"./tzm": 292,
	"./tzm-latn": 293,
	"./tzm-latn.js": 293,
	"./tzm.js": 292,
	"./ug-cn": 294,
	"./ug-cn.js": 294,
	"./uk": 295,
	"./uk.js": 295,
	"./ur": 296,
	"./ur.js": 296,
	"./uz": 297,
	"./uz-latn": 298,
	"./uz-latn.js": 298,
	"./uz.js": 297,
	"./vi": 299,
	"./vi.js": 299,
	"./x-pseudo": 300,
	"./x-pseudo.js": 300,
	"./yo": 301,
	"./yo.js": 301,
	"./zh-cn": 302,
	"./zh-cn.js": 302,
	"./zh-hk": 303,
	"./zh-hk.js": 303,
	"./zh-tw": 304,
	"./zh-tw.js": 304
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
webpackContext.id = 425;

/***/ }),

/***/ 443:
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

/***/ 444:
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

/***/ 469:
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

},[357]);
//# sourceMappingURL=main.js.map