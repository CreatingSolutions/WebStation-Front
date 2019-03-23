import { School } from '../models';
import { Action } from '@ngrx/store';

export namespace SchoolModule {
  export enum ActionTypes {
    LOAD_INIT_SCHOOLS = '[School] Load Init Schools',
    SUCCESS_INIT_SCHOOLS = '[School] Success Init Schools',
    ERROR_LOAD_ACTION = '[School] Error Load Action'
  }

  export class LoadInitSchools implements Action {
    readonly  type = ActionTypes.LOAD_INIT_SCHOOLS;
  }

  export class SuccessInitSchools implements Action {
    readonly type = ActionTypes.SUCCESS_INIT_SCHOOLS;
    constructor(public payload: School[]) {}
  }

  export class ErrorLoadAction implements Action {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: any) {}
  }

  export type Actions = LoadInitSchools | ErrorLoadAction | SuccessInitSchools;
}
