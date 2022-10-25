import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjecucionPage } from './ejecucion.page';

const routes: Routes = [
  {
    path: '',
    component: EjecucionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjecucionPageRoutingModule {}
