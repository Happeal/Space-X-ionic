import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsCapsulePage } from './details-capsule';

@NgModule({
  declarations: [
    DetailsCapsulePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsCapsulePage),
  ],
})
export class DetailsCapsulePageModule {}
