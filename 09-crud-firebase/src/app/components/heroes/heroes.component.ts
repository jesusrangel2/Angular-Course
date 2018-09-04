import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any;

  constructor(private _firebaseService:FirebaseService) {

    this._firebaseService.getHeroes()
      .subscribe(data=>{
        this.heroes = data;
    })

   }

  ngOnInit() {
  }

}
