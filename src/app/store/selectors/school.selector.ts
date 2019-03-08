import {AppState} from '../index';
import {createSelector} from '@ngrx/store';

export const selectSchoolState$ = (state: AppState) =>  state.schools;

export const selectSchools$ = createSelector(selectSchoolState$, (schools) =>  schools);

export const selectSchoolsLoading$ = createSelector(selectSchoolState$, (schools) =>  schools.loading);

export const selectSchoolsLoaded$ = createSelector(selectSchoolState$, (schools) =>  schools.loaded);

export const selectSchoolsData$ = createSelector(selectSchoolState$, (schools) =>  schools.selectSchool);

export const selectSchoolsLogs$ = createSelector(selectSchoolState$, (schools) => schools.logs);
