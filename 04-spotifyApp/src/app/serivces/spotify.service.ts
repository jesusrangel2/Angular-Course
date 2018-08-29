import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http:HttpClient) { }

  /**
   * Usar para crear todas las urls de peticiones
   * @param query Paramaetro que cambia por cada peticion
   */
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;

console.log(url);

    const headers = new HttpHeaders({
      Authorization:'Bearer BQAcmj_L2hqAbOvjtCr1LODQFlRCwJ5OqvJ5l3Vjm0RkyqY6ng98d0UAaHMDQy__n-TcISJ89yp7PK0dQkk'
    });

    return this._http.get(url, {headers});
  }

  /**
   * Buscar nuevos realeses
   */
  getNewrelases(){

    return this.getQuery("browse/new-releases?limit=20")
            .pipe(map(data => data['albums'].items));
    
  }

  /**
   * 
   * @param query Parametro de busqueda
   */
  searhArtists(query:string){

    return this.getQuery(`search?query=${query}&type=artist&offset=0&limit=20`)
            .pipe(map ((data:any) => data.artists.items));
  
  }
  
  findArtist(id:string){
  
    return this.getQuery(`artists/${id}`);
  }

  findAlbum(id:string){
  
    return this.getQuery(`albums/${id}`);
  }

  getTopTracksByArtist(id:string){
      
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
              .pipe(map ((data:any) => data.tracks));

  }
}
