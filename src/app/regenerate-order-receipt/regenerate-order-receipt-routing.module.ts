import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegenerateOrderReceiptPage } from './regenerate-order-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: RegenerateOrderReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegenerateOrderReceiptPageRoutingModule {}
