import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Spacex } from '../../models/Spacex';
import { HistoryPage } from '../history/history';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  infoSpaceX : Spacex;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

      this.spacexApi.getInfoOfSpaceX().subscribe(data =>{
        this.infoSpaceX = data;
      } )
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  goToHistory(){
    this.navCtrl.push(HistoryPage);
  }

}
