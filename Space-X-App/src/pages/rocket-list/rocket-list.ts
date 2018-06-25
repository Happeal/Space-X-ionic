import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Rocket } from '../../models/Rocket';

/**
 * Generated class for the RocketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {

  rockets : Rocket[];
  rocket : string = "active";

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllRockets().subscribe(data =>{
      this.rockets = data;
    } )
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketListPage');
  }


}
