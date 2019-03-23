import { Lift } from '../models';
import { Action } from '@ngrx/store';

export namespace LiftModule {
  export enum ActionTypes {
    LOAD_INIT_LIFTS = '[Lift] Load Init Lifts',
    SUCCESS_INIT_LIFTS = '[Lift] Success Init Lifts',
    ERROR_LOAD_ACTION = '[Lift] Error Load Action'
  }

  export class LoadInitLifts implements Action {
    readonly  type = ActionTypes.LOAD_INIT_LIFTS;
    constructor(public payload: any) {}
  }

  export class SuccessInitLifts implements Action {
    readonly type = ActionTypes.SUCCESS_INIT_LIFTS;
    constructor(public payload: Lift) {}
  }

  export class ErrorLoadAction implements Action {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: any) {}
  }

  export type Actions = LoadInitLifts | ErrorLoadAction | SuccessInitLifts;
}
