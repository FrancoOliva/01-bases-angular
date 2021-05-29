import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
  
})
export class PersonajesComponent {

  // este input, estos personajes, van a venir del componente padre
  @Input() personajes: Personaje[] = [];

  

}
