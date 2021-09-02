import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWaterWorldWaterToCartPage } from './add-water-world-water-to-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AddWaterWorldWaterToCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWaterWorldWaterToCartPageRoutingModule {}
