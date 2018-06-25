import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpad } from '../../models/Launchpad';

/**
 * Generated class for the DetailsLaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-launchpad',
  templateUrl: 'details-launchpad.html',
})

export class DetailsLaunchpadPage {

  launchpad : Launchpad;


  sections = [];
  sectionsName = [
    "Description",
    "Vehicles Launched",
    "Location"
  ];
  sectionsOpen = [
    false,
    false,
    false
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launchpad = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsLaunchpadPage');
  }

  sectionSelected(index : number){
    for(let i = 0; i < this.sectionsOpen.length; i++){
      if(i == index){
        this.sectionsOpen[i] = !this.sectionsOpen[i];
      }else{
        this.sectionsOpen[i] = false;
      }
    }
  }

}
