import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes-results',
  templateUrl: './heroes-results.component.html',
  styleUrls: ['./heroes-results.component.css']
})
export class HeroesResultsComponent implements OnInit {

  heroes:Heroe[] = [];
  searchTerm:string;

  constructor(private _heroesServices:HeroesService,
              private _activateRoute:ActivatedRoute,
              private _router:Router) { }

  ngOnInit() {

    this._activateRoute.params.subscribe(params => {
      
      this.heroes = this._heroesServices.findHeroes(params['search']);
      this.searchTerm = params['search'];
      
    })

  }
  findHeroe(id:number){
    this._router.navigate(['/heroe', id])
  }

  

}
