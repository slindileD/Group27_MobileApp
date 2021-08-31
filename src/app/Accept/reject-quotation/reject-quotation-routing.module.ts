import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectQuotationPage } from './reject-quotation.page';

const routes: Routes = [
  {
    path: '',
    component: RejectQuotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectQuotationPageRoutingModule {}
