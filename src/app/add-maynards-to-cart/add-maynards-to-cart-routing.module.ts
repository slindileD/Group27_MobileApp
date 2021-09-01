import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMaynardsToCartPage } from './add-maynards-to-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AddMaynardsToCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMaynardsToCartPageRoutingModule {}
