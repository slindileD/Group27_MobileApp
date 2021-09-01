import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCartMaynardsPageRoutingModule } from './view-cart-maynards-routing.module';

import { ViewCartMaynardsPage } from './view-cart-maynards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCartMaynardsPageRoutingModule
  ],
  declarations: [ViewCartMaynardsPage]
})
export class ViewCartMaynardsPageModule {}
