import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AryaPageRoutingModule } from './arya-routing.module';

import { AryaPage } from './arya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AryaPageRoutingModule
  ],
  declarations: [AryaPage]
})
export class AryaPageModule {}
