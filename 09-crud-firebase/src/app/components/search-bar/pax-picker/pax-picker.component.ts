import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pax-picker',
  templateUrl: './pax-picker.component.html'
})
export class PaxPickerComponent implements OnInit {

  adultPax:number = 1;
  youngPax:number = 0;
  childPax:number = 0;
  babyPax:number = 0;
  showBox:boolean = false;
  businessclass:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
