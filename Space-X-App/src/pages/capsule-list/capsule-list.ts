import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../provider/spacex-api/spacex-api';
import { Capsule } from '../../models/Capsule';
import { DetailsCapsulePage } from '../details-capsule/details-capsule';
/**
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {
  capsules : Capsule[]
  capsule : string = "active";

  FilterCapsulesActive;
  FilterCapsulesRetired;

  constructor(public navCtrl: NavController, public navParams: NavParams,private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllCapsule().subscribe(data =>{
      this.capsules = data;
      this.initializeItemsRetired();
      this.initializeItemsActive();
      
  } )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleListPage');
  }

  goToCapsule(capsule : Capsule){
      this.navCtrl.push(DetailsCapsulePage, capsule);
  }

  onInput(searchTerm){

    if (this.capsule == 'retired'){
  
    
          this.initializeItemsRetired();
  
          var searchValue = searchTerm.srcElement.value;
  
            if (!searchValue) {
              return;
            }
  
            this.FilterCapsulesRetired = this.FilterCapsulesRetired.filter((item) => {
  
                if (item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                  return true;
                }
                return false;
              }
          );
     }
  
     else if (this.capsule == 'active'){
  
      this.initializeItemsActive();
  
      var searchValueActive = searchTerm.srcElement.value;
  
        if (!searchValueActive) {
          return;
        }
  
        this.FilterCapsulesActive = this.FilterCapsulesActive.filter((itemActive) => {
  
            if (itemActive.name.toLowerCase().indexOf(searchValueActive.toLowerCase()) > -1) {
              return true;
            }
            return false;
          }
      );
  
   }
  
  }
  
  initializeItemsRetired(){
   
    this.FilterCapsulesRetired = this.capsules;
  }
  
  initializeItemsActive(){
    this.FilterCapsulesActive= this.capsules;
  }
}
