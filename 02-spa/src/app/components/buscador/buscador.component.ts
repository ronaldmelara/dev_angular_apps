import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent  {

  heroes: Heroe[] = [];
  parametro: string = "";
  @Input() heroe:any = {};
  @Input() index:number = 0;

  constructor(private route:Router, private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService) { 
    this.activateRoute.params.subscribe(params=> {
      this.parametro = params["termino"];

      this.heroes = this._heroesService.buscarHeroes(params["termino"]);

      console.log(this.heroes);
    });
  }

  

}
