import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launch } from '../../models/Launch';
import { DetailsLaunchPage } from '../details-launch/details-launch';
import { LocalNotifications } from '@ionic-native/local-notifications';
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
    private spacexApi: SpacexApiProvider,
    private localNotifications: LocalNotifications ) 
    {
      this.spacexApi.getAllLaunchesLatest().subscribe(data =>{
        this.launchesLatest = data;
        
    } )

   this.spacexApi.getAllLaunchesNext().subscribe(data =>{
      this.launches = data;
      console.log("Next launch : " + this.launches[0].mission_name); 
      this.notif();

    } )
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LaunchListPage');
  }

  goToDetails(launch : Launch){
    this.navCtrl.push(DetailsLaunchPage, launch);
  }

  notif(){

  this.localNotifications.schedule({
    id: 1,
    text: 'Next launch '+ this.launches[0].mission_name 
  });

}


/*
getDatesBetween()  {

  var time = new Date().getTime() - new Date(this.launches[0].launch_date_local).getTime();
  
  return time;
} */

}
