import * as fromUsers from '../reducers/user.reducer';
import {AppState} from '../index';
import {createSelector} from '@ngrx/store';
export {selectUsersIds, selectUsersEntities, selectUsers, selectTotalUsers} from '../reducers';

export const selectUserState$ = (state: AppState) =>  state.users;

export const selectUsers$ = createSelector(selectUserState$, (users) =>  users.data);

export const selectUserEntitiesConverted$ = createSelector(selectUserState$, fromUsers.selectUsers);

export const selectUsersLoading$ = createSelector(selectUserState$, (users) =>  users.loading);

export const selectUsersErrors$ = createSelector(selectUserState$, (users) => users.logs);
