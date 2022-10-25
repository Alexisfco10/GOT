import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiteWalkersPageRoutingModule } from './white-walkers-routing.module';

import { WhiteWalkersPage } from './white-walkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiteWalkersPageRoutingModule
  ],
  declarations: [WhiteWalkersPage]
})
export class WhiteWalkersPageModule {}
