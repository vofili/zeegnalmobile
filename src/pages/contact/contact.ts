import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  receivedarray  = [<inviteobject>{}];

  constructor(public navCtrl: NavController,private http: HttpClient,private alertCtrl: AlertController) {
        let epurl= "";
        let epobj = {};
        if(localStorage.getItem("receiveditem") != "undefined"){
             this.receivedarray = JSON.parse(localStorage.getItem("receiveditem"));
        }else{
              this.alertCtrl.create({
                 title: 'Notification',
                subTitle: 'You have no active Requests!',
                buttons: ['OK']
              })
        }
       
  }


      ionViewDidLoad(){
        let phone = localStorage.getItem("userphonenumber");
      }



}

export function  getguid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }



   export interface inviteobject{
        invitestart: string;
        fromlastname: string;
        frommembertype: string;
        invitestatus: string;
        inviteend: string;
        frommembercode: string;
        fromfirstname: string;
        source: string;
        fromphonenumber: string;
        reference: string;
        createdat: string;
        tofirstname: string;
        hashstring: string;
        inviteurl:string;
        tophonenumber: string;
        zeegnalcode: string;
        tolastname:string;
        updatedat: string;
        id:string;
        name:string;

    //[{"invitestart":"Mar 21, 2018 6:00:00 PM","fromlastname":"Alimi","frommembertype":"Admin","invitestatus":"used",
    //"inviteend":"Mar 22, 2018 6:00:00 PM","frommembercode":"ZE000IMP","fromfirstname":"Omotayo",
    //"source":"TELEBOT","fromphonenumber":"2347038901111","reference":"ZE000IMPH39EA",
    //"createdat":"Mar 21, 2018 11:19:33 AM","tofirstname":"Ofili","hashstring":"Alimi|Omotayo|2347038901111|Valentine|Ofili|2348182120030|ZE000IMPH39EA|ZE000|Mar 21 2018  6:00PM|Mar 22 2018  6:00PM",
    //"inviteurl":"http://35.164.119.185/zeegnal/ZE000IMPH39EA.jpg","tophonenumber":"2348182120030","zeegnalcode":"ZE000",
    //"id":1,"tolastname":"Valentine","updatedat":"Mar 21, 2018 11:21:47 AM"}]
  }
