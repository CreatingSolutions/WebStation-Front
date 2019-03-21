import {Cart, User, Flat, School, Stuff, Lift} from '../models';
import {Action} from '@ngrx/store';

export namespace CartModule {

  export enum ActionTypes {
    LOAD_INIT_CARTS = '[cartList] Load Init Carts',
    SUCCESS_INIT_CARTS = '[cartList] Success Init Carts',
    LOAD_DELETE_CART = '[cartList] Load Delete Cart',
    SUCCESS_DELETE_CART = '[cartList] Success Delete Cart',
    LOAD_ADD_FLAT_CART = '[Cart] Load adding flat in cart',
    LOAD_DELETE_FLAT_CART = '[Cart] Load deleting flat in cart',
    LOAD_ADD_STUFF_CART = '[Cart] Load adding stuff in cart',
    LOAD_DELETE_STUFF_CART = '[Cart] Load deleting stuff in cart',
    LOAD_ADD_LIFT_CART = '[Cart] Load adding lift in cart',
    LOAD_DELETE_LIFT_CART = '[Cart] Load deleting lift in cart',
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
    constructor() {}
  }

  export class SuccessDeleteCart implements Action {
    readonly type = ActionTypes.SUCCESS_DELETE_CART;
    constructor(public payload: number) {}
  }

  export class LoadAddFlatCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_FLAT_CART;
    constructor(public payload: any) {}
  }

  export class LoadDeleteFlatCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_FLAT_CART;
    constructor(public payload: number) {}
  }

  export class LoadAddStuffCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_STUFF_CART;
    constructor(public payload: any) {}
  }

  export class LoadDeleteStuffCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_STUFF_CART;
    constructor(public payload: number) {}
  }

  export class LoadAddLiftCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_LIFT_CART;
    constructor(public payload: any) {}
  }

  export class LoadDeleteLiftCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_LIFT_CART;
    constructor(public payload: number) {}
  }

  export class ErrorLoadAction implements Action {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: any) {}
  }

  export type Actions =
      LoadInitCarts
    | ErrorLoadAction
    | SuccessInitCarts
    | LoadAddFlatCart
    | LoadDeleteFlatCart
    | LoadAddLiftCart
    | LoadDeleteLiftCart
    | LoadAddStuffCart
    | LoadDeleteStuffCart
    | LoadDeleteCart
    | SuccessDeleteCart;
}
