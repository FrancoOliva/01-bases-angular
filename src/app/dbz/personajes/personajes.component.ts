import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
  
})
export class PersonajesComponent {

  // este input, estos personajes, van a venir del componente padre
  // @Input() personajes: Personaje[] = [];

  
  // obtenemos los personajes desde el servicio
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService){

  }

  

}
