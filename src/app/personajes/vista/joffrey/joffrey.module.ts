import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoffreyPageRoutingModule } from './joffrey-routing.module';

import { JoffreyPage } from './joffrey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoffreyPageRoutingModule
  ],
  declarations: [JoffreyPage]
})
export class JoffreyPageModule {}
