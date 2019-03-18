import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Cart, Flat, Lift, Stuff} from '../models';
import {CartModule} from '../actions';

export interface CartStateEntity extends EntityState<Cart> {
  loading: boolean;
  loaded: boolean;
  selectCart: Cart | null;
  logs: {
    type: string,
    message: string
  } | null;
}

export const CartAdapter: EntityAdapter<Cart> = createEntityAdapter<Cart>({
  sortComparer: false
});

const addFlatToCart = (cart: Cart, flat: Flat) => {
  if (!cart) {
    cart = {
      flats: [flat]
    };
  } else if (!cart.flats) {
    cart.flats = [flat];
  } else {
    if (!cart.flats.find(x => x.flatId === flat.flatId)) {
      cart.flats.push(flat);
    }
  }
  return cart;
};

const addStuffToCart = (cart: Cart, stuff: Stuff) => {
  if (!cart) {
    cart = {
      stuffs: [stuff]
    };
  } else if (!cart.stuffs) {
    cart.stuffs = [stuff];
  } else {
    if (!cart.stuffs.find(x => x.stuffId === stuff.stuffId)) {
      cart.stuffs.push(stuff);
    }
  }
  return cart;
};

const addLiftToCart = (cart: Cart, lift: Lift) => {
  if (!cart) {
    cart = {
      lifts: [lift]
    };
  } else if (!cart.lifts) {
    cart.lifts = [lift];
  } else {
    if (!cart.lifts.find(x => x.liftId === lift.liftId)) {
      cart.lifts.push(lift);
    }
  }
  return cart;
};

export const initialState: CartStateEntity = CartAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectCart: null,
  logs: null
});

export function cartsReducer(
  state = initialState,
  action: CartModule.Actions
): CartStateEntity {
  switch (action.type) {
    case CartModule.ActionTypes.LOAD_INIT_CARTS:
      return {
        ...state,
        loading: true
      };
    case CartModule.ActionTypes.SUCCESS_INIT_CARTS:
      return {
        ...state,
        selectCart: action.payload,
        loading: false,
        loaded: true,
        logs: {type: 'SUCCESS', message: 'Le panier a été récupéré avec succès'}
      };
    case CartModule.ActionTypes.LOAD_ADD_FLAT_CART:
      return {
        ...state,
        selectCart: addFlatToCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_ADD_LIFT_CART:
      return {
        ...state,
        selectCart: addLiftToCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_ADD_STUFF_CART:
      return {
        ...state,
        selectCart: addStuffToCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_DELETE_CART:
      return {
        ...state,
        loading: true
      };
    case CartModule.ActionTypes.SUCCESS_DELETE_CART:
      return {
        ...state,
        loading: false,
        selectCart: null,
        logs: {type: 'SUCCESS', message: 'Le panier a été supprimée avec succès'}
      };
    case CartModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: 'Impossible de recuperer le panier'},
        loading: false
      };
    default:
      return state;
  }
}
