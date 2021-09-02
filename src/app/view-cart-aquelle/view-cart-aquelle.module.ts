import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCartAquellePageRoutingModule } from './view-cart-aquelle-routing.module';

import { ViewCartAquellePage } from './view-cart-aquelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCartAquellePageRoutingModule
  ],
  declarations: [ViewCartAquellePage]
})
export class ViewCartAquellePageModule {}
