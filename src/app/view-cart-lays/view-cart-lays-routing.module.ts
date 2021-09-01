import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCartLaysPage } from './view-cart-lays.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCartLaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCartLaysPageRoutingModule {}
