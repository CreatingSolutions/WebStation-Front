import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Flat} from '../models';
import {FlatModule} from '../actions';

export interface FlatStateEntity extends EntityState<Flat> {
  loading: boolean;
  selectFlat: Flat;
  logs: {
    type: string,
    message: string
  };
}

export const FlatAdapter: EntityAdapter<Flat> = createEntityAdapter<Flat>({
  sortComparer: false
});

export const initialState: FlatStateEntity = FlatAdapter.getInitialState({
  loading: false,
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
        loading: false
      };
    case FlatModule.ActionTypes.LOAD_DELETE_FLAT:
      return {
        ...state,
        loading: true
      };
    case FlatModule.ActionTypes.SUCCESS_DELETE_FLAT:
      return {
        ...FlatAdapter.removeOne(action.payload, state),
        logs: {type: 'SUCCESS', message: 'L\'flat a été supprimée avec succès'}
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
        logs: {type: 'SUCCESS', message: 'L\'flat a été créée avec succès'},
      };
    case FlatModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: action.payload.message},
        loading: false
      };
    default:
      return state;
  }
}
