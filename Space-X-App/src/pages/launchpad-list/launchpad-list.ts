import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launchpad } from '../../models/Launchpad';

/**
 * Generated class for the LaunchpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {
  launchpads : Launchpad[];
  launchpad : string = "active";

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunchpads().subscribe(data =>{
      this.launchpads = data;      
  } )

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadListPage');
  }

}
