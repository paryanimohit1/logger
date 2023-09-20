import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = this.auth.isLoggedIn;
      if (state.url.includes('login') || state.url.includes('register')) {
        if (isLoggedIn) {
          this.router.navigate(['']);
        }
        return !isLoggedIn;
      } else {
        if (!isLoggedIn) {
          this.router.navigate(['login']);
        }
        return isLoggedIn;
      }
    return true;
  }
  
}
