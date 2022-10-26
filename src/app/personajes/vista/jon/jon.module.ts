import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonPageRoutingModule } from './jon-routing.module';

import { JonPage } from './jon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonPageRoutingModule
  ],
  declarations: [JonPage]
})
export class JonPageModule {}
