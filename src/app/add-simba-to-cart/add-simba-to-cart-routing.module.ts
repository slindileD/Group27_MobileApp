import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSimbaToCartPage } from './add-simba-to-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AddSimbaToCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSimbaToCartPageRoutingModule {}
