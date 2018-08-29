import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../serivces/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newRelases:any[] = [];
  showLoading:boolean;
  serviceError:boolean;
  messageError:string;

  constructor(private _spotifyService:SpotifyService) { 
    this.showLoading = true;
    this.serviceError = false;

    this._spotifyService.getNewrelases()
    .subscribe((resp:any) =>{
      console.log(resp);
      this.newRelases = resp;
      this.showLoading = false;
    }, (error)=>{
      this.messageError = error.error.error.message;
      this.showLoading = false;
      this.serviceError = true;
    });

  }

  ngOnInit() {

    

  }

}
