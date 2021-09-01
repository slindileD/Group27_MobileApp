import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSimbaToCartPageRoutingModule } from './add-simba-to-cart-routing.module';

import { AddSimbaToCartPage } from './add-simba-to-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSimbaToCartPageRoutingModule
  ],
  declarations: [AddSimbaToCartPage]
})
export class AddSimbaToCartPageModule {}
