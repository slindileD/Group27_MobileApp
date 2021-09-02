import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWaterWorldWaterDetailsPageRoutingModule } from './view-water-world-water-details-routing.module';

import { ViewWaterWorldWaterDetailsPage } from './view-water-world-water-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewWaterWorldWaterDetailsPageRoutingModule
  ],
  declarations: [ViewWaterWorldWaterDetailsPage]
})
export class ViewWaterWorldWaterDetailsPageModule {}
