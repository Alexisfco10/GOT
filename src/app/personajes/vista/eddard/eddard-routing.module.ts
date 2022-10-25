import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EddardPage } from './eddard.page';

const routes: Routes = [
  {
    path: '',
    component: EddardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EddardPageRoutingModule {}
