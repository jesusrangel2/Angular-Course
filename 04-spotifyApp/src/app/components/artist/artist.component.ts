import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../serivces/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist:any;
  topTracks:any[];
  showLoading:boolean;

  constructor(private _spotifyService:SpotifyService, private _router:ActivatedRoute) {
    this.showLoading = true;
    this._router.params.subscribe(params =>{
      console.log(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
     
    });
    
  }

  ngOnInit() {
    
  }

  getArtist(id:string){
      this._spotifyService.findArtist(id)
      .subscribe((resp:any) =>{
        console.log(resp);
        this.artist= resp;
        this.showLoading = false;
    });
  }

  getTopTracks(id:string){
    this._spotifyService.getTopTracksByArtist(id)
    .subscribe((resp:any) =>{
      console.log(resp);
      this.topTracks = resp;
      
  });
}

}
