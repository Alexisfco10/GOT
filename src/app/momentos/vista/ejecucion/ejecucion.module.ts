import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjecucionPageRoutingModule } from './ejecucion-routing.module';

import { EjecucionPage } from './ejecucion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjecucionPageRoutingModule
  ],
  declarations: [EjecucionPage]
})
export class EjecucionPageModule {}
