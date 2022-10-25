import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JaimePage } from './jaime.page';

const routes: Routes = [
  {
    path: '',
    component: JaimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JaimePageRoutingModule {}
