import { Cart } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

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

  export class LoadInitCarts {
    readonly  type = ActionTypes.LOAD_INIT_CARTS;
  }

  export class SuccessInitCarts {
    readonly type = ActionTypes.SUCCESS_INIT_CARTS;
    constructor(public payload: Cart[]) {}
  }

  export class LoadDeleteCart {
    readonly type = ActionTypes.LOAD_DELETE_CART;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteCart {
    readonly type = ActionTypes.SUCCESS_DELETE_CART;
    constructor(public payload: number) {}
  }

  export class LoadCreateCart {
    readonly type = ActionTypes.LOAD_CREATE_CART;
    constructor(public payload: Cart) {}
  }

  export class SuccessCreateCart {
    readonly type = ActionTypes.SUCCESS_CREATE_CART;
    constructor(public payload: Cart) {}
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitCarts | ErrorLoadAction | SuccessInitCarts | LoadCreateCart
    | SuccessCreateCart |  LoadDeleteCart
    | SuccessDeleteCart;
}
