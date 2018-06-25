import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Capsule } from '../../models/Capsule';

/**
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {
  capsules : Capsule[]
  capsule : string = "active";
  constructor(public navCtrl: NavController, public navParams: NavParams,private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllCapsule().subscribe(data =>{
      this.capsules = data;
      
  } )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleListPage');
  }

}
