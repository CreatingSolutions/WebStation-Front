import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {SchoolModule} from '../actions';
import {ApiService} from '../../services';
import ActionTypes = SchoolModule.ActionTypes;

@Injectable()
export class SchoolEffects {
  @Effect() LoadSchools$: Observable<SchoolModule.Actions> = this.actions
    .pipe(
      ofType(ActionTypes.LOAD_INIT_SCHOOLS),
      switchMap(() => this.apiService.getAllSchool()),
      map(schools => new SchoolModule.SuccessInitSchools(schools)),
      catchError((err) => of(new SchoolModule.ErrorLoadAction(err)))
    );

  @Effect({ dispatch: false })
  ActionFailure: Observable<SchoolModule.Actions> = this.actions.pipe(
    ofType(ActionTypes.ERROR_LOAD_ACTION)
  );

  constructor(private apiService: ApiService, private  actions: Actions) {}
}
