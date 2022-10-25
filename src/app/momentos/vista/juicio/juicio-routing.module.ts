import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuicioPage } from './juicio.page';

const routes: Routes = [
  {
    path: '',
    component: JuicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuicioPageRoutingModule {}
