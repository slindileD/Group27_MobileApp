import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCartSimbaPageRoutingModule } from './view-cart-simba-routing.module';

import { ViewCartSimbaPage } from './view-cart-simba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCartSimbaPageRoutingModule
  ],
  declarations: [ViewCartSimbaPage]
})
export class ViewCartSimbaPageModule {}
