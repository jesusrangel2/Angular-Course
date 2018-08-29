import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items:any[] = [];

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  showArtist(idArtist:string){
    this._router.navigate(["/artist", idArtist]);  
  }

  showDetail(item:any){
    if(item.album_type){
      this._router.navigate(["/album", item.id]);  
    }else{
      this.showArtist(item.id)
    }
  }

}
