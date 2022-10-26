import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoffreyPage } from './joffrey.page';

const routes: Routes = [
  {
    path: '',
    component: JoffreyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoffreyPageRoutingModule {}
