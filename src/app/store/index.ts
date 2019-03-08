import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import {CartEffects, FlatEffects, LiftEffects, StuffEffects, SchoolEffects, UserEffects} from './effects';
import {CartStateEntity, cartsReducer} from './reducers/cart.reducer';
import {UserStateEntity, usersReducer} from './reducers/user.reducer';
import {FlatStateEntity, flatsReducer} from './reducers/flat.reducer';
import {LiftStateEntity, liftsReducer} from './reducers/lift.reducer';
import {StuffStateEntity, stuffsReducer} from './reducers/stuff.reducer';
import {SchoolStateEntity, schoolsReducer} from './reducers/school.reducer';

const reducers = {
  carts: cartsReducer,
  flats: flatsReducer,
  lifts: liftsReducer,
  stuffs: stuffsReducer,
  schools: schoolsReducer,
  users: usersReducer
};

export interface AppState {
  carts: CartStateEntity;
  flats: FlatStateEntity;
  lifts: LiftStateEntity;
  stuffs: StuffStateEntity;
  schools: SchoolStateEntity;
  users: UserStateEntity;
}

export function getReducers() {
  return reducers;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const appEffects = [CartEffects, FlatEffects, LiftEffects, StuffEffects, SchoolEffects, UserEffects];
