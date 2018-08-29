import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../serivces/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  
  album:any;
  tracks:any[] = [];
  showLoading:boolean;

  constructor(private _spotifyService:SpotifyService, private _activatedRouter:ActivatedRoute, private _router:Router) {
    this.showLoading = true;
    this._activatedRouter.params.subscribe(params =>{
      
      this.getAlbum(params['id']);
     
    });
    
  }

  ngOnInit() {
  }

  getAlbum(id:string){
    this._spotifyService.findAlbum(id)
      .subscribe((resp:any) =>{
        console.log(resp);
        this.album = resp;
        this.tracks = resp.tracks.items;
        console.log(this.tracks);
    });
    this.showLoading=false;
  }

  showArtist(idArtist:string){
    this._router.navigate(["/artist", idArtist]);  
  }

}
