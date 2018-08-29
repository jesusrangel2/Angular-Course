import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../serivces/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  showLoading:boolean;

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search(searhTerm:string){

  if(searhTerm != ""){

    /**Remplazar espacios en blanco por %20 para que el servicio los interprete correctamente */
    if(searhTerm.indexOf(" ") > 0){
      searhTerm = searhTerm.split(" ").join("%20");
    }

    this.showLoading = true;
    
    this._spotifyService.searhArtists(searhTerm)
      .subscribe((resp:any)=>{
        console.log(resp);
        this.artists = resp;
        this.showLoading = false;
      });
  }else{
    this.artists = [];
  }

  }

}
