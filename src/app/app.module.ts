import { CommunitydetailPage } from './../pages/communitydetail/communitydetail';
import { PlacesPage } from './../pages/places/places';
import { RequestdetailPage } from './../pages/requestdetail/requestdetail';
import { RequestPage } from './../pages/request/request';
import { EntercodePage } from './../pages/entercode/entercode';
import { InvitedetailPage } from './../pages/invitedetail/invitedetail';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Platform } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dialogs } from '@ionic-native/dialogs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Sim } from '@ionic-native/sim';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AvatarModule } from 'ngx-avatar';
import { InvitationProvider } from '../providers/invitation/invitation';
import { ZeegnalserviceProvider } from '../providers/zeegnalservice/zeegnalservice';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { AppMinimize } from '@ionic-native/app-minimize';
import { OneSignal } from '@ionic-native/onesignal';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,InvitedetailPage,EntercodePage,RequestPage,RequestdetailPage,PlacesPage,CommunitydetailPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp,{scrollAssist: false}),
    SuperTabsModule.forRoot(),NgxQRCodeModule,
    AvatarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,InvitedetailPage, EntercodePage,RequestPage,RequestdetailPage,PlacesPage,CommunitydetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     BarcodeScanner,
    Sim,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InvitationProvider,OneSignal,
    ZeegnalserviceProvider,Contacts, Contact,AppMinimize
  ]
})
export class AppModule {}
