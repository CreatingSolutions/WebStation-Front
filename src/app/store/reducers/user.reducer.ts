import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../models';
import {UserModule} from '../actions';
import ActionTypes = UserModule.ActionTypes;

export interface UserStateEntity extends EntityState<User> {
  isAuthenticated: boolean;
  user: User | null;
  logs: {
    type: string,
    message: string
  } | null;
}

export const UserAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: false
});

export const initialState: UserStateEntity = UserAdapter.getInitialState({
  isAuthenticated: false,
  user: null,
  logs: null
});

export const {
  selectIds: selectUsersIds,
  selectEntities: selectUsersEntities,
  selectAll: selectUsers,
  selectTotal: selectTotalUsers
} = UserAdapter.getSelectors();

export function usersReducer(
  state = initialState,
  action: UserModule.Actions
): UserStateEntity {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.user.email
        },
        logs: null
      };
    }
    default:
      return state;
  }
}
