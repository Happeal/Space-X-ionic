import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launchpad } from '../../models/Launchpad';
import { DetailsLaunchpadPage } from '../details-launchpad/details-launchpad';

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

  FilterLaunchpadsActive;
  FilterLaunchpadsRetired;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunchpads().subscribe(data =>{
      this.launchpads = data;    
      this.initializeItemsActive();
      this.initializeItemsRetired();  
  } )

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadListPage');
  }


  goToLaunchpad(launchpad : Launchpad){
    this.navCtrl.push(DetailsLaunchpadPage, launchpad);
  }

  onInput(searchTerm){

    if (this.launchpad == 'retired'){
          this.initializeItemsRetired();
  
          var searchValue = searchTerm.srcElement.value;
  
            if (!searchValue) {
              return;
            }
  
            this.FilterLaunchpadsRetired = this.FilterLaunchpadsRetired.filter((item) => {
  
                if (item.location.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                  return true;
                }
                return false;
              }
          );
     }
  
     else if (this.launchpad == 'active'){
  
      this.initializeItemsActive();
  
      var searchValueActive = searchTerm.srcElement.value;
  
        if (!searchValueActive) {
          return;
        }
  
        this.FilterLaunchpadsActive = this.FilterLaunchpadsActive.filter((itemActive) => {
  
            if (itemActive.location.name.toLowerCase().indexOf(searchValueActive.toLowerCase()) > -1) {
              return true;
            }
            return false;
          }
      );
  
   }
  
  }
  
  initializeItemsRetired(){
   
    this.FilterLaunchpadsRetired = this.launchpads;
  }
  
  initializeItemsActive(){
    this.FilterLaunchpadsActive= this.launchpads;
  }
}
