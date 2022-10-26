import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaenerysPage } from './daenerys.page';

const routes: Routes = [
  {
    path: '',
    component: DaenerysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaenerysPageRoutingModule {}
