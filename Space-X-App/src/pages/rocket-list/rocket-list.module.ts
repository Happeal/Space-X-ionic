import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RocketListPage } from './rocket-list';

@NgModule({
  declarations: [
    RocketListPage,
  ],
  imports: [
    IonicPageModule.forChild(RocketListPage),
  ],
})
export class RocketListPageModule {}
