import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonPage } from './jon.page';

const routes: Routes = [
  {
    path: '',
    component: JonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonPageRoutingModule {}
