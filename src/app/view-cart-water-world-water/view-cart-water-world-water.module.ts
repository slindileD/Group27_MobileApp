import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCartWaterWorldWaterPageRoutingModule } from './view-cart-water-world-water-routing.module';

import { ViewCartWaterWorldWaterPage } from './view-cart-water-world-water.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCartWaterWorldWaterPageRoutingModule
  ],
  declarations: [ViewCartWaterWorldWaterPage]
})
export class ViewCartWaterWorldWaterPageModule {}
