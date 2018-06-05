import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchListPage } from './launch-list';

@NgModule({
  declarations: [
    LaunchListPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchListPage),
  ],
})
export class LaunchListPageModule {}
