import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSimbaDetailsPage } from './view-simba-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSimbaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSimbaDetailsPageRoutingModule {}
