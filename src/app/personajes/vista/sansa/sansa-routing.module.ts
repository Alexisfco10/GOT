import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SansaPage } from './sansa.page';

const routes: Routes = [
  {
    path: '',
    component: SansaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SansaPageRoutingModule {}
