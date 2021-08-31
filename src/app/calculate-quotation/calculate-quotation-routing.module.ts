import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculateQuotationPage } from './calculate-quotation.page';

const routes: Routes = [
  {
    path: '',
    component: CalculateQuotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateQuotationPageRoutingModule {}
