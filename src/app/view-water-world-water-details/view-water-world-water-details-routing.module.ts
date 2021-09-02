import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewWaterWorldWaterDetailsPage } from './view-water-world-water-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewWaterWorldWaterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewWaterWorldWaterDetailsPageRoutingModule {}
