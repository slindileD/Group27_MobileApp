import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMaynardsDetailsPage } from './view-maynards-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMaynardsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMaynardsDetailsPageRoutingModule {}
