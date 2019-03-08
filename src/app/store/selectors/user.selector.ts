import {AppState} from '../index';
import {createSelector} from '@ngrx/store';

export const selectUserState$ = (state: AppState) =>  state.users;

export const selectUsers$ = createSelector(selectUserState$, (users) =>  users.user);

export  const  selectAuthenticated$ =
  createSelector(selectUserState$, (users) =>  users.isAuthenticated);

export const selectUsersLogs$ =
  createSelector(selectUserState$, (users) => users.logs);
