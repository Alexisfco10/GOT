import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentosPage } from './momentos.page';

const routes: Routes = [
  {
    path: '',
    component: MomentosPage
  },
  {
    path: 'juicio',
    loadChildren: () => import('./vista/juicio/juicio.module').then( m => m.JuicioPageModule)
  },
  {
    path: 'ejecucion',
    loadChildren: () => import('./vista/ejecucion/ejecucion.module').then( m => m.EjecucionPageModule)
  },
  {
    path: 'boda',
    loadChildren: () => import('./vista/boda/boda.module').then( m => m.BodaPageModule)
  },
  {
    path: 'white-walkers',
    loadChildren: () => import('./vista/white-walkers/white-walkers.module').then( m => m.WhiteWalkersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentosPageRoutingModule {}
