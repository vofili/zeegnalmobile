import { ZeegnalserviceProvider } from './../../providers/zeegnalservice/zeegnalservice';
import { AboutPage } from './../about/about';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { EntercodePage }from './../entercode/entercode';
import { InvitedetailPage } from './../invitedetail/invitedetail';
import { SuperTabsController } from 'ionic2-super-tabs';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Sim } from '@ionic-native/sim';
import { Dialogs } from '@ionic-native/dialogs';
import { AlertController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { App } from 'ionic-angular';
import { Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  zeegnaldata: String;
  firstname: String;
  lastname: String;
  visitorphone: String;
  codetext: String;
  zeegnalreference: String;
  showemptylist:boolean;
  allinvitationobj:Observable<Array<any>>;
  
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,private http: HttpClient,
    private dialogCtrl: Dialogs,private simCtrl: Sim,private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, private superTabsCtrl: SuperTabsController,private app: App,
    private zeegnalervice: ZeegnalserviceProvider,private nvparams: NavParams,public events:Events) {
           // this.allinvitationobj = JSON.parse(localStorage.getItem("allinvitationobj"));
           // console.log("all invitation obj",JSON.stringify(this.allinvitationobj));

           this.events.subscribe('invitations:retrieved', (result, time) => {
              // user and time are the same arguments passed in `events.publish(user, time)`
              console.log('Invites returned', result, 'at', time);
              this.allinvitationobj = result;
            });
  }
  
   ionViewDidLoad() {
            console.log('ionViewDidLoad LandingPage');   
  }


  doRefresh(ev){
      console.log(ev);
          let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
      let phone = localStorage.getItem("userphonenumber");
  
      let epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
      let epobj = {source:"MOBILE", transid:getguid(), sessid:getguid(),phonenumber:phone,tophonenumber:phone};
      console.log(epobj);
      console.log(epurl);
      this.http.post(epurl,epobj).subscribe((data) => {
      loader.dismiss();
      ev.complete();
        if(data['responsecode']=="00"){
              console.log("All Invites returned");
              localStorage.removeItem("allinvitationobj");
              localStorage.setItem("allinvitationobj",JSON.stringify(data['result'].sort((a,b) => {
                      if(a.id > b.id){
                          return -1;
                      }else if(a.id < b.id){
                          return 1;
                      }else{
                          return 0
                      }
              })));
              this.events.publish('invitations:retrieved',data['result'],Date.now);
            
            }else{

              let alert = this.alertCtrl.create({
                title: 'Notification',
                subTitle: (data['responsemessage']),
                buttons: ['OK']
              });
        alert.present();

          console.log(data['responsecode']);
          console.log(data['responsemessage'])
            console.log("Error retreiving invites")
        }
          
      }, (err) => {
        console.log("Error Invites");
          console.log(err);
      })
  }

  calctimeleft(timestring: string){
    if(timestring){
        let timemoment: moment.Moment = moment(timestring);
        this.showemptylist = false;
        return timemoment.fromNow();
    }else{
      this.showemptylist = true;
      return "";
    }
     
  }


gotoinvitedetail(object: inviteobject){
    this.app.getRootNavs()[0].push(InvitedetailPage,{hashstring:object.hashstring,paramObj:object},{
      animation: 'ios-transition'
 })
}

 hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }
  
  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

   onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }
  

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
  }

getallcommunities(phone){
  
        let communitiesarray = [];
        let loader = this.loadingCtrl.create({
            content: "Please Wait..."
          });
          loader.present();
        let epurl ="http://35.164.119.185:8080/zeegnal/api/operations/getcustomerscommunity";
        let epobj = {source:"MOBILE",transid:getguid(),sessid:getguid(),phonenumber:phone};
        console.log("Request Object");
        console.log(JSON.stringify(epobj));
        this.http.post(epurl,epobj).subscribe((data) => {
           console.log(data);
           loader.dismiss();
          if(data['responsecode'] =="00"){
              communitiesarray = data['result'];
              localStorage.setItem("communitiesarray",JSON.stringify(communitiesarray));
          }else{
                 let al = this.alertCtrl.create({
                      title: 'Notification',
                      subTitle:data['responsemessage'],
                      buttons: ['Ok']
                    });
                al.present();
          }
            
      })
}


