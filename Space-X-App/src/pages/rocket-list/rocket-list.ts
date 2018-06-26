import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Rocket } from '../../models/Rocket';
import { DetailsRocketPage } from '../details-rocket/details-rocket';

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

  FilterRocketsActive;
  FilterRocketsRetired;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllRockets().subscribe(data =>{
      this.rockets = data;
      this.initializeItemsActive();
      this.initializeItemsRetired();
      
    } )
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketListPage');
  }
  goToRocket(rocket : Rocket){
    this.navCtrl.push(DetailsRocketPage, rocket);
  }

  onInput(searchTerm){

    if (this.rocket == 'retired'){
  
    
          this.initializeItemsRetired();
  
          var searchValue = searchTerm.srcElement.value;
  
            if (!searchValue) {
              return;
            }
  
            this.FilterRocketsRetired = this.FilterRocketsRetired.filter((item) => {
  
                if (item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                  return true;
                }
                return false;
              }
          );
     }
  
     else if (this.rocket == 'active'){
  
      this.initializeItemsActive();
  
      var searchValueActive = searchTerm.srcElement.value;
  
        if (!searchValueActive) {
          return;
        }
  
        this.FilterRocketsActive = this.FilterRocketsActive.filter((itemActive) => {
  
            if (itemActive.name.toLowerCase().indexOf(searchValueActive.toLowerCase()) > -1) {
              return true;
            }
            return false;
          }
      );
  
   }
  
  }
  
  initializeItemsRetired(){
   
    this.FilterRocketsRetired = this.rockets;
  }
  
  initializeItemsActive(){
    this.FilterRocketsActive = this.rockets;
  }


}
