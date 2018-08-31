import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {Router, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot, 
        CanActivate
      } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    console.log(next);

    if(this.authService.isAuthenticated()){
      return true;
    }else{
      return false;
    }
    
  }
}
