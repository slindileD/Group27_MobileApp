import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCartPageRoutingModule } from './update-cart-routing.module';

import { UpdateCartPage } from './update-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCartPageRoutingModule
  ],
  declarations: [UpdateCartPage]
})
export class UpdateCartPageModule {}
