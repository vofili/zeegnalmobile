import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessScanPage } from './success-scan';

@NgModule({
  declarations: [
    SuccessScanPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessScanPage),
  ],
})
export class SuccessScanPageModule {}
