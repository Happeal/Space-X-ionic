import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapsuleListPage } from './capsule-list';

@NgModule({
  declarations: [
    CapsuleListPage,
  ],
  imports: [
    IonicPageModule.forChild(CapsuleListPage),
  ],
})
export class CapsuleListPageModule {}
