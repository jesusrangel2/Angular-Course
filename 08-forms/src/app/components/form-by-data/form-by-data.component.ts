import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-by-data',
  templateUrl: './form-by-data.component.html',
  styles: []
})
export class FormByDataComponent implements OnInit {

  form:FormGroup;

  user:Object = {
    fullName: {
      name: 'Jesus',
      lastName: 'Leon'
    },
    username:'',
    email: 'as@as.com',
    hobbies: ['run', 'sleep', 'dance'],
    password1:'',
    passowrd2:''
  }

  constructor() {

    console.log(this.user);

    this.form = new FormGroup({
      'fullName': new FormGroup({
        'name': new FormControl('', [
          Validators.required, 
          Validators.minLength(3),
          this.noUserName]
          ),
        'lastName': new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      
      'email': new FormControl('',  [
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
                                    
                              ]),
      'hobbies': new FormArray([
        new FormControl('run', [Validators.required, Validators.minLength(3)])
      ]),
      'username': new FormControl('', [Validators.required, Validators.minLength(3), this.existUserName]),  
      'password1': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'password2': new FormControl(),
      
    });

    this.form.controls['password2'].setValidators([
      Validators.required,
      this.noTheSame.bind(this.form)
    ]);

    //this.form.setValue(this.user);

    /**todos los cambios
    this.form.valueChanges
      .subscribe(data=>{
        console.log(data);
      })
    */
      /**cambios de un solo campo */
      this.form.controls['username'].valueChanges
      .subscribe(data=>{
        console.log(data);
      })


   }
/**Si el formulario es muy grande declarar todo en el onIniti */
  ngOnInit() {
  }

  addHobby(){
    (<FormArray>this.form.controls['hobbies']).push(
      new FormControl('', [Validators.required, Validators.minLength(3)])
    )
  }

  noUserName(control:FormControl): {[s:string]:boolean}{

    if(control.value === 'Jesus'){
      return {noUserName:true};
    }

    return null;
  }

  existUserName(control:FormControl):Promise<any>|Observable<any>{
    
    let promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value==='jesusrangel'){
          resolve({
            exist:true
          })
        }else{
          resolve(null);
        }
      }, 3000);
    });
    
    return promise;

  }

  noTheSame(control:FormControl): {[s:string]:boolean}{

    let form:any = this;

    if(control.value !== form.controls['password1'].value){
      return {nothesame:true};
    }

    return null;
  }

  saveForm(){
    console.log(this.form);
    this.form.reset({
      fullName: {
        name: '',
        lastName: ''
      },
      email: ''
    });

  }

}
