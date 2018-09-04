import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Heroe } from '../../models/heroe';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    name:'',
    bio:'',
    house:'Marvel'
  }

  update:boolean = true;
  key:string;
  constructor(private _firebaseService:FirebaseService, private _route:Router, private _activeRoute:ActivatedRoute) { 

    this._activeRoute.params
          .subscribe(params=>{
            this.key = params.id
            if(this.key !== 'new'){
              this._firebaseService.getHeroe(this.key)
                  .subscribe(data =>{
                    this.heroe = data;
                    console.log(this.heroe);
              })
            }
          })

        

  }

  ngOnInit() {
  }

  saveForm(){
    console.log(this.heroe);

    if(this.key === 'new'){
      console.log("insert");

      this._firebaseService.newHeroe(this.heroe)
      .subscribe(data=>{          
        this._route.navigate(['/heroe', data.name]);

      }, error=> console.error(error));

    }else{

      console.log("update");

      this._firebaseService.saveHeroe(this.heroe, this.key)
      .subscribe(data=>{          
        this._route.navigate(['/heroe', data.name]);

      }, error=> console.error(error));

     

    }

   
  }

  addHeroe(form:NgForm){

    this._route.navigate(['/heroe', 'new']);

    form.reset({
      name:'',
      bio:'',
      house:'Marvel'
    });

  }

}
