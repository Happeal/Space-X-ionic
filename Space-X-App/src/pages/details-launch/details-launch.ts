import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Launch } from '../../models/Launch';
import { Launchpad } from '../../models/Launchpad';
import { Rocket } from '../../models/Rocket';
import { Capsule } from '../../models/Capsule';
import { CapsuleDetail } from '../../models/Capsule';
import { DetailsRocketPage } from '../details-rocket/details-rocket';
import { DetailsCapsulePage } from '../details-capsule/details-capsule';
import { DetailsLaunchpadPage } from '../details-launchpad/details-launchpad';


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
  launchpad : Launchpad;
  rocket : Rocket;
  caps : CapsuleDetail;

  
  sections = [];
  sectionsName = [
    "Rocket",
    "Capsule",
    "Site",
  ];
  sectionsOpen = [
    false,
    false,
    false
  ];


  sectionBadges =[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider ) {
      this.launch = this.navParams.data;

      this.spacexApi.getLaunchpadByName(this.launch.launch_site.site_id).subscribe(data =>{
        this.launchpad = data;
      } )

      this.spacexApi.getRocketById(this.launch.rocket.rocket_id).subscribe(data =>{
        this.rocket = data;
      })

      this.spacexApi.getCapsuleDetailBySerial(this.launch.rocket.second_stage.payloads[0].cap_serial)
        .subscribe(data =>{
          this.caps = data;
        })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsLaunchPage');
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

  goToRocket(rocket : Rocket){
    this.navCtrl.push(DetailsRocketPage, rocket);
  }
  goToCapsule(){
    this.spacexApi.getCapsuleById(this.caps.capsule_id).subscribe(data =>{
      this.navCtrl.push(DetailsCapsulePage, data);
    })
  }

  goToLaunchpad(launchpad : Launchpad){
    this.navCtrl.push(DetailsLaunchpadPage, launchpad);
  }
}
