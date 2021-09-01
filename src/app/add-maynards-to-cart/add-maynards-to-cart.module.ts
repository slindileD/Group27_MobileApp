import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMaynardsToCartPageRoutingModule } from './add-maynards-to-cart-routing.module';

import { AddMaynardsToCartPage } from './add-maynards-to-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMaynardsToCartPageRoutingModule
  ],
  declarations: [AddMaynardsToCartPage]
})
export class AddMaynardsToCartPageModule {}
