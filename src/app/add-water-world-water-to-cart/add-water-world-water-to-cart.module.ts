import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWaterWorldWaterToCartPageRoutingModule } from './add-water-world-water-to-cart-routing.module';

import { AddWaterWorldWaterToCartPage } from './add-water-world-water-to-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWaterWorldWaterToCartPageRoutingModule
  ],
  declarations: [AddWaterWorldWaterToCartPage]
})
export class AddWaterWorldWaterToCartPageModule {}
