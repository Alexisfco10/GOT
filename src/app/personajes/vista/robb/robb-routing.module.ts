import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobbPage } from './robb.page';

const routes: Routes = [
  {
    path: '',
    component: RobbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobbPageRoutingModule {}
