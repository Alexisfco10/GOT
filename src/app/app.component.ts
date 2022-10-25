import { Component } from '@angular/core';
import characters from './personajes/personajes.json'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'portada', icon: 'home' },
    { title: 'Personajes', url: 'personajes', icon: 'person' },
    { title: 'Momentos', url: 'momentos', icon: 'film' },
    { title: 'Acerca de', url: 'acercade', icon: 'ellipsis-horizontal' },
    { title: 'En mi vida', url: 'mi-vida', icon: 'footsteps' },
    { title: 'Contratame', url: 'contratame', icon: 'mail' },
  ];
  constructor() {}
}
