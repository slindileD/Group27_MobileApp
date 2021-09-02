import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBulkWaterDetailsPageRoutingModule } from './view-bulk-water-details-routing.module';

import { ViewBulkWaterDetailsPage } from './view-bulk-water-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBulkWaterDetailsPageRoutingModule
  ],
  declarations: [ViewBulkWaterDetailsPage]
})
export class ViewBulkWaterDetailsPageModule {}
