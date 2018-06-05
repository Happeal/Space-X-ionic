import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsLaunchPage } from './details-launch';

@NgModule({
  declarations: [
    DetailsLaunchPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsLaunchPage),
  ],
})
export class DetailsLaunchPageModule {}
