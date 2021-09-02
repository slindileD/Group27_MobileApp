import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCartBulkWaterPageRoutingModule } from './view-cart-bulk-water-routing.module';

import { ViewCartBulkWaterPage } from './view-cart-bulk-water.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCartBulkWaterPageRoutingModule
  ],
  declarations: [ViewCartBulkWaterPage]
})
export class ViewCartBulkWaterPageModule {}
