import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBulkWaterToCartPageRoutingModule } from './add-bulk-water-to-cart-routing.module';

import { AddBulkWaterToCartPage } from './add-bulk-water-to-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBulkWaterToCartPageRoutingModule
  ],
  declarations: [AddBulkWaterToCartPage]
})
export class AddBulkWaterToCartPageModule {}
