import { Stuff } from '../models';
import { Action } from '@ngrx/store';

export namespace StuffModule {
  export enum ActionTypes {
    LOAD_INIT_STUFFS = '[Stuff] Load Init Stuffs',
    SUCCESS_INIT_STUFFS = '[Stuff] Success Init Stuffs',
    ERROR_LOAD_ACTION = '[Stuff] Error Load Action'
  }

  export class LoadInitStuffs implements Action {
    readonly  type = ActionTypes.LOAD_INIT_STUFFS;
  }

  export class SuccessInitStuffs implements Action {
    readonly type = ActionTypes.SUCCESS_INIT_STUFFS;
    constructor(public payload: Stuff[]) {}
  }

  export class ErrorLoadAction implements Action {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: any) {}
  }

  export type Actions = LoadInitStuffs | ErrorLoadAction | SuccessInitStuffs;
}
