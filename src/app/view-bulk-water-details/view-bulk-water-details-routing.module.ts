import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBulkWaterDetailsPage } from './view-bulk-water-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBulkWaterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBulkWaterDetailsPageRoutingModule {}
