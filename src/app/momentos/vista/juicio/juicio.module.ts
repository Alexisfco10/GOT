import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuicioPageRoutingModule } from './juicio-routing.module';

import { JuicioPage } from './juicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuicioPageRoutingModule
  ],
  declarations: [JuicioPage]
})
export class JuicioPageModule {}
