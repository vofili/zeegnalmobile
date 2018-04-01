import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ZeegnalserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ZeegnalserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ZeegnalserviceProvider Provider');
  }

  receivedrequests:[{}];
  receivedinvites: [{}];

  getRandomUser(){
    return this.http.get("https://randomuser.me/api/").map(data => data);
  }

 


  getSentZeegnalService(epobj){

              let epurl="http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
              console.log("URL ",epurl);
              console.log("Endpoint Object x",epobj);
              return this.http.post(epurl,epobj);
    }


  getReceivedZeegnalService(epobj){

              let epurl="http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
              console.log("URL ",epurl);
              console.log("Endpoint Object x",epobj);
              return this.http.post(epurl,epobj);
    }

  getguid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}

export class ZeegnalRequst{
     invitestart: String;
  fromlastname:String;
  frommembertype:String;
  invitestatus:String;
  inviteend:String;
  frommembercode:String;
  fromfirstname:String;
  source:String;
  fromphonenumber:String;
  reference:String;
  createdat:String;
  tofirstname:String;
  hashstring:String;
  inviteurl:String;
  name:String;
  tophonenumber:String;
  zeegnalcode:String;
  id:String;
  tolastname:String;
  updatedat:String;
}
