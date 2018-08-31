import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService) { 
    this.authService.handleAuthentication();
  }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

  logOut(){
    this.authService.logout();
  }

  isAuthenticated(){
      return this.authService.isAuthenticated();
  }
}
