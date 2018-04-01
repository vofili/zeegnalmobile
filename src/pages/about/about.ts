import { HomePage } from './../home/home';
import { SuperTabs, SuperTabsController } from 'ionic2-super-tabs';
import { UsernameValidator } from './../../validators/usernamevalidator';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { community } from './about';
import { FormControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component,ViewChild } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController,Events } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  userphone:any;
  community:any;
  communities:any;
  createform: FormGroup;
  createInviteForm: FormGroup;
  supplyUserDetailsForm: FormGroup;
  supplydateForm:FormGroup;
  submitAttempt:boolean;
  pickfromphonebookflag:boolean;

  @ViewChild(SuperTabs) superTabs: SuperTabs;
  @ViewChild('createformslider') createformslider: any;

  constructor(public navCtrl: NavController,private formBuilder: FormBuilder,public http:HttpClient,
    public loadingCtrl: LoadingController,public alertCtrl: AlertController,private app: App,
    private supertabsctrl: SuperTabsController,private events: Events,private contacts: Contacts) {
      this.submitAttempt  = false;
      this.pickfromphonebookflag = true;
      this.createInviteForm = formBuilder.group({
          userphone:['',Validators.compose([Validators.required]),UsernameValidator.checkUsername],
          community:['Please Choose a community']
        })
        this.supplyUserDetailsForm = formBuilder.group({
            firstname:['',Validators.compose([Validators.required])],
            lastname:['',Validators.compose([Validators.required])],
            startdate:[''],
            enddate:['']
        })
          this.supplydateForm = formBuilder.group({
            startday:[''],
            starttime:[''],
            endday:[''],
            endtime:['']
          })
           events.subscribe('retreive:community', (results, time) => {
            // user and time are the same arguments passed in `events.publish(user, time)
            this.communities = results;
            console.log('Welcome', results, 'at', time);
          });
         this.communities = JSON.parse(localStorage.getItem("communitiesarray"));
        // console.log(this.createformslider.isBeginning());
  }
     slideNext(){
        this.createformslider.slideNext()
      }
      checkPhoneBook(){
            console.log("check phone book");
           // this.createInviteForm.setValue({userphone:"08182120030"});
            let alert = this.alertCtrl.create({
            title: 'PhoneBook',
            message: 'Do you want to pick from Phonebook?',
            buttons: [
              {
                text: 'No',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                  this.pickfromphonebookflag = false;
                }
              },
              {
                text: 'Yes',
                handler: () => {
                  console.log('Yes pick from PhoneBook');
                  this.contacts.pickContact().then((pickedcontact) => {
                        console.log(JSON.stringify(pickedcontact));
                        console.log("select just phone no");
                        let cnt: Contact = pickedcontact;
                        console.log(cnt.phoneNumbers[0].value);
                        let phonenum =cnt.phoneNumbers[0].value;
                        phonenum = phonenum.replace(/\D/g,'');
                        this.createInviteForm.controls['userphone'].setValue(phonenum);
                  },(err) =>{
                    console.log("error occurred");
                    console.log(err);
                  })
                 // this.createInviteForm.controls['userphone'].setValue("08182120030");
                  
                }
              }
            ]
          });
       
              alert.present();
          
      }

      slidePrev(){
        this.createformslider.slidePrev();
      }

      loadComms(){
        console.log("Load Comms")
        this.communities = JSON.parse(localStorage.getItem("communitiesarray"));
      }

      createZeegnal(){

            this.submitAttempt = true;
 
            if(!this.createInviteForm.valid){
                this.createformslider.slideTo(0);
            }
            else if(!this.supplyUserDetailsForm.valid){
                this.createformslider.slideTo(1);
            }else if(!this.supplydateForm.valid){
                this.createformslider.slideTo(2);
            }
            else {
              this.submitAttempt = false;
                console.log("success!")
                console.log(this.createInviteForm.value);
                console.log(this.supplyUserDetailsForm.value);
                console.log(this.supplydateForm.value);

                let start_date = this.supplydateForm.value.startday+' '+this.supplydateForm.value.starttime+'.000';
                let end_date = this.supplydateForm.value.endday+' '+this.supplydateForm.value.endtime+'.000';
                let epurl="http://35.164.119.185:8080/zeegnal/api/operations/sendinvitation";
                 let epobj={source:"MOBILE",transid:getguid(),sessid:getguid(),phonenumber:localStorage.getItem("userphonenumber"),
    tophonenumber:this.createInviteForm.value.userphone,tofirstname:this.supplyUserDetailsForm.value.firstname,
    tolastname:this.supplyUserDetailsForm.value.lastname,invitestart:start_date,inviteend:end_date,
    zeegnalcode:this.createInviteForm.value.community}

    console.log("Request Object to Create Zeegnal");
    console.log(epobj);
    let loader = this.loadingCtrl.create({
      content: "Sending Zeegnal ..."
    });
    loader.present();
    this.http.post(epurl,epobj).subscribe((data) =>{
      loader.dismiss();
      console.log("Response Object from Create Zeegnal");
      console.log(data);
      if(data['responsecode']=="00"){
             let alert = this.alertCtrl.create({
              title: 'Notification',
              subTitle:data['responsemessage'],
              buttons: [{
                  text: 'Ok',
                  handler: data => {
                    console.log('Ok clicked');
                    //this.navCtrl.push(HomePage)
                    this.createInviteForm.reset();
                    this.supplyUserDetailsForm.reset();
                    this.supplydateForm.reset();
                    this.createformslider.slideTo(0, 500);
                   // this.supertabsctrl.slideTo(0);
                   // this.app.getRootNavs()[0].push(HomePage);
                  }
               }]
            });
            alert.present();
      }else{
               let alert = this.alertCtrl.create({
              title: 'Notification',
              subTitle:data['responsemessage'],
              buttons: [{
                  text: 'Ok',
                  handler: data => {
                    console.log('Ok clicked');
                    //this.navCtrl.push(HomePage)
                    this.createInviteForm.reset();
                    this.supplyUserDetailsForm.reset();
                    this.supplydateForm.reset();
                    this.createformslider.slideTo(0, 500);
                   // this.supertabsctrl.slideTo(0);
                   // this.app.getRootNavs()[0].push(HomePage);
                  }
               }]
            });
            alert.present();
      }
          
    },(err) =>{
      console.log(err)
    })
            }

    }

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
slideChanged(){
   let slideindx = this.createformslider.getActiveIndex()
         console.log("current index",slideindx);
         if(slideindx == 0){
               this.communities = JSON.parse(localStorage.getItem("communitiesarray"));
         }
}

      ionViewDidLoad(){
        console.log("init slider form")
                    this.createInviteForm.reset();
                    this.supplyUserDetailsForm.reset();
                    this.supplydateForm.reset();
                    
      }

}
export interface community{
  name:string;
  memberinfo1: string;
  firstname:string;
  memberinfo3:string;
  memberinfo2:string;
  memberinfo4:string;
  phonenumber:string
  membertype:string,
  source:string;
  memberstatus:string;
  lastname:string;
  membercode:string;
  createdat:string;
  zeegnalcode:string;
  id:string;
  updatedat:string;
}


export function   getguid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
