import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar,private onesignal: OneSignal, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setupPush();
    });
  }


  setupPush(){
    console.log("running push initialisation");
    this.onesignal.startInit('138cbc9d-3730-4ce7-a3b0-eabe6c8137b3','900625325721');

    this.onesignal.handleNotificationReceived().subscribe(data => {
      console.log("we received a push note ", data);
    })

    this.onesignal.handleNotificationOpened().subscribe(data => {
      console.log("handle opened notification ",data);
    })
    this.onesignal.endInit();
    



  }
}
