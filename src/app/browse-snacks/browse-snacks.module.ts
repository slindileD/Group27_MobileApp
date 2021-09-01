import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseSnacksPageRoutingModule } from './browse-snacks-routing.module';

import { BrowseSnacksPage } from './browse-snacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseSnacksPageRoutingModule
  ],
  declarations: [BrowseSnacksPage]
})
export class BrowseSnacksPageModule {}
