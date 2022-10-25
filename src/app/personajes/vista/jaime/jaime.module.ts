import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JaimePageRoutingModule } from './jaime-routing.module';

import { JaimePage } from './jaime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JaimePageRoutingModule
  ],
  declarations: [JaimePage]
})
export class JaimePageModule {}
