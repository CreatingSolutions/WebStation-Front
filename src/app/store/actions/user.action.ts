import { User } from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import {Action} from '@ngrx/store';

export namespace UserModule {

  export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
  }

  export class LogIn implements Action {
    readonly type = ActionTypes.LOGIN;
    constructor(public payload: any) {}
  }

  export class LogInSuccess implements Action {
    readonly type = ActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) {}
  }

  export class LogInFailure implements Action {
    readonly type = ActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) {}
  }

  export type Actions =
    | LogIn
    | LogInSuccess
    | LogInFailure;
}
