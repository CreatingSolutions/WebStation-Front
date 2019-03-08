import {AppState} from '../index';
import {createSelector} from '@ngrx/store';

export const selectCartState$ = (state: AppState) =>  state.carts;

export const selectCarts$ = createSelector(selectCartState$, (carts) =>  carts.selectCart);

export const selectCartsLoading$ = createSelector(selectCartState$, (carts) =>  carts.loading);

export const selectCartsErrors$ = createSelector(selectCartState$, (carts) => carts.logs);
