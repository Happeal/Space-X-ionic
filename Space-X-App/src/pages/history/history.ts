import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexHistory } from '../../models/SpacexHistory';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {


  history : SpacexHistory[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

    this.spacexApi.getHistoryOfSpaceX().subscribe(data =>{
      this.history = data;
    } )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
