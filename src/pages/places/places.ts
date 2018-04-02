import { CommunitydetailPage } from './../communitydetail/communitydetail';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, App } from 'ionic-angular';
/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  communityarray:Observable<Array<any>>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private events: Events,private app:App) {
        this.events.subscribe('retreive:community',(data,time)=>{
          console.log(data);
          console.log(time);
          this.communityarray = data;
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  gotoplacesdetail(objectparam){
      console.log("go to places detail")
      console.log(objectparam);
       this.app.getRootNavs()[0].push(CommunitydetailPage,{paramObj:objectparam},{animation: 'ios-transition'})
  }

}


