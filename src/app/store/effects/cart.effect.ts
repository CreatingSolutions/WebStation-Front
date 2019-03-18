import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CartModule} from '../actions';
import ActionTypes = CartModule.ActionTypes;
import LoadInitCarts = CartModule.LoadInitCarts;
import {ApiService} from '../../services';
import { Router } from '@angular/router';

@Injectable()
export class CartEffects {

  @Effect() LoadCarts$: Observable<CartModule.Actions> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_INIT_CARTS),
      switchMap((action: LoadInitCarts) => this.apiService.getCartOf(action.payload)),
      map(cart => new CartModule.SuccessInitCarts(cart)),
      catchError((err) => of(new CartModule.ErrorLoadAction(err)))
    );

  /*@Effect({dispatch: false})
    SuccessAddFlat$: Observable<CartModule.Actions> = this.actions$
      .pipe(
        ofType(ActionTypes.SUCCESS_ADD_FLAT_CART),
        tap(() => {
          this.router.navigate(['shoppingCart']).catch(err => console.error(err));
        })
      );*/

  constructor(private apiService: ApiService, private  actions$: Actions, private router: Router) {}
}
