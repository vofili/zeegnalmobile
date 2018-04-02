import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'page-entercode',
  templateUrl: 'entercode.html',
})
export class EntercodePage {
  zeegnalreference:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.zeegnalreference = new FormControl('', {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntercodePage');
  }

  


}
