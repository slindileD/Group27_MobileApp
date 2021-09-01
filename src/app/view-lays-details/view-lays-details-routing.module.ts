import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLaysDetailsPage } from './view-lays-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLaysDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLaysDetailsPageRoutingModule {}
