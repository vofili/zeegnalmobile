webpackJsonp([1],{

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

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/userprofile/userprofile.module": [
		473,
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__communitydetail_communitydetail__ = __webpack_require__(207);
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

/***/ 209:
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
            selector: 'page-requestdetail',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/requestdetail/requestdetail.html"*/'<!--\n  Generated template for the RequestdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n			<div class="vertical-center txt-center">\n						\n              <span class="txt-center" style="font-size:12px;text-transform: uppercase;">You invited {{parObj.tofirstname}}  {{parObj.tolastname}}<br/> to visit {{parObj.name}}</span>\n              \n      \n      <ion-row data-transation="fadeInDown" data-start-time="400">\n      <ion-item text-center no-padding>\n      <ngx-qrcode [qrc-value] ="hashstring" qrc-class ="aclass" qrc-errorCorrectionLevel="L"></ngx-qrcode>\n      <span text-center class="text2 txt-light" style="font-size:12px;display:block;margin-top:5px;color:#04679b;font-weight:500">Access Code: \n        {{parObj.reference}}</span>\n    </ion-item>\n    </ion-row>\n   \n							<div style="margin-top: 20px;">\n                <span text-left class="text2 block txt-light" style="font-size:14px">{{parObj.tofirstname}}  {{parObj.tolastname}} is visiting you</span>\n              <hr/>\n              <span text-left  *ngIf="!arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> {{parObj.tofirstname}}  {{parObj.tolastname}} had access {{startdate}}</span>\n               <span text-left *ngIf="arrivaltimestatus" class="text2 block txt-light" style="font-size:14px"> {{parObj.tofirstname}}  {{parObj.tolastname}} will have access {{startdate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invitation expires  {{enddate}}</span>\n              <hr/>\n              <span text-left class="text2 block txt-light" style="font-size:14px"> This invitation is {{parObj.invitestatus}}</span>\n              <hr/>\n             \n							</div>\n						\n					</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/requestdetail/requestdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], RequestdetailPage);
    return RequestdetailPage;
}());

//# sourceMappingURL=requestdetail.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requestdetail_requestdetail__ = __webpack_require__(209);
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_usernamevalidator__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(342);
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

