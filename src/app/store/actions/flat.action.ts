import { Flat } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export namespace FlatModule {
  export enum ActionTypes {
    LOAD_INIT_FLATS = '[Flat] Load Init Flats',
    SUCCESS_INIT_FLATS = '[Flat] Success Init Flats',
    LOAD_DELETE_FLAT = '[Flat] Load Delete Flat',
    SUCCESS_DELETE_FLAT = '[Flat] Success Delete Flat',
    LOAD_CREATE_FLAT = '[Flat] Load Create Flat',
    SUCCESS_CREATE_FLAT = '[Flat] Success Create Flat',
    ERROR_LOAD_ACTION = '[Flat] Error Load Action'
  }

  export class LoadInitFlats {
    readonly  type = ActionTypes.LOAD_INIT_FLATS;
  }

  export class SuccessInitFlats {
    readonly type = ActionTypes.SUCCESS_INIT_FLATS;
    constructor(public payload: Flat[]) {}
  }

  export class LoadDeleteFlat {
    readonly type = ActionTypes.LOAD_DELETE_FLAT;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteFlat {
    readonly type = ActionTypes.SUCCESS_DELETE_FLAT;
    constructor(public payload: number) {}
  }

  export class LoadCreateFlat {
    readonly type = ActionTypes.LOAD_CREATE_FLAT;
    constructor(public payload: Flat) {}
  }

  export class SuccessCreateFlat {
    readonly type = ActionTypes.SUCCESS_CREATE_FLAT;
    constructor(public payload: Flat) {}
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: any) {}
  }

  export type Actions = LoadInitFlats | ErrorLoadAction | SuccessInitFlats | LoadCreateFlat
    | SuccessCreateFlat |  LoadDeleteFlat
    | SuccessDeleteFlat;
}
