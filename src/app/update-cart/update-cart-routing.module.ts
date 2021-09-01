import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCartPage } from './update-cart.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCartPageRoutingModule {}
