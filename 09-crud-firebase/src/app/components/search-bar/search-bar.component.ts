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
  placeHolderDepartur:string = 'From?'
  placeHolderArrival:string = 'To?'
  airportDeparturCode:string;
  airportArrivalCode:string;
  departurDatePlaceholder:string = "dd/mm/yyyy";
  arrivalDatePlaceholder:string = "dd/mm/yyyy";
  departurDate:Date;
  arrivalDate:Date;


  constructor(private _searchService:SearchAirportsService) { }

  ngOnInit() {
  }

  getAirportCode(code:string, dapartur:boolean){
    if(dapartur){
      this.airportDeparturCode = code;
    }else{
      this.airportArrivalCode = code;
    }
  }

  getSelectDate(date:Date, dapartur:boolean ){
    if(dapartur){
      this.departurDate = date;
    }else{
      this.arrivalDate = date;
    }
  }

}
