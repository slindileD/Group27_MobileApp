import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseWaterPage } from './browse-water.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseWaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseWaterPageRoutingModule {}
