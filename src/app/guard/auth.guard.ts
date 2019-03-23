import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../store/models';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import {selectUsers$} from '../store/selectors';
import {AlertService} from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private user$: Observable<User>;
  private user: User;

  constructor(private router: Router, private store: Store<AppState>, private alertService: AlertService) {
    this.user$ = store.select(selectUsers$);
    this.user$.subscribe(user => {
      this.user = user;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    if (!token && !this.user) {
      this.alertService.error('Veuillez vous connecter');
      this.router.navigate(['/']).catch(err => console.log(err));
      return false;
    }
    return true;
  }
}
