import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-by-template',
  templateUrl: './form-by-template.component.html',
  styles: [`
    
  `]
})
export class FormByTemplateComponent implements OnInit {

  user:Object = {
    name: null,
    lastName: null,
    email:null,
    country: 'SCL ',
    genre: null
  }

  countries = [{
    code: 'SCL',
    pais: 'Chile'
  }, {
    code: 'ES',
    pais: 'España'
  }]

  constructor() { }

  ngOnInit() {
  }

  save(form:NgForm){
    console.log("ngForm" , form);
    console.log("valor Form : ", form.value);

    console.log("User: ", this.user);
  }

}
