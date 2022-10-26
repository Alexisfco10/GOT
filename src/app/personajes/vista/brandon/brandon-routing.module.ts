import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandonPage } from './brandon.page';

const routes: Routes = [
  {
    path: '',
    component: BrandonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandonPageRoutingModule {}
