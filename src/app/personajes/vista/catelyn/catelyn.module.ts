import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatelynPageRoutingModule } from './catelyn-routing.module';

import { CatelynPage } from './catelyn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatelynPageRoutingModule
  ],
  declarations: [CatelynPage]
})
export class CatelynPageModule {}
