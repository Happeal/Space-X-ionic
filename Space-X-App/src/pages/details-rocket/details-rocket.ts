import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../models/Rocket';

/**
 * Generated class for the DetailsRocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-rocket',
  templateUrl: 'details-rocket.html',
})
export class DetailsRocketPage {

  rocket: Rocket;


  sections = [];
  sectionsName = [
    "Description",
    "Numbers",
    "Engines"
  ];
  sectionsOpen = [
    false,
    false,
    false
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(navParams.data);
    this.rocket = this.navParams.data;

  }
  sectionSelected(index: number) {
    for (let i = 0; i < this.sectionsOpen.length; i++) {
      if (i == index) {
        this.sectionsOpen[i] = !this.sectionsOpen[i];
      } else {
        this.sectionsOpen[i] = false;
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsRocketPage');
  }



}
