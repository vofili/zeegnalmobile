import { Calendar } from '@ionic-native/calendar';
import { ZeegnalserviceProvider } from './../../providers/zeegnalservice/zeegnalservice';
import { HomePage } from './../home/home';
import { SuperTabs, SuperTabsController } from 'ionic2-super-tabs';
import { UsernameValidator } from './../../validators/usernamevalidator';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { community } from './about';
import { FormControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component,ViewChild } from '@angular/core';
import { NavController, App, Platform } from 'ionic-angular';
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
  fixedreason:boolean;
  reasons:[{}];
  mindate:string;
  maxdate:string;
  calendarstartdate:any;
  calendarenddate:any;
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  @ViewChild('createformslider') createformslider: any;

  constructor(public navCtrl: NavController,private formBuilder: FormBuilder,public http:HttpClient,
    public loadingCtrl: LoadingController,public alertCtrl: AlertController,private app: App,
    private supertabsctrl: SuperTabsController,private events: Events,private contacts: Contacts,
    private zeegnalsvc:ZeegnalserviceProvider,private calendar: Calendar,private platform: Platform) {
     
          
        let mydate = new Date();
        console.log("this minimum date",mydate);
      
        this.mindate = mydate.toISOString().split('T')[0]
        console.log("this minimum date ",this.mindate);
        this.submitAttempt  = false;
        this.pickfromphonebookflag = true;
        this.fixedreason = true;
        this.reasons = [{reasonid:"01",desc:"Casual Visit"},
                        {reasonid:"02",desc:"Personal"},
                        {reasonid:"03",desc:"Official"},
                      {reasonid:"04",desc:"Other Reason"}];
        this.createInviteForm = formBuilder.group({
          userphone:['',Validators.compose([Validators.required])],
          community:['Please Choose a community']
        },{ updateOn: 'blur' });
        this.supplyUserDetailsForm = formBuilder.group({
            firstname:['',Validators.compose([Validators.required])],
            lastname:['',Validators.compose([Validators.required])],
            visitreason:['']
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

      starttimepicked(){
          console.log("start date time picked");
           let nowtime = this.supplydateForm.controls['endtime'].value;
           //this.supplydateForm.value.starttime
          if(this.supplydateForm.controls['startday'].value && this.supplydateForm.controls['starttime'].value){
              let nudate = new Date(this.supplydateForm.controls['startday'].value+" "+this.supplydateForm.controls['starttime'].value);
              console.log("start date *********");
             
              this.calendarstartdate  = nudate;
               console.log(this.calendarstartdate);
              let endate = new Date(nudate.setHours(nudate.getHours() + 3)).toISOString();
              console.log("end date *************");
              console.log(endate);
              
              this.calendarenddate = new Date(endate);
              console.log(this.calendarenddate);
              console.log(endate.split('T')[0]);
              console.log(endate.split('T')[1]);
              this.supplydateForm.controls['endday'].setValue(endate.split('T')[0]);
              this.supplydateForm.controls['endtime'].setValue(endate.split('T')[1]);
          }
        

      }
      startdatepicked(){
           console.log("start date picked");
           let nowdate = new Date();
          
          
      }
      checkSelectedReason(obj){
        console.log(obj);
        if(obj=="Other Reason"){
          this.fixedreason = false;
        }else{
           this.fixedreason = true;
        }
      }

      checkPhoneEntered(){
        console.log("value changed")
        let phone = this.createInviteForm.controls['userphone'].value;
        this.zeegnalsvc.getZeegnalNameEnquiry(phone).subscribe(data=>{
            if(data['responsecode']=="00"){
                  this.supplyUserDetailsForm.controls['firstname'].setValue(data['firstname']);
                  this.supplyUserDetailsForm.controls['lastname'].setValue(data['lastname']);
                  this.supplyUserDetailsForm.controls['firstname'].markAsTouched();
                  this.supplyUserDetailsForm.controls['lastname'].markAsTouched();
            }else{
                  this.supplyUserDetailsForm.controls['firstname'].setValue("");
                  this.supplyUserDetailsForm.controls['lastname'].setValue("");
            }
              
        })
       
      }
      checkPhoneBook(){
                  console.log("check phone book");
          
                  console.log('Yes pick from PhoneBook');
                  this.contacts.pickContact().then((pickedcontact) => {
                        console.log(JSON.stringify(pickedcontact));
                        console.log("select just phone no");
                        let cnt: Contact = pickedcontact;
                        console.log(cnt.phoneNumbers[0].value);
                        let phonenum =cnt.phoneNumbers[0].value;
                        phonenum = phonenum.replace(/\D/g,'');
                        this.createInviteForm.controls['userphone'].valueChanges.subscribe((success) =>{
                          console.log("successfully changed value");
                          console.log(JSON.stringify(success));
                          this.checkPhoneEntered();
                        },(err) =>{
                          console.log("error changing values");
                          console.log(JSON.stringify(err));
                        }, () =>{
                          console.log("completed");
                        })
                        this.createInviteForm.controls['userphone'].setValue(phonenum);
                        this.createInviteForm.controls['userphone'].markAsDirty();
                        this.createInviteForm.controls['userphone'].markAsTouched();

                  },(err) =>{
                    console.log("error occurred");
                    console.log(err);
                  })

                    // this.createInviteForm.controls['userphone'].valueChanges.subscribe((success) =>{
                    //       console.log("successfully changed value");
                    //       console.log(JSON.stringify(success));
                    //        this.checkPhoneEntered();
                    //     },(err) =>{
                    //       console.log("error changing values");
                    //       console.log(JSON.stringify(err));
                    //     }, () =>{
                    //       console.log("completed");
                    //     })

                    // this.createInviteForm.controls['userphone'].setValue("08182120030");
                    // this.createInviteForm.controls['userphone'].markAsTouched();
               
          
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
          let invitedesc = this.supplyUserDetailsForm.controls['visitreason'].value != null ? this.supplyUserDetailsForm.controls['visitreason'].value:"";
          let epurl="http://35.164.119.185:8080/zeegnal/api/operations/sendinvitation";
          let epobj={source:"MOBILE",transid:getguid(),sessid:getguid(),phonenumber:localStorage.getItem("userphonenumber"),
    tophonenumber: this.createInviteForm.controls['userphone'].value,tofirstname:this.supplyUserDetailsForm.value.firstname,
    tolastname:this.supplyUserDetailsForm.value.lastname,invitestart:start_date,inviteend:end_date,zeegnalcode:this.createInviteForm.value.community,desc:invitedesc}

               if(this.platform.is('cordova')){
                let opt = this.calendar.getCalendarOptions();
                opt.firstReminderMinutes = 30;
                opt.secondReminderMinutes = 10;
                
              console.log("******************* Calendar Options Start Date and End Date ***************");
              console.log(JSON.stringify(this.calendarstartdate));
              console.log(JSON.stringify(this.calendarenddate));
              let meetperson = "Zeegnal to "+this.supplyUserDetailsForm.value.firstname+" "+this.supplyUserDetailsForm.value.lastname;
          this.calendar.createEventWithOptions(meetperson, this.createInviteForm.value.community,invitedesc, new Date(start_date), new Date(this.calendarenddate), opt).then((data)=>{
            console.log("Result from Create Calendar");
            console.log(JSON.stringify(data));
          })

      }


    console.log("Request Object to Create Zeegnal");
    console.log(JSON.stringify(epobj));
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
