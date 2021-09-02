import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAquelleToCartPage } from './add-aquelle-to-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AddAquelleToCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAquelleToCartPageRoutingModule {}
