import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToLaysCartPage } from './add-to-lays-cart.page';

const routes: Routes = [
  {
    path: '',
    component: AddToLaysCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToLaysCartPageRoutingModule {}
