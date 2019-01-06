import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import {of} from 'rxjs';
import { FlatModule } from '../actions';
import {ApiService} from '../../services';

@Injectable()
export class FlatEffects {
  @Effect() LoadFlats$: Observable<FlatModule.Actions> = this.actions$
    .pipe(
      ofType(FlatModule.ActionTypes.LOAD_INIT_FLATS),
      switchMap(action => this.apiService.getAllFlat()),
      map(flats => new FlatModule.SuccessInitFlats(flats)),
      catchError((err) => of(new FlatModule.ErrorLoadAction(err)))
    );

  /*@Effect() LoadCreateFlat$: Observable<FlatModule.Actions> = this.actions$
    .pipe(
      ofType<FlatModule.LoadCreateFlat>(FlatModule.ActionTypes.LOAD_CREATE_FLAT),
      switchMap(action => this.apiService.createFlat(action.payload)),
      map(flat => new FlatModule.SuccessCreateFlat(flat)),
      catchError((err) => of(new FlatModule.ErrorLoadAction(err)))
    );

  @Effect() LoadDeleteFlat$: Observable<FlatModule.Actions> = this.actions$
    .pipe(
      ofType<FlatModule.LoadDeleteFlat>(FlatModule.ActionTypes.LOAD_DELETE_FLAT),
      switchMap(action => this.apiService.deleteFlat(action.payload)),
      map(id => new FlatModule.SuccessDeleteFlat(id)),
      catchError((err) => of(new FlatModule.ErrorLoadAction(err)))
    );*/

  constructor(private apiService: ApiService, private  actions$: Actions) {}
}
