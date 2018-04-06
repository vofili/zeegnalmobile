import { BatteryStatus } from '@ionic-native/battery-status';
import { RequestdetailPage } from './../pages/requestdetail/requestdetail';

import { Component } from '@angular/core';
import { Platform, AlertController, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';

import { CodePush,InstallMode, SyncStatus  } from '@ionic-native/code-push';
import { ToastController } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
;

  constructor(platform: Platform, statusBar: StatusBar,private onesignal: OneSignal, splashScreen: SplashScreen,
    private alertCtrl: AlertController,private codepush: CodePush,private toastCtrl: ToastController,
    private app: App,private batteryCtrl: BatteryStatus) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if(platform.is('cordova')){
           this.setupPush();
           this.checkBattery();
      }
      this.checkCodePush();      
    });
  }

  checkCodePush() {
    
    // this.codepush.sync().subscribe((data) =>{
    //   console.log('CODE PUSH SUCCESSFUL: ')
    //   console.log(JSON.stringify(data));
    // }, (err) => {
    //   console.log('CODE PUSH ERROR: ');
    //   console.log(JSON.stringify(err));
      
    // })

  }

  checkBattery(){
      console.log("**********************************");
      console.log("watch change in battery status");
              const subscription = this.batteryCtrl.onChange().subscribe(status => {
                console.log(status.level, status.isPlugged);
              });
  }

  setupPush(){
    console.log("running push initialisation");
    
    this.onesignal.startInit('138cbc9d-3730-4ce7-a3b0-eabe6c8137b3','900625325721');
    this.onesignal.inFocusDisplaying(this.onesignal.OSInFocusDisplayOption.Notification);

    this.onesignal.handleNotificationOpened().subscribe(data => {
      console.log("we opened a opened notification ");
      console.log("*********************************");
      console.log(JSON.stringify(data));
                        // let toast = this.toastCtrl.create({
                        //   message: data.notification.payload.body,
                        //   duration: 3000,
                        //   position: 'top'
                        // });
                        // toast.present();
                          console.log(data.notification.payload.additionalData);

      let alert  = this.alertCtrl.create({
        title:data.notification.payload.title,
        subTitle:data.notification.payload.body,
        buttons:[{
          
          text: "CLOSE",
          handler:info=>{
            return;
          }
        },{
          text:'VIEW',
          handler:data=>{
            console.log("the OK button clicked ");
            //hyper link to store url
            localStorage.setItem("pushData",JSON.stringify(data.notification.payload.additionalData));
            // this.app.getRootNavs()[0].push(RequestdetailPage,{hashstring:data.notification.payload.additionalData.hashstring,paramObj:data.notification.payload.additionalData},{animation: 'ios-transition'})

          }
        }]

      });
     alert.present();
    })

    this.onesignal.handleNotificationReceived().subscribe(data=>{

              console.log("we received a notification ");

              console.log("*********************************");

              console.log(JSON.stringify(data));
                        let toast = this.toastCtrl.create({
                          message: data.payload.body,
                          position: 'top',
                          showCloseButton: true,
                          closeButtonText: 'Ok'
                        });

                        toast.onDidDismiss((data) => {
                            console.log('Dismissed toast');
                            console.log(data);
                        });
                          
                        toast.present();
    })

    this.onesignal.getIds().then(data =>{
        console.log("Retrieved GET ID Data");
        console.log(JSON.stringify(data));
        localStorage.setItem("pushtoken",data.userId);
    }, err => {
        console.log("Error geetting push id's")
        console.log(JSON.stringify(err));
    })
    this.onesignal.endInit();
    var notificationOpenedCallback = function(jsonData) {
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window["plugins"].OneSignal
          .startInit("138cbc9d-3730-4ce7-a3b0-eabe6c8137b3", "900625325721")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();
    



  }


}
