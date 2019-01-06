import * as fromCarts from '../reducers/cart.reducer';
import {AppState} from '../index';
import {createSelector} from '@ngrx/store';
export {selectCartsIds, selectCartsEntities, selectCarts, selectTotalCarts} from '../reducers';

export const selectCartState$ = (state: AppState) =>  state.carts;

export const selectCarts$ = createSelector(selectCartState$, (carts) =>  carts.data);

export const selectCartEntitiesConverted$ = createSelector(selectCartState$, fromCarts.selectCarts);

export const selectCartsLoading$ = createSelector(selectCartState$, (carts) =>  carts.loading);

export const selectCartsErrors$ = createSelector(selectCartState$, (carts) => carts.logs);
