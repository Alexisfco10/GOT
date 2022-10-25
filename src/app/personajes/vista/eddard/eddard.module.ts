import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EddardPageRoutingModule } from './eddard-routing.module';

import { EddardPage } from './eddard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EddardPageRoutingModule
  ],
  declarations: [EddardPage]
})
export class EddardPageModule {}
