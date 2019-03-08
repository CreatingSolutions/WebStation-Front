import { Lift } from '../models';
import { Action } from '@ngrx/store';

export namespace LiftModule {
  export enum ActionTypes {
    LOAD_INIT_LIFTS = '[Lift] Load Init Lifts',
    SUCCESS_INIT_LIFTS = '[Lift] Success Init Lifts',
    /*LOAD_INIT_LIFTS_SKIALPIN = '[Lift] Load Init Lifts Ski Alpin',
    SUCCESS_INIT_LIFTS_SKIALPIN = '[Lift] Success Init Lifts Ski Alpin',
    LOAD_INIT_LIFTS_SKIALPIN_JEUNES = '[Lift] Load Init Lifts Ski Alpin Jeunes',
    SUCCESS_INIT_LIFTS_SKIALPIN_JEUNES = '[Lift] Success Init Lifts Ski Alpin Jeunes',
    LOAD_INIT_LIFTS_SKIALPIN_ADULTES = '[Lift] Load Init Lifts Ski Alpin Adultes',
    SUCCESS_INIT_LIFTS_SKIALPIN_ADULTES = '[Lift] Success Init Lifts Ski Alpin Adultes',
    LOAD_INIT_LIFTS_SKIALPIN_SENIOR = '[Lift] Load Init Lifts Ski Alpin Senior',
    SUCCESS_INIT_LIFTS_SKIALPIN_SENIOR = '[Lift] Success Init Lifts Ski Alpin Senior',
    LOAD_INIT_LIFTS_SKIALPIN_AGEOR = '[Lift] Load Init Lifts Ski Alpin Age d\'or',
    SUCCESS_INIT_LIFTS_SKIALPIN_AGEOR = '[Lift] Success Init Lifts Ski Alpin Age d\'or',
    LOAD_INIT_LIFTS_SKINORDIQUE = '[Lift] Load Init Lifts Ski Nordique',
    SUCCESS_INIT_LIFTS_SKINORDIQUE = '[Lift] Success Init Lifts Ski Nordique',
    LOAD_INIT_LIFTS_TELESIEGE = '[Lift] Load Init Lifts Telesiege',
    SUCCESS_INIT_LIFTS_TELESIEGE = '[Lift] Success Init Lifts Telesiege',*/
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
