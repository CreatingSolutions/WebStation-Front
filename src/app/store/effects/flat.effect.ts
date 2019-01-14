import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FlatModule} from '../actions';
import {ApiService} from '../../services';
import ActionTypes = FlatModule.ActionTypes;

@Injectable()
export class FlatEffects {
  @Effect() LoadFlats$: Observable<FlatModule.Actions> = this.actions
    .pipe(
      ofType(FlatModule.ActionTypes.LOAD_INIT_FLATS),
      switchMap(() => this.apiService.getAllFlat()),
      map(flats => new FlatModule.SuccessInitFlats(flats)),
      catchError((err) => of(new FlatModule.ErrorLoadAction(err)))
    );

  @Effect({ dispatch: false })
  ActionFailure: Observable<any> = this.actions.pipe(
    ofType(ActionTypes.ERROR_LOAD_ACTION)
  );

  constructor(private apiService: ApiService, private  actions: Actions) {}
}
