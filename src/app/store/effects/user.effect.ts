import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { UserModule } from '../actions';
import {ApiService} from '../../services';
import ActionTypes = UserModule.ActionTypes;
import LogIn = UserModule.LogIn;
import LogInSuccess = UserModule.LogInSuccess;
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import LogInFailure = UserModule.LogInFailure;

@Injectable()
export class UserEffects {
  @Effect()
  LogIn: Observable<any> = this.actions
    .ofType(ActionTypes.LOGIN)
    .map((action: LogIn) => action.payload)
    .switchMap(payload => {
      return this.apiService.login(payload.email, payload.password)
        .map((user) => {
          console.log(user);
          return new LogInSuccess({token: user.token, email: payload.email});
        })
        .catch((error) => {
          console.log(error);
          return Observable.of(new LogInFailure({ error: error }));
        });
    });

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(ActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.token);
      this.router.navigateByUrl('/');
    })
  );

  constructor(private apiService: ApiService, private  actions: Actions, private router: Router) {}
}
