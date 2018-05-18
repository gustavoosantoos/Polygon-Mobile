import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the SairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sair',
  templateUrl: 'sair.html',
})
export class SairPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SairPage');
  }

}
