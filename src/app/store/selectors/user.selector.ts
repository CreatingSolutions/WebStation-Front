import * as fromUsers from '../reducers/user.reducer';
import {AppState} from '../index';
import {createSelector} from '@ngrx/store';
export {selectUsersIds, selectUsersEntities, selectUsers, selectTotalUsers} from '../reducers/user.reducer';

export const selectUserState$ = (state: AppState) =>  state.users;

export const selectUsers$ = createSelector(selectUserState$, (users) =>  users);

export const selectUserEntitiesConverted$ = createSelector(selectUserState$, fromUsers.selectUsers);

export const selectUsersIsAuthenticated$ = createSelector(selectUserState$, (users) => users.isAuthenticated);

export const selectUsersErrors$ = createSelector(selectUserState$, (users) => users.logs);
