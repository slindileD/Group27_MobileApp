import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAquelleDetailsPageRoutingModule } from './view-aquelle-details-routing.module';

import { ViewAquelleDetailsPage } from './view-aquelle-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAquelleDetailsPageRoutingModule
  ],
  declarations: [ViewAquelleDetailsPage]
})
export class ViewAquelleDetailsPageModule {}
