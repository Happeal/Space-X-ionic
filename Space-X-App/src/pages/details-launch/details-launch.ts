import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launch } from '../../models/Launch';

/**
 * Generated class for the DetailsLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-launch',
  templateUrl: 'details-launch.html',
})
export class DetailsLaunchPage {

  launch : Launch;

  
  sections = [];
  sectionsName = [
    "Rocket",
    "Site",
    "Reuse"
  ];
  sectionsOpen = [
    false,
    false,
    false
  ];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider ) {
      this.launch = this.navParams.data;

      this.sections = [
        this.launch.rocket,
        this.launch.launch_site,
        this.launch.reuse
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsLaunchPage');
  }

  sectionSelected(index : number){

    for(let i = 0; i < this.sections.length; i++){
      this.sectionsOpen[i] = false;
      if(i == index){
        this.sectionsOpen[i] = true;
      }
    }

  }

}
