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

export const {
  selectIds: selectCartsIds,
  selectEntities: selectCartsEntities,
  selectAll: selectCarts,
  selectTotal: selectTotalCarts
} = CartAdapter.getSelectors();

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
        logs: {type: 'SUCCESS', message: 'Le panié a été récupéré avec succès'}
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
        logs: {type: 'SUCCESS', message: 'Le panié a été supprimée avec succès'}
      };
    case CartModule.ActionTypes.LOAD_CREATE_CART:
      return {
        ...state,
        loading: true,
        loaded: true
      };
    case CartModule.ActionTypes.SUCCESS_CREATE_CART:
      return {
        ...state,
        selectCart: action.payload,
        loading: false,
        loaded: true,
        logs: {type: 'SUCCESS', message: 'Le panié a été crée avec succès'}
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
