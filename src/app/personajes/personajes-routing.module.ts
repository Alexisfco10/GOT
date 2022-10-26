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
  {
    path: 'catelyn',
    loadChildren: () => import('./vista/catelyn/catelyn.module').then( m => m.CatelynPageModule)
  },
  {
    path: 'cersei',
    loadChildren: () => import('./vista/cersei/cersei.module').then( m => m.CerseiPageModule)
  },
  {
    path: 'daenerys',
    loadChildren: () => import('./vista/daenerys/daenerys.module').then( m => m.DaenerysPageModule)
  },
  {
    path: 'jon',
    loadChildren: () => import('./vista/jon/jon.module').then( m => m.JonPageModule)
  },
  {
    path: 'robb',
    loadChildren: () => import('./vista/robb/robb.module').then( m => m.RobbPageModule)
  },
  {
    path: 'sansa',
    loadChildren: () => import('./vista/sansa/sansa.module').then( m => m.SansaPageModule)
  },
  {
    path: 'arya',
    loadChildren: () => import('./vista/arya/arya.module').then( m => m.AryaPageModule)
  },
  {
    path: 'theon',
    loadChildren: () => import('./vista/theon/theon.module').then( m => m.TheonPageModule)
  },
  {
    path: 'brandon',
    loadChildren: () => import('./vista/brandon/brandon.module').then( m => m.BrandonPageModule)
  },
  {
    path: 'joffrey',
    loadChildren: () => import('./vista/joffrey/joffrey.module').then( m => m.JoffreyPageModule)
  },
  {
    path: 'tyrion',
    loadChildren: () => import('./vista/tyrion/tyrion.module').then( m => m.TyrionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesPageRoutingModule {}
