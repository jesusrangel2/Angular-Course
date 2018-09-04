import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Heroe } from '../models/heroe';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseUrl:string = "https://heroes-app-d9f6f.firebaseio.com/Heroes";
  

  constructor(private http:Http) { }

  newHeroe(heroe:Heroe){

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( `${this.firebaseUrl}.json`, body, { headers } )
        .pipe(map(res=>{
              return res.json();
                }));

  }

  getHeroe(key:string){
    
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    let url = `${this.firebaseUrl}/${key}.json`;

    return this.http.get(url)
                .pipe(map(res=>{
                  return res.json();
                }));
  }

  getHeroes(){
    
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    let url = `${this.firebaseUrl}.json`;

    return this.http.get(url)
        .pipe(map(res=>{
          return res.json();
        }));
  }

  saveHeroe(heroe:Heroe,key:string){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    
    let url = `${this.firebaseUrl}/${key}.json`;

    return this.http.put(url,body,{headers})
                .pipe(map(res=>{
                  return res.json();

                }));

  }


  
}
