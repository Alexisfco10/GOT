import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TyrionPageRoutingModule } from './tyrion-routing.module';

import { TyrionPage } from './tyrion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TyrionPageRoutingModule
  ],
  declarations: [TyrionPage]
})
export class TyrionPageModule {}
