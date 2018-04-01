import { EntercodePage } from './../entercode/entercode';
import { inviteobject } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import * as moment from 'moment';
/**
 * Generated class for the InvitedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invitedetail',
  templateUrl: 'invitedetail.html',
})
export class InvitedetailPage {
  hashstring: string;
  parObj:inviteobject;
  startdate:string;
  enddate:string;
  arrivaltimestatus:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hashstring = this.navParams.get('hashstring');
    this.parObj = this.navParams.get('paramObj');
    let startMoment: moment.Moment = moment(this.parObj.invitestart);
    let endMoment: moment.Moment = moment(this.parObj.inviteend);
    this.startdate = startMoment.calendar();
    this.enddate = endMoment.calendar();
    let nowtime = new Date(); 
    let starttime = new Date(this.parObj.invitestart);
    console.log(starttime);
    if(starttime < nowtime){
        this.arrivaltimestatus = false;
    }else{
         this.arrivaltimestatus = true;
    }
    console.log(this.arrivaltimestatus);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitedetailPage');
  }

}