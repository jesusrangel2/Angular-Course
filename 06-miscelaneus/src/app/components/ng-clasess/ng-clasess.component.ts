import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-clasess',
  templateUrl: './ng-clasess.component.html',
  styles: []
})
export class NgClasessComponent implements OnInit {

  alert = 'alert-danger';
  properties: Object = {
    danger: false
  };
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
