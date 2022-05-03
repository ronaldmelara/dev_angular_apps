import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  heroe:any = {};

  constructor(private route:Router) { 

  }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    //console.log(termino);
    this.route.navigate(['/buscador', termino]);
  }
}
