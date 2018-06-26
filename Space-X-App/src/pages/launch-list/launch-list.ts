import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launch } from '../../models/Launch';
import { DetailsLaunchPage } from '../details-launch/details-launch';
import { InfoPage } from '../info/info';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {
 
  launch : string = "latest";
  launches: Launch[];
  launchesLatest : Launch[];

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider ) 
    {
      this.spacexApi.getAllLaunchesLatest().subscribe(data =>{
        this.launchesLatest = data;
        
    } )

   this.spacexApi.getAllLaunchesNext().subscribe(data =>{
      this.launches = data;
      console.log("Data Next  : " + data);  
      console.log("Nom : " + this.launches[0]); 
      console.log(JSON.stringify(this.launches));
    } )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  goToDetails(launch : Launch){
    this.navCtrl.push(DetailsLaunchPage, launch);
  }

  goToInformation(){
    this.navCtrl.push(InfoPage);
  }

}
