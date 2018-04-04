
import { Component } from '@angular/core';
import { Platform ,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';

import { CodePush,InstallMode, SyncStatus  } from '@ionic-native/code-push';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar,private onesignal: OneSignal, splashScreen: SplashScreen,
    private alertCtrl: AlertController,private codepush: CodePush) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
      splashScreen.hide();
      if(platform.is('cordova')){
           this.setupPush();
      }
      this.checkCodePush();      
    });
  }

  checkCodePush() {
    
     this.codepush.sync({
      updateDialog: {
       appendReleaseDescription: true,
       descriptionPrefix: "\n\nChange log:\n"   
      },
      installMode: InstallMode.IMMEDIATE
      
   }).subscribe(
     (data) => {
      console.log('CODE PUSH SUCCESSFUL: ')
      console.log(JSON.stringify(data));
      
     },
     (err) => {
      console.log('CODE PUSH ERROR: ');
      console.log(JSON.stringify(err));
      
     }
   );
  }

  setupPush(){
    console.log("running push initialisation");
    
    this.onesignal.startInit('138cbc9d-3730-4ce7-a3b0-eabe6c8137b3','900625325721');
    
    this.onesignal.handleNotificationReceived().subscribe(data => {
      console.log("we received a push note ");
      console.log(JSON.stringify(data));
    })

    this.onesignal.handleNotificationOpened().subscribe(data => {
      console.log("we opened a opened notification ");
      console.log(JSON.stringify(data));
      let alert  = this.alertCtrl.create({
        title:data.notification.payload.title,
        subTitle:data.notification.payload.body,
        buttons:[{
          role: "cancel",
          text: "Close"
        }]

      });
      alert.present();
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
