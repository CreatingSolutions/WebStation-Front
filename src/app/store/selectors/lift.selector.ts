import {AppState} from '../index';
import {createSelector} from '@ngrx/store';

export const selectLiftState$ = (state: AppState) =>  state.lifts;

export const selectLifts$ = createSelector(selectLiftState$, (lifts) =>  lifts);

export const selectLiftsLoading$ = createSelector(selectLiftState$, (lifts) =>  lifts.loading);

export const selectLiftsLoaded$ = createSelector(selectLiftState$, (lifts) =>  lifts.loaded);

export const selectLiftsData$ = createSelector(selectLiftState$, (lifts) =>  lifts.selectLift);

export const selectLiftsLogs$ = createSelector(selectLiftState$, (lifts) => lifts.logs);
