import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SansaPageRoutingModule } from './sansa-routing.module';

import { SansaPage } from './sansa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SansaPageRoutingModule
  ],
  declarations: [SansaPage]
})
export class SansaPageModule {}
