import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = true;

  constructor(private router: Router) { }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['/timelines']);
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
