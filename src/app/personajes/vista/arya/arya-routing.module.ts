import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AryaPage } from './arya.page';

const routes: Routes = [
  {
    path: '',
    component: AryaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AryaPageRoutingModule {}
