import {Cart, User} from '../models';
import {Action} from '@ngrx/store';

export namespace CartModule {

  export enum ActionTypes {
    LOAD_INIT_CARTS = '[cartList] Load Init Carts',
    SUCCESS_INIT_CARTS = '[cartList] Success Init Carts',
    LOAD_DELETE_CART = '[cartList] Load Delete Cart',
    SUCCESS_DELETE_CART = '[cartList] Success Delete Cart',
    LOAD_CREATE_CART = '[cartList] Load Create Cart',
    SUCCESS_CREATE_CART = '[cartList] Success Create Cart',
    ERROR_LOAD_ACTION = '[cartList] Error Load Action'
  }

  export class LoadInitCarts implements Action {
    readonly  type = ActionTypes.LOAD_INIT_CARTS;
    constructor(public payload: User) {}
  }

  export class SuccessInitCarts implements Action {
    readonly type = ActionTypes.SUCCESS_INIT_CARTS;
    constructor(public payload: Cart) {}
  }

  export class LoadDeleteCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_CART;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteCart implements Action {
    readonly type = ActionTypes.SUCCESS_DELETE_CART;
    constructor(public payload: number) {}
  }

  export class LoadCreateCart implements Action {
    readonly type = ActionTypes.LOAD_CREATE_CART;
    constructor(public payload: Cart) {}
  }

  export class SuccessCreateCart implements Action {
    readonly type = ActionTypes.SUCCESS_CREATE_CART;
    constructor(public payload: Cart) {}
  }

  export class ErrorLoadAction implements Action {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: any) {}
  }

  export type Actions = LoadInitCarts | ErrorLoadAction | SuccessInitCarts | LoadCreateCart
    | SuccessCreateCart |  LoadDeleteCart
    | SuccessDeleteCart;
}
