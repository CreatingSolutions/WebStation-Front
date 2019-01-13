import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Flat} from '../models';
import {FlatModule} from '../actions';

export interface FlatStateEntity extends EntityState<Flat> {
  loading: boolean;
  loaded: boolean;
  selectFlat: Flat | null;
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
  selectFlat: undefined,
  logs: undefined
});

export const {
  selectIds: selectFlatsIds,
  selectEntities: selectFlatsEntities,
  selectAll: selectFlats,
  selectTotal: selectTotalFlats
} = FlatAdapter.getSelectors();

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
        ...FlatAdapter.addMany(action.payload, state),
        logs: {type: 'SUCCESS', message: 'Les appartements ont bien étés récupérés avec succès'},
        loading: false,
        loaded: true
      };
    case FlatModule.ActionTypes.LOAD_DELETE_FLAT:
      return {
        ...state,
        loading: true
      };
    case FlatModule.ActionTypes.SUCCESS_DELETE_FLAT:
      return {
        ...FlatAdapter.removeOne(action.payload, state),
        logs: {type: 'SUCCESS', message: 'L\'appartement a été supprimé avec succès'}
      };
    case FlatModule.ActionTypes.LOAD_CREATE_FLAT:
      return {
        ...state,
        loading: true
      };
    case FlatModule.ActionTypes.SUCCESS_CREATE_FLAT:
      return {
        ...FlatAdapter.addOne(action.payload, state),
        loading: false,
        logs: {type: 'SUCCESS', message: 'L\'appartement a été ajouté avec succès'},
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
