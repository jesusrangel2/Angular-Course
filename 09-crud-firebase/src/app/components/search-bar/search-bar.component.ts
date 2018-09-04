import { Component, OnInit } from '@angular/core';
import { SearchAirportsService } from '../../services/search-airports.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  origin:string;
  origin_iata:string = 'test';
  listOrigin:any[]
  listArrival:string[]

  constructor(private _searchService:SearchAirportsService) { }

  ngOnInit() {
  }

  searchOrigin(){

    console.log(this.origin);

    this._searchService.search(this.origin)
        .subscribe(data => {
          this.listOrigin = data;
    });

  }

}
