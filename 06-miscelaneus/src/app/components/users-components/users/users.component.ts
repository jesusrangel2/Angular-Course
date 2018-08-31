import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  id:number;

  constructor(private _routerActive:ActivatedRoute) {

    this._routerActive.params.subscribe(params =>{
      this.id = params['id'];
    });
   }

  ngOnInit() {
  }

}
