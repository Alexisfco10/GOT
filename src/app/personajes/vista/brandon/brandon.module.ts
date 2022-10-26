import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandonPageRoutingModule } from './brandon-routing.module';

import { BrandonPage } from './brandon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandonPageRoutingModule
  ],
  declarations: [BrandonPage]
})
export class BrandonPageModule {}
