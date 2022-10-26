import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobbPageRoutingModule } from './robb-routing.module';

import { RobbPage } from './robb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobbPageRoutingModule
  ],
  declarations: [RobbPage]
})
export class RobbPageModule {}
