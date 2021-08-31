import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculateQuotationPageRoutingModule } from './calculate-quotation-routing.module';

import { CalculateQuotationPage } from './calculate-quotation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculateQuotationPageRoutingModule
  ],
  declarations: [CalculateQuotationPage]
})
export class CalculateQuotationPageModule {}
