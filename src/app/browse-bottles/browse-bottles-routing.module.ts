import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseBottlesPage } from './browse-bottles.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseBottlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseBottlesPageRoutingModule {}
