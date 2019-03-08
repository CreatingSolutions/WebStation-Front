import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {StuffModule} from '../actions';
import {ApiService} from '../../services';
import ActionTypes = StuffModule.ActionTypes;

@Injectable()
export class StuffEffects {
  @Effect() LoadStuffs$: Observable<StuffModule.Actions> = this.actions
    .pipe(
      ofType(ActionTypes.LOAD_INIT_STUFFS),
      switchMap(() => this.apiService.getAllStuff()),
      map(stuffs => new StuffModule.SuccessInitStuffs(stuffs)),
      catchError((err) => of(new StuffModule.ErrorLoadAction(err)))
    );

  @Effect({ dispatch: false })
  ActionFailure: Observable<StuffModule.Actions> = this.actions.pipe(
    ofType(ActionTypes.ERROR_LOAD_ACTION)
  );

  constructor(private apiService: ApiService, private  actions: Actions) {}
}
