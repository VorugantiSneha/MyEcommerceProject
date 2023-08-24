import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loggedIn = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
    location.reload();
  }
}
