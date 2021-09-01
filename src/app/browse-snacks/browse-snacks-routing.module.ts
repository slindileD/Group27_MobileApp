import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseSnacksPage } from './browse-snacks.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseSnacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseSnacksPageRoutingModule {}
