import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Hello worl this is a html tag
    </p>

    <button class="btn btn-primary" (click)="size= size + 5">
      <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="size= size - 5">
    <i class="fas fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size = 10;

  constructor() { }

  ngOnInit() {
  }

}
