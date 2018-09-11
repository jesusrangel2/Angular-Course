import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-typeahead',
  template: `
  <div class="search-results">
    <i class="fas fa-plane departure-icon rotate-30"></i>
    <input type="text" [value]="query" placeholder="{{placeholder}}"
        ngxTypeahead class="form-control pl-30"
        [taUrl]="url"
        [taItemTpl]="itemTpl"
        [taApi]="api"
        [taParams]="params"
        [taDebounce] = 100
        (taSelected)="handleResultSelected2($event)"
    >
    <span class="input-airport-code">{{airportCode}}</span>
    <ng-template #itemTpl let-result class="list-item">
        
        <div (click)="resultSelect(result.result)" *ngIf="result.result._type === 'city'" class="box-result">
          <i  class="fas fa-city"></i>
          <span class="city-name" >{{ result.result.city_name }},
            <span class="country-name">{{ result.result.country_name }}</span>
          </span>
          <span class="airport-name" >All airports</span>
          <span class="airport-code">{{ result.result.code }}</span>
        </div>

        <div (click)="resultSelect(result.result)"*ngIf="result.result._type === 'airport'" class="box-result">
          <i class="fas fa-plane rotate-30"></i>
          <span class="city-name" >{{ result.result.city_name }},
            <span class="country-name">{{ result.result.country_name }}</span>
          </span>
          <span class="airport-name" >{{ result.result.name}}</span>
          <span class="airport-code">{{ result.result.code }}</span>
        </div>
    </ng-template>
    </div>
  `,
  styles: []
})
export class InputTypeaheadComponent {

  
  @Input() placeholder:string;

  @Output() airportCodeEmit:EventEmitter<string>;

  public query = '';
  public url = `https://autocomplete.travelpayouts.com/jravia?locale=es&with_countries=false&q=${this.query}`;
  public airportCode;
  public params = {};

  public resultSelect (result) {
    
    this.query = result.city_fullname;
    this.airportCode = result.code;
    this.airportCodeEmit.emit(this.airportCode);
  
  }
  public handleResultSelected2 (result) {
    
  }
  constructor() {
    this.airportCodeEmit = new EventEmitter();
  }

  

}
