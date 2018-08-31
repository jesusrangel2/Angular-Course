import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,AfterViewChecked, AfterViewInit
, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>

  <hr>

  <app-css></app-css>
  <p>Out of css component</p>

  <app-ng-clasess></app-ng-clasess>
  <hr>
  <br>
  <p [appResaltado]="'blue'">
      Directiva personalizadas
  </p>

  <br><br>
  <p>NgSwithc</p>
  <app-ngswitch></app-ngswitch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,AfterViewChecked, AfterViewInit
, OnDestroy {

  constructor() {
    console.log('constructor');
   }

  ngOnChanges() {
    console.log("ngOnChenges.");
  }
  ngDoCheck() {
    console.log("ngDoChek.");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit.");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  ngOnInit() {
    console.log('ngOnInit');
  }

}
