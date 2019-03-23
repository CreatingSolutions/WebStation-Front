import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Lift} from '../models';
import {LiftModule} from '../actions';

export interface LiftStateEntity extends EntityState<Lift> {
  loading: boolean;
  loaded: boolean;
  selectLift: Lift | null;
  logs: {
    type: string,
    message: string
  } | null;
}

export const LiftAdapter: EntityAdapter<Lift> = createEntityAdapter<Lift>({
  sortComparer: false
});

export const initialState: LiftStateEntity = LiftAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectLift:  null,
  logs: null
});

export function liftsReducer(
  state = initialState,
  action: LiftModule.Actions
): LiftStateEntity {
  switch (action.type) {
    case LiftModule.ActionTypes.LOAD_INIT_LIFTS:
      return {
        ...state,
        loading: true
      };
    case LiftModule.ActionTypes.SUCCESS_INIT_LIFTS:
      return {
        ...state,
        selectLift: action.payload,
        logs: {type: 'SUCCESS', message: 'Les remontées mécaniques ont étés récupérés avec succès'},
        loading: false,
        loaded: true
      };
    case LiftModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: {type: 'ERROR', message: 'Impossible de récupérer les rémontées mécaniques'},
        loading: false
      };
    default:
      return state;
  }
}
