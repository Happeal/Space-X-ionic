import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launch } from '../../models/Launch';

/**
 * Generated class for the DetailsLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-launch',
  templateUrl: 'details-launch.html',
})
export class DetailsLaunchPage {

  launch : Launch;

  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider ) {
      this.launch = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsLaunchPage');
  }

}
