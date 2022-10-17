import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // export interface Hero { // Esta es la interfaz utilizada en hero.
  //   id: number;
  //   name: string;
  // }
  heroes: Hero[]=[];
  selectHero?:Hero;
  hero: Hero = {
    id: 1,
    name: 'Windsor',
  }

  onSelect(hero: Hero): void{
    this.selectHero = hero;
    this.messageService.add(`Heroes component: Selected hero id= ${hero.id}`); //Esta tilde invertida "`" la usamos para utilizar concatenar o funcion en un string
  }

  getHeroes(): void{
    // El HeroService.getHeroes()método tiene una firma sincrónica,
    // lo que implica que HeroServicepuede buscar héroes sincrónicamente.
    // HeroesComponent consume el resultado getHeroes()como si los héroes pudieran obtenerse sincrónicamente.
    //this.heroes = this.heroService.getHeroes();//Injectamos los datos del servicio a la lista de heroes

    // La nueva versión espera a Observableque emita la matriz de héroes,
    // lo que podría suceder ahora o dentro de varios minutos.
    // El método subscribe() pasa la matriz emitida a la devolución de llamada,
    // que establece la propiedad "heroes" del componente.
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);

  }


  constructor(private heroService: HeroService, private messageService: MessageService) {// Injeccion de heroService
    // getHeroes()al constructor, esa no es la mejor práctica.
    // Reserve el constructor para una inicialización mínima,
    // como conectar los parámetros del constructor a las propiedades.
    // El constructor no debería hacer nada.
  }

  ngOnInit(): void {
    // En su lugar, llame getHeroes()dentro del gancho del ciclo de vida ngOnInit y
    // deje que Angular llame ngOnInit() en el momento apropiado después de construir
    // una instancia HeroesComponent.
    this.getHeroes();
  }
}
