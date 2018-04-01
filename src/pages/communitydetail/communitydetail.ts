import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import * as moment from 'moment';
/**
 * Generated class for the CommunitydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-communitydetail',
  templateUrl: 'communitydetail.html',
})
export class CommunitydetailPage {
  hashstring:string;
  parObj:communityObject;
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.items = ["Surveys","Elections","Market Place","Make Payments","complaints"]
      this.parObj = this.navParams.get('paramObj');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunitydetailPage');
  }

}

export interface communityObject{
    category:string;
    createdat:string;
    firstname:string;
    id:string;
    lastname:string;
    membercode: string;
    memberinfo1:string;
    memberinfo2:string;
    memberinfo3:string;
    memberinfo4:string;
    memberstatus:string;
    membertype:string;
    name:string;
    phonenumber:string;
    source:string;
    updatedat:string;
    zeegnalcode:string;
}
