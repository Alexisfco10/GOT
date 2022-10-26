import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerseiPageRoutingModule } from './cersei-routing.module';

import { CerseiPage } from './cersei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerseiPageRoutingModule
  ],
  declarations: [CerseiPage]
})
export class CerseiPageModule {}
