import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseWaterPageRoutingModule } from './browse-water-routing.module';

import { BrowseWaterPage } from './browse-water.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseWaterPageRoutingModule
  ],
  declarations: [BrowseWaterPage]
})
export class BrowseWaterPageModule {}
