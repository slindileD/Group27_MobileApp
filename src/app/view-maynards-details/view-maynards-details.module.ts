import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMaynardsDetailsPageRoutingModule } from './view-maynards-details-routing.module';

import { ViewMaynardsDetailsPage } from './view-maynards-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMaynardsDetailsPageRoutingModule
  ],
  declarations: [ViewMaynardsDetailsPage]
})
export class ViewMaynardsDetailsPageModule {}
