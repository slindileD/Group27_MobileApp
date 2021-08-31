import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvideFeedBackPage } from './provide-feed-back.page';

const routes: Routes = [
  {
    path: '',
    component: ProvideFeedBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvideFeedBackPageRoutingModule {}
