import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajesPage } from './personajes.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajesPage
  },
  {
    path: 'eddard',
    loadChildren: () => import('./vista/eddard/eddard.module').then( m => m.EddardPageModule)
  },
  {
    path: 'robert',
    loadChildren: () => import('./vista/robert/robert.module').then( m => m.RobertPageModule)
  },
  {
    path: 'jaime',
    loadChildren: () => import('./vista/jaime/jaime.module').then( m => m.JaimePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesPageRoutingModule {}
