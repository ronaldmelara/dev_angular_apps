import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.services'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};


  constructor(private activateRoute: ActivatedRoute, 
    private _heroesService: HeroesService) { 
    this.activateRoute.params.subscribe( params=> {
      console.log(params);
      if(params["id"] != "-1")
      {
        console.log(params["id"]);
        this.heroe = this._heroesService.getHeroe(params["id"]);
      }
      //else if(params["row"] != "null")
      //{
       // console.log(params["row"]);
       // this.heroe = this._heroesService.getHeroeByRowId(params["row"]);
      //}
      
      console.log(this.heroe);
    })

  }

  
}
