import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() id:number;

  @Output() selectHeroe:EventEmitter<number>;

  constructor(private _router:Router) { 
    this.selectHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  findHeroe(){
    this.selectHeroe.emit(this.heroe.id);
  }
}
