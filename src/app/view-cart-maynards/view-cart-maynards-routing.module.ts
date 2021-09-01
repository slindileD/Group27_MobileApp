import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCartMaynardsPage } from './view-cart-maynards.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCartMaynardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCartMaynardsPageRoutingModule {}
