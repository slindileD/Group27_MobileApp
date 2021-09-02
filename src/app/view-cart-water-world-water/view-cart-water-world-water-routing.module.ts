import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCartWaterWorldWaterPage } from './view-cart-water-world-water.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCartWaterWorldWaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCartWaterWorldWaterPageRoutingModule {}
