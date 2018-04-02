import { AboutPage } from './../about/about';
import { RequestdetailPage } from './../requestdetail/requestdetail';
import { InvitedetailPage } from './../invitedetail/invitedetail';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,App } from 'ionic-angular';
import { Events } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  receivedarray:Observable<Array<any>>;
  showemptylist:boolean;
  constructor(public navCtrl: NavController,private navParams: NavParams,private http: HttpClient,
  private alertCtrl: AlertController,public events:Events,private app: App) {
      console.log("all invitation obj",JSON.stringify(this.receivedarray));
            this.events.subscribe('requests:retrieved', (result, time) => {
              // user and time are the same arguments passed in `events.publish(user, time)`
              console.log('Invites returned', result, 'at', time);
              this.receivedarray = result;
              
            });
      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
      
  }

  gotorequestdetail(object: inviteobject){
    this.app.getRootNavs()[0].push(RequestdetailPage,{hashstring:object.hashstring,paramObj:object},{animation: 'ios-transition'})
}

createNewInvite(){
  console.log(" Create a new Invite to your estate");
  this.app.getRootNavs()[0].push(AboutPage);
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

   doRefresh(ev){
      console.log(ev)
       let userphonenumber = "";
       if(localStorage.getItem("userphonenumber")){
         userphonenumber = localStorage.getItem("userphonenumber");
       }
      let requesturl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
      let requestobj = {source:"MOBILE",transid:getguid(), sessid:getguid(),phonenumber:"",fromphonenumber:userphonenumber,tofirstname:"", tolastname:"",invitestart:"",inviteend:"",zeegnalcode:""}
            console.log("refresher ",requestobj);
       this.http.post(requesturl,requestobj).subscribe((data) => {
                  ev.complete();
                  if(data['responsecode']=="00"){
                        console.log("All Requests returned");
                        console.log(data['result']);
                        localStorage.setItem("allrequestsobj",JSON.stringify(data['result']));
                        data['result'].sort(function(a,b){
                          if(a.id > b.id){
                            return -1;
                          }else if(a.id < b.id){
                            return 1;
                          }else{
                            return 0;
                          }
                        })
                        this.events.publish('requests:retrieved',data['result'],Date.now());
                  }else{
                     let alert = this.alertCtrl.create({
                      title: 'Notification',
                      subTitle: (data['responsemessage']),
                      buttons: ['OK']
                      });
                        alert.present();
                      
                  }
                 
          },err =>{
              let alert = this.alertCtrl.create({
              title: 'Notification',
              subTitle: (err),
              buttons: ['OK']
              });
                alert.present();
              })
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
     }