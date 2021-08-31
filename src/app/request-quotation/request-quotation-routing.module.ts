import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestQuotationPage } from './request-quotation.page';

const routes: Routes = [
  {
    path: '',
    component: RequestQuotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestQuotationPageRoutingModule {}
