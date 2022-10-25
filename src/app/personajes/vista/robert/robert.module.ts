import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobertPageRoutingModule } from './robert-routing.module';

import { RobertPage } from './robert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobertPageRoutingModule
  ],
  declarations: [RobertPage]
})
export class RobertPageModule {}
