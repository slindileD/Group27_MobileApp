import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestQuotationPageRoutingModule } from './request-quotation-routing.module';

import { RequestQuotationPage } from './request-quotation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestQuotationPageRoutingModule
  ],
  declarations: [RequestQuotationPage]
})
export class RequestQuotationPageModule {}
