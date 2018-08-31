import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {
  id:number;
  constructor(private _routerActive:ActivatedRoute) {

    this._routerActive.parent.params.subscribe(params =>{
      this.id = params['id'];
    });
   }

  ngOnInit() {
  }

  

}
