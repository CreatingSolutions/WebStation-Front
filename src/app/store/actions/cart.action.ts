import {Cart, User, Flat, School, Stuff, Lift} from '../models';
import {Action} from '@ngrx/store';

export namespace CartModule {

  export enum ActionTypes {
    LOAD_INIT_CARTS = '[cartList] Load Init Carts',
    SUCCESS_INIT_CARTS = '[cartList] Success Init Carts',
    LOAD_DELETE_CART = '[cartList] Load Delete Cart',
    SUCCESS_DELETE_CART = '[cartList] Success Delete Cart',
    LOAD_ADD_FLAT_CART = '[Cart] Load adding flat in Cart',
    LOAD_DELETE_FLAT_CART = '[Cart] Load deleting flat in Cart',
    LOAD_ADD_STUFF_CART = '[Cart] Load adding stuff in Cart',
    LOAD_DELETE_STUFF_CART = '[Cart] Load deleting stuff in Cart',
    LOAD_ADD_LIFT_CART = '[Cart] Load adding lift in Cart',
    LOAD_DELETE_LIFT_CART = '[Cart] Load deleting lift in Cart',
    SUCCESS_ADD_CART = '[Cart] Success adding element to Cart',
    SUCCESS_DELETE_ELEMENT_CART = '[Cart] Load deleting element in Cart',
    VALIDATE_CART = '[Cart] Validate Cart',
    ERROR_LOAD_ACTION = '[cartList] Error Load Action'
  }

  export class LoadInitCarts implements Action {
    readonly  type = ActionTypes.LOAD_INIT_CARTS;
    constructor() {}
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
    constructor(public payload: Cart) {}
  }

  export class LoadAddFlatCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_FLAT_CART;
    constructor(public payload: number) {}
  }

  export class SuccessAddToCart implements Action {
    readonly type = ActionTypes.SUCCESS_ADD_CART;
    constructor() {}
  }

  export class LoadDeleteFlatCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_FLAT_CART;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteElementCart implements Action {
    readonly type = ActionTypes.SUCCESS_DELETE_ELEMENT_CART;
    constructor(public payload: Cart) {}
  }

  export class LoadAddStuffCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_STUFF_CART;
    constructor(public payload: {stuffId: number, taked: number}) {}
  }

  export class LoadDeleteStuffCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_STUFF_CART;
    constructor(public payload: number) {}
  }

  export class LoadAddLiftCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_LIFT_CART;
    constructor(public payload: {liftId: number, taked: number, insurance: boolean}) {}
  }

  export class LoadDeleteLiftCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_LIFT_CART;
    constructor(public payload: number) {}
  }

  export class ValidateCart implements Action {
    readonly type = ActionTypes.VALIDATE_CART;
    constructor() {}
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
    | SuccessAddToCart
    | SuccessDeleteElementCart
    | ValidateCart
    | SuccessDeleteCart;
}
