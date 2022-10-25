import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhiteWalkersPage } from './white-walkers.page';

const routes: Routes = [
  {
    path: '',
    component: WhiteWalkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhiteWalkersPageRoutingModule {}
