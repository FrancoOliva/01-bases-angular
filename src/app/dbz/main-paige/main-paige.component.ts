import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-paige',
  templateUrl: './main-paige.component.html',
  styleUrls: ['./main-paige.component.css']
})
export class MainPaigeComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(private dbzService: DbzService){
    
  }

}
