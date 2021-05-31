import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
  
})
export class AgregarComponent {

  // @Input() personajes: Personaje[] = [];


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevopersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    console.log(this.nuevo);
    this.onNuevopersonaje.emit( this.nuevo );
    
    this.nuevo = { // reseteamos los valores
      nombre: '',
      poder: 0
    }

    
  }

}