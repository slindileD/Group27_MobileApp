import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectQuotationPageRoutingModule } from './reject-quotation-routing.module';

import { RejectQuotationPage } from './reject-quotation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectQuotationPageRoutingModule
  ],
  declarations: [RejectQuotationPage]
})
export class RejectQuotationPageModule {}
