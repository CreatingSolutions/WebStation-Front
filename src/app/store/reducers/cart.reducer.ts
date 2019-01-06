import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Cart} from '../models';
import {CartModule} from '../actions';

export interface CartStateEntity extends EntityState<Cart> {
  loading: boolean;
  selectCart: Cart;
  logs: {
    type: string,
    message: string
  };
}

export const CartAdapter: EntityAdapter<Cart> = createEntityAdapter<Cart>({
  sortComparer: false
});

export const initialState: CartStateEntity = CartAdapter.getInitialState({
  loading: false,
  selectCart: undefined,
  logs: undefined
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
        ...CartAdapter.addMany(action.payload, state),
        loading: false
      };
    case CartModule.ActionTypes.LOAD_DELETE_CART:
      return {
        ...state,
        loading: true
      };
    case CartModule.ActionTypes.SUCCESS_DELETE_CART:
      return {
        ...CartAdapter.removeOne(action.payload, state),
        logs: {type: 'SUCCESS', message: 'Le panié a été supprimée avec succès'}
      };
    case CartModule.ActionTypes.LOAD_CREATE_CART:
      return {
        ...state,
        loading: true
      };
    case CartModule.ActionTypes.SUCCESS_CREATE_CART:
      return {
        ...CartAdapter.addOne(action.payload, state),
        loading: false,
        logs: {type: 'SUCCESS', message: 'Le pannié a été créée avec succès'},
      };
    case CartModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: action.payload.message},
        loading: false
      };
    default:
      return state;
  }
}
