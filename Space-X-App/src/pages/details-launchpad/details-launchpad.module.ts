import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsLaunchpadPage } from './details-launchpad';

@NgModule({
  declarations: [
    DetailsLaunchpadPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsLaunchpadPage),
  ],
})
export class DetailsLaunchpadPageModule {}
