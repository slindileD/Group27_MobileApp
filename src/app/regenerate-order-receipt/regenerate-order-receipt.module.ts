import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegenerateOrderReceiptPageRoutingModule } from './regenerate-order-receipt-routing.module';

import { RegenerateOrderReceiptPage } from './regenerate-order-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegenerateOrderReceiptPageRoutingModule
  ],
  declarations: [RegenerateOrderReceiptPage]
})
export class RegenerateOrderReceiptPageModule {}
