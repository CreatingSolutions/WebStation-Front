import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {AlertService} from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private alertSerivce: AlertService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router
        .navigate(['/'], { queryParams: { returnUrl: state.url, modal: true } })
        .catch(error => {
          console.log(error);
          return false;
        });
    }
  }
}
