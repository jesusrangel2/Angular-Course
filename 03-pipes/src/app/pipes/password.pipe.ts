import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {
    
    if(active){
      return value;
    }else{
      let out:string = "";
      for (let i = 0; i < value.length; i++){
        out += "*";
      }
      return out;
     
      

    }
    
    
  }

}
