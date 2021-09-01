import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToLaysCartPageRoutingModule } from './add-to-lays-cart-routing.module';

import { AddToLaysCartPage } from './add-to-lays-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToLaysCartPageRoutingModule
  ],
  declarations: [AddToLaysCartPage]
})
export class AddToLaysCartPageModule {}
