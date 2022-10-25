import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobertPage } from './robert.page';

const routes: Routes = [
  {
    path: '',
    component: RobertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobertPageRoutingModule {}
