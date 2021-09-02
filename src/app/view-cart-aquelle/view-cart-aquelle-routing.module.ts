import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCartAquellePage } from './view-cart-aquelle.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCartAquellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCartAquellePageRoutingModule {}
