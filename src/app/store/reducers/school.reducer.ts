import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {School} from '../models';
import {SchoolModule} from '../actions';

export interface SchoolStateEntity extends EntityState<School> {
  loading: boolean;
  loaded: boolean;
  selectSchool: School[] | null;
  logs: {
    type: string,
    message: string
  } | null;
}

export const SchoolAdapter: EntityAdapter<School> = createEntityAdapter<School>({
  sortComparer: false
});

export const initialState: SchoolStateEntity = SchoolAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectSchool:  null,
  logs: null
});

export function schoolsReducer(
  state = initialState,
  action: SchoolModule.Actions
): SchoolStateEntity {
  switch (action.type) {
    case SchoolModule.ActionTypes.LOAD_INIT_SCHOOLS:
      return {
        ...state,
        loading: true
      };
    case SchoolModule.ActionTypes.SUCCESS_INIT_SCHOOLS:
      return {
        ...state,
        selectSchool: action.payload,
        logs: {type: 'SUCCESS', message: 'Les cours ont étés récupérés avec succès'},
        loading: false,
        loaded: true
      };
    case SchoolModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: 'Impossible de récupérer les cours'},
        loading: false
      };
    default:
      return state;
  }
}
