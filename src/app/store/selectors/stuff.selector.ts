import {AppState} from '../index';
import {createSelector} from '@ngrx/store';

export const selectStuffState$ = (state: AppState) =>  state.stuffs;

export const selectStuffs$ = createSelector(selectStuffState$, (stuffs) =>  stuffs);

export const selectStuffsLoading$ = createSelector(selectStuffState$, (stuffs) =>  stuffs.loading);

export const selectStuffsLoaded$ = createSelector(selectStuffState$, (stuffs) =>  stuffs.loaded);

export const selectStuffsData$ = createSelector(selectStuffState$, (stuffs) =>  stuffs.selectStuff);

export const selectStuffsLogs$ = createSelector(selectStuffState$, (stuffs) => stuffs.logs);
