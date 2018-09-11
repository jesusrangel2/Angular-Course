import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent implements AfterViewInit{
  
  @Input() placeholder:string;
  @Output() dateSelectedEmit:EventEmitter<Date>;
  

  constructor() {
    this.dateSelectedEmit = new EventEmitter();
  }

  onValueChange(value: Date): void {
    this.dateSelectedEmit.emit(value);
  }

  ngAfterViewInit(): void {

    
    
  }
  

}
