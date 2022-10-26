import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatelynPage } from './catelyn.page';

const routes: Routes = [
  {
    path: '',
    component: CatelynPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatelynPageRoutingModule {}