/***/ 345:
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export getguid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__places_places__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__request_request__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__ = __webpack_require__(352);
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
                console.log(data['responsecode']);
                console.log(data['responsemessage']);
                console.log("Error retreiving invites");
                console.log(JSON.stringify(data));
                var toast = _this.toastCtrl.create({
                    message: JSON.stringify(data['responsemessage']),
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_sim__["a" /* Sim */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_minimize__["a" /* AppMinimize */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* PopoverController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entercode_entercode__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitedetail_invitedetail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(56);
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

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_scanner_scanner__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_communitydetail_communitydetail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_places_places__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_requestdetail_requestdetail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_request_request__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_entercode_entercode__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_invitedetail_invitedetail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_dialogs__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_sim__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_qrcode2__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_super_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_avatar__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_invitation_invitation__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_zeegnalservice_zeegnalservice__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_contacts__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_minimize__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_onesignal__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_pro__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__ionic_pro__);
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


__WEBPACK_IMPORTED_MODULE_29__ionic_pro__["Pro"].init('70125b20', {
    appVersion: '0.0.1'
});
var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler(injector) {
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* IonicErrorHandler */]);
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
        __WEBPACK_IMPORTED_MODULE_29__ionic_pro__["Pro"].monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_core__["Injector"]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_6__pages_invitedetail_invitedetail__["a" /* InvitedetailPage */], __WEBPACK_IMPORTED_MODULE_5__pages_entercode_entercode__["a" /* EntercodePage */], __WEBPACK_IMPORTED_MODULE_4__pages_request_request__["a" /* RequestPage */], __WEBPACK_IMPORTED_MODULE_3__pages_requestdetail_requestdetail__["a" /* RequestdetailPage */], __WEBPACK_IMPORTED_MODULE_2__pages_places_places__["a" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_1__pages_communitydetail_communitydetail__["a" /* CommunitydetailPage */], __WEBPACK_IMPORTED_MODULE_0__pages_scanner_scanner__["a" /* ScannerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], { scrollAssist: false }, {
                    links: [
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_20_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_avatar__["AvatarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_6__pages_invitedetail_invitedetail__["a" /* InvitedetailPage */], __WEBPACK_IMPORTED_MODULE_5__pages_entercode_entercode__["a" /* EntercodePage */], __WEBPACK_IMPORTED_MODULE_4__pages_request_request__["a" /* RequestPage */], __WEBPACK_IMPORTED_MODULE_3__pages_requestdetail_requestdetail__["a" /* RequestdetailPage */], __WEBPACK_IMPORTED_MODULE_2__pages_places_places__["a" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_1__pages_communitydetail_communitydetail__["a" /* CommunitydetailPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_scanner_scanner__["a" /* ScannerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_dialogs__["a" /* Dialogs */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* IonicErrorHandler */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["ErrorHandler"], useClass: MyErrorHandler },
                __WEBPACK_IMPORTED_MODULE_24__providers_invitation_invitation__["a" /* InvitationProvider */], __WEBPACK_IMPORTED_MODULE_28__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_25__providers_zeegnalservice_zeegnalservice__["a" /* ZeegnalserviceProvider */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_contacts__["b" /* Contacts */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_contacts__["a" /* Contact */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_minimize__["a" /* AppMinimize */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
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
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScannerPage = /** @class */ (function () {
    function ScannerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScannerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScannerPage');
    };
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-scanner',template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/scanner/scanner.html"*/'<!--\n  Generated template for the ScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Scan Access Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/pages/scanner/scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 210,
	"./af.js": 210,
	"./ar": 211,
	"./ar-dz": 212,
	"./ar-dz.js": 212,
	"./ar-kw": 213,
	"./ar-kw.js": 213,
	"./ar-ly": 214,
	"./ar-ly.js": 214,
	"./ar-ma": 215,
	"./ar-ma.js": 215,
	"./ar-sa": 216,
	"./ar-sa.js": 216,
	"./ar-tn": 217,
	"./ar-tn.js": 217,
	"./ar.js": 211,
	"./az": 218,
	"./az.js": 218,
	"./be": 219,
	"./be.js": 219,
	"./bg": 220,
	"./bg.js": 220,
	"./bm": 221,
	"./bm.js": 221,
	"./bn": 222,
	"./bn.js": 222,
	"./bo": 223,
	"./bo.js": 223,
	"./br": 224,
	"./br.js": 224,
	"./bs": 225,
	"./bs.js": 225,
	"./ca": 226,
	"./ca.js": 226,
	"./cs": 227,
	"./cs.js": 227,
	"./cv": 228,
	"./cv.js": 228,
	"./cy": 229,
	"./cy.js": 229,
	"./da": 230,
	"./da.js": 230,
	"./de": 231,
	"./de-at": 232,
	"./de-at.js": 232,
	"./de-ch": 233,
	"./de-ch.js": 233,
	"./de.js": 231,
	"./dv": 234,
	"./dv.js": 234,
	"./el": 235,
	"./el.js": 235,
	"./en-au": 236,
	"./en-au.js": 236,
	"./en-ca": 237,
	"./en-ca.js": 237,
	"./en-gb": 238,
	"./en-gb.js": 238,
	"./en-ie": 239,
	"./en-ie.js": 239,
	"./en-il": 240,
	"./en-il.js": 240,
	"./en-nz": 241,
	"./en-nz.js": 241,
	"./eo": 242,
	"./eo.js": 242,
	"./es": 243,
	"./es-do": 244,
	"./es-do.js": 244,
	"./es-us": 245,
	"./es-us.js": 245,
	"./es.js": 243,
	"./et": 246,
	"./et.js": 246,
	"./eu": 247,
	"./eu.js": 247,
	"./fa": 248,
	"./fa.js": 248,
	"./fi": 249,
	"./fi.js": 249,
	"./fo": 250,
	"./fo.js": 250,
	"./fr": 251,
	"./fr-ca": 252,
	"./fr-ca.js": 252,
	"./fr-ch": 253,
	"./fr-ch.js": 253,
	"./fr.js": 251,
	"./fy": 254,
	"./fy.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./gu": 258,
	"./gu.js": 258,
	"./he": 259,
	"./he.js": 259,
	"./hi": 260,
	"./hi.js": 260,
	"./hr": 261,
	"./hr.js": 261,
	"./hu": 262,
	"./hu.js": 262,
	"./hy-am": 263,
	"./hy-am.js": 263,
	"./id": 264,
	"./id.js": 264,
	"./is": 265,
	"./is.js": 265,
	"./it": 266,
	"./it.js": 266,
	"./ja": 267,
	"./ja.js": 267,
	"./jv": 268,
	"./jv.js": 268,
	"./ka": 269,
	"./ka.js": 269,
	"./kk": 270,
	"./kk.js": 270,
	"./km": 271,
	"./km.js": 271,
	"./kn": 272,
	"./kn.js": 272,
	"./ko": 273,
	"./ko.js": 273,
	"./ky": 274,
	"./ky.js": 274,
	"./lb": 275,
	"./lb.js": 275,
	"./lo": 276,
	"./lo.js": 276,
	"./lt": 277,
	"./lt.js": 277,
	"./lv": 278,
	"./lv.js": 278,
	"./me": 279,
	"./me.js": 279,
	"./mi": 280,
	"./mi.js": 280,
	"./mk": 281,
	"./mk.js": 281,
	"./ml": 282,
	"./ml.js": 282,
	"./mn": 283,
	"./mn.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./mt": 287,
	"./mt.js": 287,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./tg": 314,
	"./tg.js": 314,
	"./th": 315,
	"./th.js": 315,
	"./tl-ph": 316,
	"./tl-ph.js": 316,
	"./tlh": 317,
	"./tlh.js": 317,
	"./tr": 318,
	"./tr.js": 318,
	"./tzl": 319,
	"./tzl.js": 319,
	"./tzm": 320,
	"./tzm-latn": 321,
	"./tzm-latn.js": 321,
	"./tzm.js": 320,
	"./ug-cn": 322,
	"./ug-cn.js": 322,
	"./uk": 323,
	"./uk.js": 323,
	"./ur": 324,
	"./ur.js": 324,
	"./uz": 325,
	"./uz-latn": 326,
	"./uz-latn.js": 326,
	"./uz.js": 325,
	"./vi": 327,
	"./vi.js": 327,
	"./x-pseudo": 328,
	"./x-pseudo.js": 328,
	"./yo": 329,
	"./yo.js": 329,
	"./zh-cn": 330,
	"./zh-cn.js": 330,
	"./zh-hk": 331,
	"./zh-hk.js": 331,
	"./zh-tw": 332,
	"./zh-tw.js": 332
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
webpackContext.id = 422;

/***/ }),

/***/ 434:
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(353);
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
    function MyApp(platform, statusBar, onesignal, splashScreen, alertCtrl) {
        var _this = this;
        this.onesignal = onesignal;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('cordova')) {
                _this.setupPush();
            }
        });
    }
    MyApp.prototype.setupPush = function () {
        var _this = this;
        console.log("running push initialisation");
        this.onesignal.startInit('138cbc9d-3730-4ce7-a3b0-eabe6c8137b3', '900625325721');
        this.onesignal.handleNotificationReceived().subscribe(function (data) {
            console.log("we received a push note ");
            console.log(JSON.stringify(data));
        });
        this.onesignal.handleNotificationOpened().subscribe(function (data) {
            console.log("we opened a opened notification ");
            console.log(JSON.stringify(data));
            var alert = _this.alertCtrl.create({
                title: data.notification.payload.title,
                subTitle: data.notification.payload.body,
                buttons: [{
                        role: "cancel",
                        text: "Close"
                    }]
            });
            alert.present();
        });
        this.onesignal.endInit();
        var notificationOpenedCallback = function (jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };
        window["plugins"].OneSignal
            .startInit("138cbc9d-3730-4ce7-a3b0-eabe6c8137b3", "900625325721")
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/val/Desktop/ionicmobile/keystonemobile/zeegnaltabdemo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
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

/***/ 471:
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

},[358]);
//# sourceMappingURL=main.js.map