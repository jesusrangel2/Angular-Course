import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchAirportsService {

  constructor(private http:Http) { }

  search(term:string){

    let url = `https://autocomplete.travelpayouts.com/jravia?locale=es&with_countries=false&q=${term}`;
    
    return this.http.get(url)
                .pipe(map(res=>{
                  return res.json();
                }));
    

  }
}
