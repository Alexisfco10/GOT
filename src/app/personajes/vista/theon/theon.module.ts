import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheonPageRoutingModule } from './theon-routing.module';

import { TheonPage } from './theon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheonPageRoutingModule
  ],
  declarations: [TheonPage]
})
export class TheonPageModule {}
