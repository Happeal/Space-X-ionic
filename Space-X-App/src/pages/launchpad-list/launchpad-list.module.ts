import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchpadListPage } from './launchpad-list';

@NgModule({
  declarations: [
    LaunchpadListPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchpadListPage),
  ],
})
export class LaunchpadListPageModule {}