getallinvites(phone){
 
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

  console.log("User Phone Number");
  console.log(phone);
  let epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
  let epobj = {source:"MOBILE", transid:getguid(), sessid:getguid(),phonenumber:phone,tophonenumber:phone};
  this.http.post(epurl,epobj).subscribe((data) => {
   loader.dismiss();
    if(data['responsecode']=="00"){
          console.log("All Invites returned");
           localStorage.removeItem("allinvitationobj");
          localStorage.setItem("allinvitationobj",JSON.stringify(data['result']));
          this.allinvitationobj = JSON.parse(localStorage.getItem("allinvitationobj"));
          this.getallcommunities(localStorage.getItem("userphonenumber"))
    }else{

          let alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: (data['responsemessage']),
            buttons: ['OK']
          });
    alert.present();

      console.log(data['responsecode']);
      console.log(data['responsemessage'])
        console.log("Error retreiving invites")
    }
      
  }, (err) => {
    console.log("Error Invites");
      console.log(err);
  })

}

//+2348182120030
 
    qrcodescan(){
    let options = {
          prompt:"Scan Visitor",
          resultDisplayDuration:0,
          disableSuccessBeep:false
    }
      
      this.barcodeScanner.scan(options).then((barcodeData) => {
      // Success! Barcode data is here
      console.log(" ******************  Success Data Scanned  *******************  ");
      console.log(JSON.stringify(barcodeData));
      this.codetext = barcodeData.text;
      let epurl="http://35.164.119.185:8080/zeegnal/api/operations/checkinvitation";
      let epobj = <checkinvitationrequest>{};
      if(this.codetext){
        let sessreference = getguid();
        //this.codetext="Alimi|Omotayo|2347038901111|Alimi|Omotayo|2347038901111|ZE000IMPDON28|ZE000|Mar 15, 2018 9:50:22 PM|Mar 16, 2018 10:08:22 PM|used"
        //make http call to validate QR Code
        var codetextarr = this.codetext.split('|');
        epobj.phonenumber=codetextarr[2];
        epobj.source="MOBILE";
        epobj.transid=sessreference;
        epobj.sessid=sessreference; 
        epobj.reference=codetextarr[6];
        epobj.zeegnalcode=codetextarr[7];
        epobj.tophonenumber=codetextarr[5];
        console.log("EP Object ")
        console.log(JSON.stringify(epobj));
        this.presentLoading();
            this.http.post(epurl,epobj).subscribe((result)=>{
                  if(result['responsecode']=="00"){
                        console.log("Code Validated - success");
                        //this.showAlert("Success","Please Grant "+codetextarr[3]+" "+codetextarr[4]+" Access");
              this.dialogCtrl.alert("Please Grant "+codetextarr[3]+" "+codetextarr[4]+" Access",'Success','Ok')
                .then(() => {
                console.log('Dialog dismissed');
                this.navCtrl.pop();
                })

                        //  this.dialogs.alert("Please Grant "+codetextarr[3]+" "+codetextarr[4]+" Access")
                        //   .then(() => {
                        //     console.log('Dialog dismissed');
                        //     this.navCtrl.push(HomePage)
                        //   })
                        // .catch(e => console.log('Error displaying dialog', e));
                            
                         }else{
                            console.log("Code invalid - error")
                        //     this.dialogs.alert("Deny Access")
                        //   .then(() => {
                        //     console.log('Dialog dismissed');
                        //     this.navCtrl.push(HomePage)
                        //   })
                        // .catch(e => console.log('Error displaying dialog', e));
                           //this.showAlert("Notification","Please Deny Access");

                           this.dialogCtrl.alert("Please Deny Access",'Notification','Ok')
                            .then(() => {
                            console.log('Dialog dismissed');
                           
                            })
                     
                  }
            })
        }else{
                             this.dialogCtrl.alert("Unable Scan Code, Please enter your Zeegnal Code",'Notification','Ok')
                            .then(() => {
                            console.log('Dialog dismissed');
                            
                            })
        }
      }, (err) => {
          // An error occurred
          console.log(" Error During Scanning ",err);
          JSON.stringify(err);
      });
  }


  gotoentercode(){
    this.app.getRootNavs()[0].push(EntercodePage)
  }


  
}

export interface checkinvitationrequest{

	  source: String;
    transid: String;
    sessid: String;
    phonenumber: String;
    reference: String;
    zeegnalcode: String;
    tophonenumber: String;

}

export function   getguid() {
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
