import * as fromFlats from '../reducers/flat.reducer';
import {AppState} from '../index';
import {createSelector} from '@ngrx/store';
export {selectFlatsIds, selectFlatsEntities, selectFlats, selectTotalFlats} from '../reducers';

export const selectFlatState$ = (state: AppState) =>  state.flats;

export const selectFlats$ = createSelector(selectFlatState$, (flats) =>  flats.data);

export const selectFlatEntitiesConverted$ = createSelector(selectFlatState$, fromFlats.selectFlats);

export const selectFlatsLoading$ = createSelector(selectFlatState$, (flats) =>  flats.loading);

export const selectFlatsErrors$ = createSelector(selectFlatState$, (flats) => flats.logs);
