import {Action} from '@ngrx/store';

export namespace UserModule {

  export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SIGNUP = '[Auth] Signup',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    SIGNUP_FAILURE = '[Auth] Signup Failure',
    LOGOUT = '[Auth] Logout',
  }

  export class LogIn implements Action {
    readonly type = ActionTypes.LOGIN;
    constructor(public payload: any) {}
  }

  export class SignUp implements Action {
    readonly type = ActionTypes.SIGNUP;
    constructor(public payload: any) {}
  }

  export class LogInSuccess implements Action {
    readonly type = ActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) {}
  }

  export class SignUpSuccess implements Action {
    readonly type = ActionTypes.SIGNUP_SUCCESS;
    constructor(public payload: any) {}
  }

  export class LogInFailure implements Action {
    readonly type = ActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) {}
  }

  export class SignUpFailure implements Action {
    readonly type = ActionTypes.SIGNUP_FAILURE;
    constructor(public payload: any) {}
  }

  export class LogOut implements Action {
    readonly type = ActionTypes.LOGOUT;
  }

  export type Actions =
    | LogIn
    | SignUp
    | LogInSuccess
    | SignUpSuccess
    | LogInFailure
    | SignUpFailure
    | LogOut;
}
