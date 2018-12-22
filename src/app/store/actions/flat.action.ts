import { Flat } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export namespace FlatModule {
  export enum ActionTypes {
    LOAD_INIT_FLATS = '[flatList] Load Init Flats',
    SUCCESS_INIT_FLATS = '[flatList] Success Init Flats',
    LOAD_DELETE_FLAT = '[todoList] Load Delete Flat',
    SUCCESS_DELETE_FLAT = '[todoList] Success Delete Flat',
    LOAD_CREATE_FLAT = '[flatList] Load Create Flat',
    SUCCESS_CREATE_FLAT = '[flatList] Success Create Flat',
    ERROR_LOAD_ACTION = '[flatList] Error Load Action'
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
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitFlats | ErrorLoadAction | SuccessInitFlats | LoadCreateFlat
    | SuccessCreateFlat |  LoadDeleteFlat
    | SuccessDeleteFlat;
}
