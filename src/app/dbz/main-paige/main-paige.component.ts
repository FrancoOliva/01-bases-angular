import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-paige',
  templateUrl: './main-paige.component.html',
  styleUrls: ['./main-paige.component.css']
})
export class MainPaigeComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    this.personajes.push(this.nuevo); // agregamos al arreglo de personajes el personaje insertado en los inputs
    
    this.nuevo = { // reseteamos los valores
      nombre: '',
      poder: 0
    }
  }

}
