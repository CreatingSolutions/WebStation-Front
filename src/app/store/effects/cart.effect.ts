import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import {of} from 'rxjs';
import { CartModule } from '../actions';
import {ApiService} from '../../services';

@Injectable()
export class CartEffects {
  @Effect() LoadCarts$: Observable<CartModule.Actions> = this.actions$
    .pipe(
      ofType(CartModule.ActionTypes.LOAD_INIT_CARTS),
      switchMap(action => this.apiService.getAllCart()),
      map(carts => new CartModule.SuccessInitCarts(carts)),
      catchError((err) => of(new CartModule.ErrorLoadAction(err)))
    );

  /*@Effect() LoadCreateCart$: Observable<CartModule.Actions> = this.actions$
    .pipe(
      ofType<CartModule.LoadCreateCart>(CartModule.ActionTypes.LOAD_CREATE_CART),
      switchMap(action => this.apiService.createCart(action.payload)),
      map(cart => new CartModule.SuccessCreateCart(cart)),
      catchError((err) => of(new CartModule.ErrorLoadAction(err)))
    );

  @Effect() LoadDeleteCart$: Observable<CartModule.Actions> = this.actions$
    .pipe(
      ofType<CartModule.LoadDeleteCart>(CartModule.ActionTypes.LOAD_DELETE_CART),
      switchMap(action => this.apiService.deleteCart(action.payload)),
      map(id => new CartModule.SuccessDeleteCart(id)),
      catchError((err) => of(new CartModule.ErrorLoadAction(err)))
    );*/

  constructor(private apiService: ApiService, private  actions$: Actions) {}
}
