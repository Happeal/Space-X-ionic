import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launch } from '../../models/Launch';
import { DetailsLaunchPage } from '../details-launch/details-launch';

import { InfoPage } from '../info/info';

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
 

  launch : String = 'latest';
  launches: Launch[];
  launchesLatest : Launch[];
  FilterLaunch;
  FilterLaunchLatest;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider,
    private localNotifications: LocalNotifications ) 
    {
      this.spacexApi.getAllLaunchesLatest().subscribe(data =>{
        this.launchesLatest = data;
        this.initializeItemsLatest();
        
    } )

   this.spacexApi.getAllLaunchesNext().subscribe(data =>{
      this.launches = data;
      this.initializeItemsSoon();
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

  goToInformation(){
    this.navCtrl.push(InfoPage);
  }
  notif(){

  this.localNotifications.schedule({
    id: 1,
    text: 'Next launch '+ this.launches[0].mission_name 
  });

}

onInput(searchTerm){

  if (this.launch == 'latest'){

  
        this.initializeItemsLatest();

        var searchValue = searchTerm.srcElement.value;

          if (!searchValue) {
            return;
          }

          this.FilterLaunchLatest = this.FilterLaunchLatest.filter((item) => {

              if (item.mission_name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                return true;
              }
              return false;
            }
        );
   }

   else if (this.launch == 'soon'){

    this.initializeItemsSoon();

    var searchValueSoon = searchTerm.srcElement.value;

<<<<<<< HEAD
=======
      if (!searchValueSoon) {
        return;
      }

      this.FilterLaunch = this.FilterLaunch.filter((itemSoon) => {

          if (itemSoon.mission_name.toLowerCase().indexOf(searchValueSoon.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
    );

 }

}

initializeItemsLatest(){
 
  this.FilterLaunchLatest = this.launchesLatest;
}

initializeItemsSoon(){
  this.FilterLaunch = this.launches;
}
/*
getDatesBetween()  {
>>>>>>> features/searchBar


}
