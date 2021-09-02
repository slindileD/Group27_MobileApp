import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAquelleDetailsPage } from './view-aquelle-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAquelleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAquelleDetailsPageRoutingModule {}
