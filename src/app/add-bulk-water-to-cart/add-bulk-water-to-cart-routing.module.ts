import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBulkWaterToCartPage } from './add-bulk-water-to-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AddBulkWaterToCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBulkWaterToCartPageRoutingModule {}
