import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLaysDetailsPageRoutingModule } from './view-lays-details-routing.module';

import { ViewLaysDetailsPage } from './view-lays-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLaysDetailsPageRoutingModule
  ],
  declarations: [ViewLaysDetailsPage]
})
export class ViewLaysDetailsPageModule {}
