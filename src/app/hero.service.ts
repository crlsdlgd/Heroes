import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';// Importaciones Observables
import { MessageService } from './message.service';

// @Injectable Esto marca la clase como una que participa en el sistema de inyección de dependencia .
// La clase proporcionará un servicio inyectable y también puede tener sus propias dependencias inyectadas

@Injectable({
  providedIn: 'root' //registra un proveedor con el inyector raíz para su servicio al incluir los metadatos del proveedor,
})

// Un proveedor es algo que puede crear o entregar un servicio.
// En este caso, instancia la clase HeroService para proporcionar el servicio.
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes():Hero []{//Metodo Sincrono
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {//Metodo Asincrono
    const heroes = of(HEROES);
    this.messageService.add('Hero Service: add Hero');
    return heroes;
  }

  getHeroById(id: number): Observable<Hero>{
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
