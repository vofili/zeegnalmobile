import { Pro } from '@ionic/pro';
import { PlacesPage } from './../places/places';
import { ZeegnalserviceProvider } from './../../providers/zeegnalservice/zeegnalservice';
import { Observable } from 'rxjs/Observable';
import { LoadingController, AlertController, NavParams } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EntercodePage } from './../entercode/entercode';
import { InvitedetailPage } from './../invitedetail/invitedetail';
import { Component, ViewChild, ErrorHandler} from '@angular/core';
import { SuperTabsController, SuperTabsModule,SuperTabs } from 'ionic2-super-tabs';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RequestPage } from '../request/request';
import { Events } from 'ionic-angular';
import { Sim } from '@ionic-native/sim';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';
import { PopoverController } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
      tab1Root:any;
      tab2Root:any;
      tab3Root:any;
      userInfo:Observable<any>;
      numberfromsim:string;
    @ViewChild(SuperTabs) superTabs: SuperTabs;
    @ViewChild('formslider') formslider: any;
    constructor(private superTabsCtrl: SuperTabsController,private http: HttpClient,private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,private navParams:NavParams, private zeegnalservice: ZeegnalserviceProvider,
    public events: Events,private simCtrl: Sim,public toastCtrl: ToastController,private platform: Platform, 
    private appMinimize: AppMinimize,public popoverCtrl: PopoverController) {

        this.platform.registerBackButtonAction(() =>{
          console.log("back button presed");
          this.appMinimize.minimize();
        })

        this.platform.ready().then((info) => {

              console.log("Platform ready");
              this.detectPhoneNumber();
               
        },(err) =>{
              console.log(" Platform not ready")
        })
        this.tab1Root = HomePage;
        this.tab2Root = RequestPage;
        this.tab3Root = PlacesPage;
        superTabsCtrl.enableTabsSwipe(true);
        superTabsCtrl.showToolbar(true);
       
        
       // this.userInfo = this.getallrequests();
      //  this.detectPhoneNumber();
     
  }

  onTabSelect(ev: any) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
        if(ev.index ==0){
                    this.getinviterequestnoloading();
                     
        }
        if(ev.index ==1){
                     this.getinviterequestnoloading()
        }

        if(ev.index ==2){
                     this.getallcommunities(localStorage.getItem("userphonenumber"));
        }
  }
  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }
  ngAfterViewInit() {
    // must wait for AfterViewInit if you want to modify the tabs instantly
    console.log("View Init");
 
  }




  detectPhoneNumber(){
                  console.log("Detect phone number");
                  this.numberfromsim = "";
                  console.log(this.numberfromsim);
                  let userphonenumber = localStorage.getItem("userphonenumber");
             
                  if (userphonenumber != undefined && userphonenumber !="" && userphonenumber != null && userphonenumber != {}){
                    console.log("number has been detected ",userphonenumber);
                    this.getallinvitesandrequests(userphonenumber);
                   
                  }else{

                      this.simCtrl.getSimInfo().then((data) => {
                      console.log('Sim info: ');
                      console.log(JSON.stringify(data));
                      if(data.phoneNumber){
                          this.numberfromsim = data.phoneNumber;
                          this.numberfromsim = this.numberfromsim.replace(/\D/g,'');
                      }
                      
                      let prompt = this.alertCtrl.create({
                        title: 'Hi',
                        message: "Seems you're new on Zeegnal<br/> Let's have your <b>Mobile Phone</b> number",
                        inputs: [
                          {
                            name: 'phonenumber',
                            placeholder: 'Phone Number',
                            type:'tel',
                            value:this.numberfromsim
                          },
                        ],
                        buttons: [
                          {
                            text: 'Cancel',
                            handler: data => {
                              console.log('Cancel clicked');
                              this.detectPhoneNumber();
                              return;
                            },
                            role:'cancel'
                          },
                          {
                            text: 'Ok',
                            handler: data => {
                              console.log("number has been detected ",data.phonenumber);
                              localStorage.setItem("userphonenumber",data.phonenumber);
                                  this.getallinvitesandrequests(data.phonenumber);
                             
                            }
                          }
                        ]
                      });
                        prompt.present();
                      },(error)=>{
                          console.log("error occurred getting sim data");
                          console.log(error);
                          let prompt = this.alertCtrl.create({
                        title: 'Hi',
                        message: "Seems you're new on Zeegnal<br/> Let's have your <b>Mobile Phone</b> number",
                        inputs: [
                          {
                            name: 'phonenumber',
                            placeholder: 'Phone Number',
                            type:'tel',
                            value:this.numberfromsim
                          },
                        ],
                        buttons: [
                          {
                            text: 'Cancel',
                            handler: data => {
                              console.log('Cancel clicked');
                              this.detectPhoneNumber();
                              return;
                            }
                          },
                          {
                            text: 'Ok',
                            handler: data => {
                              console.log("number has been detected ",data.phonenumber);
                              localStorage.setItem("userphonenumber",data.phonenumber);
                              this.getallinvitesandrequests(data.phonenumber);
                             
                            }
                          }
                        ]
                      });
                        prompt.present();
                          
                      })


                        
                  }
                 
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
                console.log(data['result']);
                this.zeegnalservice.receivedinvites = data['result'];
                localStorage.setItem("allinvitationobj",JSON.stringify(data['result']));
                
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

getinviterequestnoloading(){
         
   let phone = localStorage.getItem("userphonenumber");

    let requesturl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
    let requestobj = {source:"MOBILE",transid:getguid(), sessid:getguid(),phonenumber:"",fromphonenumber:phone,tofirstname:"", tolastname:"",invitestart:"",inviteend:"",zeegnalcode:""}
            
        console.log("User Phone Number");
        console.log(phone);
        let epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        let epobj = {source:"MOBILE", transid:getguid(), sessid:getguid(),phonenumber:phone,tophonenumber:phone};
        this.http.post(epurl,epobj).subscribe((data) => {
        
          if(data['responsecode']=="00"){
          
                console.log("All Invites returned");
                data['result'].sort(function(a,b){
                  if(a.id > b.id){
                      return -1;
                  }else if(a.id < b.id){
                    return 1;
                  }else{
                    return 0;
                  }
                })
                localStorage.setItem("allinvitationobj",JSON.stringify(data['result']));
                this.events.publish('invitations:retrieved',data['result'],Date.now());
          }else{

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
            let toast = this.toastCtrl.create({
                              message: JSON.stringify(data['responsemessage']),
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();

           
          }

          this.getallcommunities(phone);

          this.http.post(requesturl,requestobj).subscribe((data) => {
                  
                  if(data['responsecode']=="00"){
                        console.log("All Requests returned");
                        console.log(data['result']);
                        localStorage.setItem("allrequestsobj",JSON.stringify(data['result']));
                        data['result'].sort(function(a,b){
                          if(a.id > b.id){
                            return -1;

                          }else if (a.id < b.id){
                            return 1;
                          }else{
                            return 0;
                          }
                        })
                        this.events.publish('requests:retrieved',data['result'],Date.now());
                  }else{
                    //  let alert = this.alertCtrl.create({
                    //   title: 'Notification',
                    //   subTitle: (data['responsemessage']),
                    //   buttons: ['OK']
                    //   });
                    //     alert.present();
                    console.log(JSON.stringify(data));

                    let toast = this.toastCtrl.create({
                              message: JSON.stringify(data['responsemessage']),
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();
                      
                  }
                 
          },err =>{
              // let alert = this.alertCtrl.create({
              // title: 'Notification',
              // subTitle: (JSON.stringify(err)),
              // buttons: ['OK']
              // });
              //   alert.present();
              let toast = this.toastCtrl.create({
                              message: JSON.stringify(err),
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();
              })
            
        }, (err) => {
          console.log("Error Invites");
          console.log(err);
          //  let alert = this.alertCtrl.create({
          //   title: '',
          //   subTitle: (JSON.stringify(err)),
          //   buttons: ['OK']
          // });
          // alert.present();

          let toast = this.toastCtrl.create({
                              message: JSON.stringify(err),
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();

        })

  }



getallinvitesandrequests(phone){
          let loader = this.loadingCtrl.create({
            content: "Please wait...",

          });
          loader.present();
    let requesturl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivesentinvitation";
    let requestobj = {source:"MOBILE",transid:getguid(), sessid:getguid(),phonenumber:"",fromphonenumber:phone,tofirstname:"", tolastname:"",invitestart:"",inviteend:"",zeegnalcode:""}
            
        console.log("User Phone Number");
        console.log(phone);
        let epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
        let epobj = {source:"MOBILE", transid:getguid(), sessid:getguid(),phonenumber:phone,tophonenumber:phone};
        this.http.post(epurl,epobj).subscribe((data) => {
        
          if(data['responsecode']=="00"){
          
                console.log("All Invites returned");
                console.log(data['result']);
                data['result'].sort(function(a,b){
                  if(a.id > b.id){
                    return -1;
                  }else if(a.id < b.id){
                    return 1;
                  }else{
                    return 0;
                  }
                })
                localStorage.setItem("allinvitationobj",JSON.stringify(data['result']));
                this.events.publish('invitations:retrieved',data['result'],Date.now());
          }else{

             let toast = this.toastCtrl.create({
                message: data['responsemessage'],
                duration: 3000,
                position: 'bottom'
              });
              toast.present();

            console.log(data['responsecode']);
            console.log(data['responsemessage'])
            console.log("Error retreiving invites")
          }

           let communitiesarray = [];
       
        let commurl ="http://35.164.119.185:8080/zeegnal/api/operations/getcustomerscommunity";
        let commobj = {source:"MOBILE",transid:getguid(),sessid:getguid(),phonenumber:phone};
        this.http.post(commurl,commobj).subscribe((data) => {
           console.log(data);
       
          if(data['responsecode'] =="00"){
              communitiesarray = data['result'];
              localStorage.setItem("communitiesarray",JSON.stringify(communitiesarray));
              this.events.publish('retreive:community',communitiesarray,Date());
          }else{
            console.log(data['responsemessage']);
                //  let al = this.alertCtrl.create({
                //       title: 'Notification',
                //       subTitle:data['responsemessage'],
                //       buttons: ['Ok']
                //     });
                // al.present();
          }
            
      })

          this.http.post(requesturl,requestobj).subscribe((data) => {
                  loader.dismiss();
                  if(data['responsecode']=="00"){
                        console.log("All Requests returned");
                        data['result'].sort(function(a,b){
                          if(a.id > b.id){
                            return -1;
                          }else if(a.id < b.id){
                            return 1;
                          }else{
                            return 0
                          }
                        })
                        console.log(data['result']);

                        localStorage.setItem("allrequestsobj",JSON.stringify(data['result']));
                        this.events.publish('requests:retrieved',data['result'],Date.now());
                  }else{
                    
                            let toast = this.toastCtrl.create({
                              message: data['responsemessage'],
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();

                  }
                 
          },err =>{
                            let toast = this.toastCtrl.create({
                              message: JSON.stringify(err),
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();

              })
            
        }, (err) => {
          console.log("Error Invites");
          console.log(err);
           
                            let toast = this.toastCtrl.create({
                              message: JSON.stringify(err),
                              duration: 3000,
                              position: 'bottom'
                            });
                            toast.present();

        })

  }

  getallcommunities(phone){
  
        let communitiesarray = [];
       
        let commurl ="http://35.164.119.185:8080/zeegnal/api/operations/getcustomerscommunity";
        let commobj = {source:"MOBILE",transid:getguid(),sessid:getguid(),phonenumber:phone};
        this.http.post(commurl,commobj).subscribe((data) => {
           console.log(data);
       
          if(data['responsecode'] =="00"){
              communitiesarray = data['result'];
              localStorage.setItem("communitiesarray",JSON.stringify(communitiesarray));
              this.events.publish('retreive:community',communitiesarray,Date());
          }else{
            console.log(data['responsemessage']);
                //  let al = this.alertCtrl.create({
                //       title: 'Notification',
                //       subTitle:data['responsemessage'],
                //       buttons: ['Ok']
                //     });
                // al.present();
          }
            
      })
  }

  getallrequests(){
        let userphonenumber = localStorage.getItem("userphonenumber");
          console.log("Do get Pending Requests");
          let epurl = "http://35.164.119.185:8080/zeegnal/api/operations/allactivereceivedinvitation";
          let epobj = {source:"MOBILE", transid:getguid(), sessid:getguid(),phonenumber:"",fromphonenumber:"",tophonenumber:userphonenumber};
          return this.zeegnalservice.getSentZeegnalService(epobj).map(data => data);

  }
  
}


export function   getguid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
