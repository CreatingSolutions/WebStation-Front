import * as fromUsers from '../reducers/user.reducer';
import {AppState} from '../index';
import {createSelector} from '@ngrx/store';
export {selectUsers, selectTotalUsers} from '../reducers/user.reducer';

export const selectUserState$ = (state: AppState) =>  state.users;

export const selectUsers$ = createSelector(selectUserState$, (users) =>  users.user);

export const selectUsersEntitiesConverted$ = createSelector(
  selectUserState$,
  fromUsers.selectUsers);

export  const  selectAuthenticated$ =
  createSelector(selectUserState$, (users) =>  users.isAuthenticated);

export const selectUsersLogs$ =
  createSelector(selectUserState$, (users) => users.logs);
