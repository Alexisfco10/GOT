import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaenerysPageRoutingModule } from './daenerys-routing.module';

import { DaenerysPage } from './daenerys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaenerysPageRoutingModule
  ],
  declarations: [DaenerysPage]
})
export class DaenerysPageModule {}
