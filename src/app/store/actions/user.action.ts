import { User } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export namespace UserModule {
  export enum ActionTypes {
    LOAD_INIT_USERS = '[userList] Load Init Users',
    SUCCESS_INIT_USERS = '[userList] Success Init Users',
    LOAD_DELETE_USER = '[todoList] Load Delete User',
    SUCCESS_DELETE_USER = '[todoList] Success Delete User',
    LOAD_CREATE_USER = '[userList] Load Create User',
    SUCCESS_CREATE_USER = '[userList] Success Create User',
    ERROR_LOAD_ACTION = '[userList] Error Load Action'
  }

  export class LoadInitUsers {
    readonly  type = ActionTypes.LOAD_INIT_USERS;
  }

  export class SuccessInitUsers {
    readonly type = ActionTypes.SUCCESS_INIT_USERS;
    constructor(public payload: User[]) {}
  }

  export class LoadDeleteUser {
    readonly type = ActionTypes.LOAD_DELETE_USER;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteUser {
    readonly type = ActionTypes.SUCCESS_DELETE_USER;
    constructor(public payload: number) {}
  }

  export class LoadCreateUser {
    readonly type = ActionTypes.LOAD_CREATE_USER;
    constructor(public payload: User) {}
  }

  export class SuccessCreateUser {
    readonly type = ActionTypes.SUCCESS_CREATE_USER;
    constructor(public payload: User) {}
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitUsers | ErrorLoadAction | SuccessInitUsers | LoadCreateUser
    | SuccessCreateUser |  LoadDeleteUser
    | SuccessDeleteUser;
}
