import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Stuff} from '../models';
import {StuffModule} from '../actions';

export interface StuffStateEntity extends EntityState<Stuff> {
  loading: boolean;
  loaded: boolean;
  selectStuff: Stuff[] | null;
  logs: {
    type: string,
    message: string
  } | null;
}

export const StuffAdapter: EntityAdapter<Stuff> = createEntityAdapter<Stuff>({
  sortComparer: false
});

export const initialState: StuffStateEntity = StuffAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectStuff:  null,
  logs: null
});

export function stuffsReducer(
  state = initialState,
  action: StuffModule.Actions
): StuffStateEntity {
  switch (action.type) {
    case StuffModule.ActionTypes.LOAD_INIT_STUFFS:
      return {
        ...state,
        loading: true
      };
    case StuffModule.ActionTypes.SUCCESS_INIT_STUFFS:
      return {
        ...state,
        selectStuff: action.payload,
        logs: {type: 'SUCCESS', message: 'Les materiels ont étés récupérés avec succès'},
        loading: false,
        loaded: true
      };
    case StuffModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: 'Impossible de récupérer les materiels'},
        loading: false
      };
    default:
      return state;
  }
}
