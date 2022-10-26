import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerseiPage } from './cersei.page';

const routes: Routes = [
  {
    path: '',
    component: CerseiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerseiPageRoutingModule {}
