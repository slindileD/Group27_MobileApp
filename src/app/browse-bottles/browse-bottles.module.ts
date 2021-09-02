import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseBottlesPageRoutingModule } from './browse-bottles-routing.module';

import { BrowseBottlesPage } from './browse-bottles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseBottlesPageRoutingModule
  ],
  declarations: [BrowseBottlesPage]
})
export class BrowseBottlesPageModule {}
