import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAquelleToCartPageRoutingModule } from './add-aquelle-to-cart-routing.module';

import { AddAquelleToCartPage } from './add-aquelle-to-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAquelleToCartPageRoutingModule
  ],
  declarations: [AddAquelleToCartPage]
})
export class AddAquelleToCartPageModule {}
