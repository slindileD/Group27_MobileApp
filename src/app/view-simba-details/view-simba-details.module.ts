import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSimbaDetailsPageRoutingModule } from './view-simba-details-routing.module';

import { ViewSimbaDetailsPage } from './view-simba-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSimbaDetailsPageRoutingModule
  ],
  declarations: [ViewSimbaDetailsPage]
})
export class ViewSimbaDetailsPageModule {}
