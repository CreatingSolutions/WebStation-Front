import {Cart, User, Flat, School, Stuff, Lift} from '../models';
import {Action} from '@ngrx/store';

export namespace CartModule {

  export enum ActionTypes {
    LOAD_INIT_CARTS = '[cartList] Load Init Carts',
    SUCCESS_INIT_CARTS = '[cartList] Success Init Carts',
    LOAD_DELETE_CART = '[cartList] Load Delete Cart',
    SUCCESS_DELETE_CART = '[cartList] Success Delete Cart',

    LOAD_ADD_FLAT_CART = '[Cart] Load adding flat in cart',
    SUCCESS_ADD_FLAT_CART = '[Cart] Success adding flat in cart',
    LOAD_DELETE_ONE_FLAT_CART = '[Cart] Load delete one flat in cart',
    SUCCESS_DELETE_ONE_FLAT_CART = '[Cart] Success delete one flat in cart',
    LOAD_DELETE_ALL_FLAT_CART = '[Cart] Load delete flats in cart',
    SUCCESS_DELETE_ALL_FLAT_CART = '[Cart] Success delete flats in cart',

   /* LOAD_ADD_SCHOOL_CART = '[Cart] Load adding school in cart',
    SUCCESS_ADD_SCHOOL_CART = '[Cart] Success adding school in cart',
    LOAD_DELETE_ONE_SCHOOL_CART = '[Cart] Load delete one school in cart',
    SUCCESS_DELETE_ONE_SCHOOL_CART = '[Cart] Success delete one school in cart',
    LOAD_DELETE_ALL_SCHOOL_CART = '[Cart] Load delete all school in cart',
    SUCCESS_DELETE_ALL_SCHOOL_CART = '[Cart] Success delete all school in cart',

    LOAD_ADD_STUFF_CART = '[Cart] Load adding stuff in cart',
    SUCCESS_ADD_STUFF_CART = '[Cart] Success adding stuff in cart',
    LOAD_DELETE_ONE_STUFF_CART = '[Cart] Load delete one stuff in cart',
    SUCCESS_DELETE_ONE_STUFF_CART = '[Cart] Success delete one stuff in cart',
    LOAD_DELETE_ALL_STUFF_CART = '[Cart] Load delete all stuff in cart',
    SUCCESS_DELETE_ALL_STUFF_CART = '[Cart] Success delete all stuff in cart',

    LOAD_ADD_LIFT_CART = '[Cart] Load adding lift in cart',
    SUCCESS_ADD_LIFT_CART = '[Cart] Success adding lift in cart',
    LOAD_DELETE_ONE_LIFT_CART = '[Cart] Load delete one lift in cart',
    SUCCESS_DELETE_ONE_LIFT_CART = '[Cart] Success delete one lift in cart',
    LOAD_DELETE_ALL_LIFT_CART = '[Cart] Load delete lift to cart',
    SUCCESS_DELETE_ALL_LIFT_CART = '[Cart] Success delete lift to cart',*/

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

  export class LoadAddFlatCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_FLAT_CART;
    constructor(public payload: Flat) {}
  }

  export class SuccessAddFlatCart implements Action {
    readonly type = ActionTypes.SUCCESS_ADD_FLAT_CART;
    constructor(public payload: Flat) {}
  }

  export class LoadDeleteOneFlatCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_ONE_FLAT_CART;
    constructor(public payload: any) {}
  }

  export class SuccessDeleteOneFlatCart implements Action {
    readonly type = ActionTypes.SUCCESS_DELETE_ONE_FLAT_CART;
    constructor(public payload: any) {}
  }

  export class LoadDeleteAllFlatCart implements Action {
    readonly type = ActionTypes.LOAD_DELETE_ALL_FLAT_CART;
    constructor(public payload: any) {}
  }

  export class SuccessDeleteAllFlatFlatCart implements Action {
    readonly type = ActionTypes.SUCCESS_DELETE_ALL_FLAT_CART;
    constructor(public payload: any) {}
  }

  /*export class LoadAddSchoolCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_SCHOOL_CART;
    constructor(public payload: School) {}
  }

  export class SuccessAddSchoolCart implements Action {
    readonly type = ActionTypes.SUCCESS_ADD_SCHOOL_CART;
    constructor(public payload: School) {}
  }

  export class LoadAddStuffCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_STUFF_CART;
    constructor(public payload: Stuff) {}
  }

  export class SuccessAddStuffCart implements Action {
    readonly type = ActionTypes.SUCCESS_ADD_STUFF_CART;
    constructor(public payload: Stuff) {}
  }

  export class LoadAddLiftCart implements Action {
    readonly type = ActionTypes.LOAD_ADD_LIFT_CART;
    constructor(public payload: Lift) {}
  }

  export class SuccessAddLiftCart implements Action {
    readonly type = ActionTypes.SUCCESS_ADD_LIFT_CART;
    constructor(public payload: Lift) {}
  }*/

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

  export type Actions =
      LoadInitCarts
    | ErrorLoadAction
    | SuccessInitCarts
    | LoadCreateCart
    | SuccessCreateCart
    | LoadDeleteCart
    | SuccessDeleteCart;
}
