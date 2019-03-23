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

export const initialState: CartStateEntity = CartAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectCart: null,
  logs: null
});

export const cartsReducer = (
  state = initialState,
  action: CartModule.Actions
): CartStateEntity => {
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
    case CartModule.ActionTypes.LOAD_DELETE_FLAT_CART:
      return {
        ...state,
        loading: true,
      };
    case CartModule.ActionTypes.LOAD_DELETE_LIFT_CART:
      return {
        ...state,
        loading: true,
      };
    case CartModule.ActionTypes.LOAD_DELETE_STUFF_CART:
      return {
        ...state,
        loading: true,
      };
    case CartModule.ActionTypes.SUCCESS_DELETE_ELEMENT_CART:
      return {
        ...state,
        loading: false,
        selectCart: action.payload,
        logs: {type: 'SUCCESS', message: 'L\'element du panié a été supprimé avec succès'}
      };
    case CartModule.ActionTypes.LOAD_DELETE_CART:
      return {
        ...state,
        loading: true,
      };
    case CartModule.ActionTypes.SUCCESS_DELETE_CART:
      return {
        ...state,
        loading: false,
        selectCart: action.payload,
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
