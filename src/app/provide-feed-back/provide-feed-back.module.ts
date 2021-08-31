import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvideFeedBackPageRoutingModule } from './provide-feed-back-routing.module';

import { ProvideFeedBackPage } from './provide-feed-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvideFeedBackPageRoutingModule
  ],
  declarations: [ProvideFeedBackPage]
})
export class ProvideFeedBackPageModule {}
