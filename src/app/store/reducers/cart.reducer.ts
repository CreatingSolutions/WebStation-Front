import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Cart} from '../models';
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

const initCart = () => {
  return <Cart> {
    flats: [],
    stuffs: [],
    lifts: [],
    totalLiftPrice: 0,
    totalFlatPrice: 0,
    totalStuffPrice: 0,
    totalPrice: 0,
    validate: false,
    paid: false
  };
};

const addFlatToCart = (cart: Cart, flat) => {
  if (!cart) {
    cart = initCart();
  }
  if (cart && cart.flats && cart.flats.length === 0) {
    cart.flats = [flat];
  } else {
    if (!cart.flats.find(x => x.flatId === flat.flatId)) {
      cart.flats.push(flat);
    }
  }

  cart.totalFlatPrice = cart.flats.reduce(
    (a, b) => ({price: a.price + b.price})).price;
  return cart;
};

const addStuffToCart = (cart: Cart, stuff) => {
  if (!cart) {
    cart = initCart();
  }
  if (cart && cart.stuffs && cart.stuffs.length === 0) {
    cart.stuffs = [stuff];
  } else {
    if (!cart.stuffs.find(x => x.stuffId === stuff.stuffId)) {
      cart.stuffs.push(stuff);
    }
  }

  cart.totalStuffPrice = cart.stuffs.reduce(
    (a, b) => ({price: a.price + b.price})).price;
  return cart;
};

const addLiftToCart = (cart: Cart, lift) => {
  console.log('cart v1', cart);
  console.log('lift', lift);
  if (!cart) {
    cart = initCart();
  }
  console.log('cart v2', cart);
  if (cart && cart.lifts && cart.lifts.length === 0) {
    cart.lifts = [lift];
  } else {
    if (!cart.lifts.find(x => x.liftId === lift.liftId)) {
      cart.lifts.push(lift);
    }
  }

  cart.totalLiftPrice = cart.lifts.reduce(
    (a, b) => ({price: a.price + b.price})).price;
  return cart;
};

const removeFlatFromCart = (cart: Cart, id: number) => {
  return {
    ...cart,
    flats: cart.flats.filter(x => x.flatId !== id),
    totalFlatPrice: cart.totalFlatPrice - cart.flats.find(x => x.flatId === id),
  };
};

const removeStuffFromCart = (cart: Cart, id: number) => {
  return {
    ...cart,
    stuffs: cart.stuffs.filter(x => x.stuffId !== id),
    totalStuffPrice: cart.totalStuffPrice - cart.stuffs.find(x => x.stuffId === id),
  };
};

const removeLiftFromCart = (cart: Cart, id: number) => {
  return {
    ...cart,
    lifts: cart.lifts.filter(x => x.liftId !== id),
    totalLiftPrice: cart.totalLiftPrice - cart.lifts.find(x => x.liftId === id),
  };
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
    case CartModule.ActionTypes.LOAD_DELETE_FLAT_CART:
      return {
        ...state,
        selectCart: removeFlatFromCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_ADD_LIFT_CART:
      return {
        ...state,
        selectCart: addLiftToCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_DELETE_LIFT_CART:
      return {
        ...state,
        selectCart: removeLiftFromCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_ADD_STUFF_CART:
      return {
        ...state,
        selectCart: addStuffToCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_DELETE_STUFF_CART:
      return {
        ...state,
        selectCart: removeStuffFromCart(state.selectCart, action.payload),
      };
    case CartModule.ActionTypes.LOAD_DELETE_CART:
      return {
        ...state,
        loading: true,
        selectCart: {
          ...state.selectCart,
          ...initCart()
        }
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
