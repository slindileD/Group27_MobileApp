import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCartBulkWaterPage } from './view-cart-bulk-water.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCartBulkWaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCartBulkWaterPageRoutingModule {}
