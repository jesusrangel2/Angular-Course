import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = 'jeSus'
  name2 = 'jesus augusto leon rangel'
  array = [3,4,5,6,7,8,9,10]
  PI = Math.PI;
  a:number = 0.234;
  salary = 1234.5;

  heroe = {
    id : 1,
    name: 'Logan',
    alias: 'Wolwerine',
    age: '500',
    direction: {
      addres: 'Eleuterio ramirez',
      number: '825'
    }
  }

promiseValue = new Promise((result, reject)=>{
  setTimeout( ()=> result('Data is here'), 3000);
})

fecha = new Date();
youtube = 'WkVjenRWIYw'
active = true;

}
