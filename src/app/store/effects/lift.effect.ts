import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {LiftModule} from '../actions';
import {ApiService} from '../../services';
import ActionTypes = LiftModule.ActionTypes;
import { Router } from '@angular/router';

@Injectable()
export class LiftEffects {
  @Effect() LoadLifts$: Observable<LiftModule.Actions> = this.actions
    .pipe(
      ofType(ActionTypes.LOAD_INIT_LIFTS),
      switchMap((type: any) => this.apiService.getLiftForfait(type.payload)),
      map(lifts => new LiftModule.SuccessInitLifts(lifts)),
      catchError((err) => of(new LiftModule.ErrorLoadAction(err)))
    );

    @Effect({dispatch: false})
    SuccessLifts$: Observable<LiftModule.Actions> = this.actions
      .pipe(
        ofType(ActionTypes.SUCCESS_INIT_LIFTS),
        tap(lift => {
          console.log(lift);
          const route = (lift.payload.normals && lift.payload.diamants) ? 'forfait' : 'telesiege';
          this.router.navigate([`lifts/${route}`]).catch(err => console.error(err));
        })
      );

  @Effect({ dispatch: false })
  ActionFailure: Observable<LiftModule.Actions> = this.actions.pipe(
    ofType(ActionTypes.ERROR_LOAD_ACTION)
  );

  constructor(private apiService: ApiService, private  actions: Actions, private router: Router) {}
}
