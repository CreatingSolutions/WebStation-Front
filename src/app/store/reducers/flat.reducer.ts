import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Flat} from '../models';
import {FlatModule} from '../actions';

export interface FlatStateEntity extends EntityState<Flat> {
  loading: boolean;
  loaded: boolean;
  selectFlat: Flat[] | null;
  logs: {
    type: string,
    message: string
  } | null;
}

export const FlatAdapter: EntityAdapter<Flat> = createEntityAdapter<Flat>({
  sortComparer: false
});

export const initialState: FlatStateEntity = FlatAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectFlat:  null,
  logs: null
});

export function flatsReducer(
  state = initialState,
  action: FlatModule.Actions
): FlatStateEntity {
  switch (action.type) {
    case FlatModule.ActionTypes.LOAD_INIT_FLATS:
      return {
        ...state,
        loading: true
      };
    case FlatModule.ActionTypes.SUCCESS_INIT_FLATS:
      return {
        ...state,
        selectFlat: action.payload,
        logs: {type: 'SUCCESS', message: 'Les appartements ont bien étés récupérés avec succès'},
        loading: false,
        loaded: true
      };
    case FlatModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: 'Impossible de récupérer les appartements'},
        loading: false
      };
    default:
      return state;
  }
}
