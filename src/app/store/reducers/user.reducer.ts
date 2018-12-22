import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../models';
import {UserModule} from '../actions/user.action';

export interface UserStateEntity extends EntityState<User> {
  loading: boolean;
  selectUser: User;
  logs: {
    type: string,
    message: string
  };
}

export const UserAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: false
});

export const initialState: UserStateEntity = UserAdapter.getInitialState({
  loading: false,
  selectUser: undefined,
  logs: undefined
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
    case UserModule.ActionTypes.LOAD_INIT_USERS:
      return {
        ...state,
        loading: true
      };
    case UserModule.ActionTypes.SUCCESS_INIT_USERS:
      return {
        ...UserAdapter.addMany(action.payload, state),
        loading: false
      };
    case UserModule.ActionTypes.LOAD_DELETE_USER:
      return {
        ...state,
        loading: true
      };
    case UserModule.ActionTypes.SUCCESS_DELETE_USER:
      return {
        ...UserAdapter.removeOne(action.payload, state),
        logs: {type: 'SUCCESS', message: 'L\'user a été supprimée avec succès'}
      };
    case UserModule.ActionTypes.LOAD_CREATE_USER:
      return {
        ...state,
        loading: true
      };
    case UserModule.ActionTypes.SUCCESS_CREATE_USER:
      return {
        ...UserAdapter.addOne(action.payload, state),
        loading: false,
        logs: {type: 'SUCCESS', message: 'L\'user a été créée avec succès'},
      };
    case UserModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: action.payload.message},
        loading: false
      };
    default:
      return state;
  }
}
