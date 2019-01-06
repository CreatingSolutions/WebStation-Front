import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import {CartEffects, FlatEffects, UserEffects} from './effects';
import {CartStateEntity, FlatStateEntity, UserStateEntity, cartsReducer, flatsReducer, usersReducer} from './reducers';

const reducers = {
  carts: cartsReducer,
  flats: flatsReducer,
  users: usersReducer
};

export interface AppState {
  carts: CartStateEntity;
  flats: FlatStateEntity;
  users: UserStateEntity;
}

export function getReducers() {
  return reducers;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const appEffects = [CartEffects, FlatEffects, UserEffects];
