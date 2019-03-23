import { Flat } from '../models';
import { Action } from '@ngrx/store';

export namespace FlatModule {
  export enum ActionTypes {
    LOAD_INIT_FLATS = '[Flat] Load Init Flats',
    SUCCESS_INIT_FLATS = '[Flat] Success Init Flats',
    ERROR_LOAD_ACTION = '[Flat] Error Load Action'
  }

  export class LoadInitFlats implements Action {
    readonly  type = ActionTypes.LOAD_INIT_FLATS;
  }

  export class SuccessInitFlats implements Action {
    readonly type = ActionTypes.SUCCESS_INIT_FLATS;
    constructor(public payload: Flat[]) {}
  }

  export class ErrorLoadAction implements Action {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: any) {}
  }

  export type Actions = LoadInitFlats | ErrorLoadAction | SuccessInitFlats;
}
