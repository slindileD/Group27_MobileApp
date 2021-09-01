import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCartLaysPageRoutingModule } from './view-cart-lays-routing.module';

import { ViewCartLaysPage } from './view-cart-lays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCartLaysPageRoutingModule
  ],
  declarations: [ViewCartLaysPage]
})
export class ViewCartLaysPageModule {}
