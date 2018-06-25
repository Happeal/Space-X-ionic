import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../models/Capsule'
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';

/**
 * Generated class for the DetailsCapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-capsule',
  templateUrl: 'details-capsule.html',
})
export class DetailsCapsulePage {

  capsule : Capsule;

  sections = [];
  sectionsName = [
    "Numbers",
    "Heatshield",
    "Thrusters"
  ];
  sectionsOpen = [
    false,
    false,
    false
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spacexApi: SpacexApiProvider) {
    this.capsule = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsCapsulePage');
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
}
