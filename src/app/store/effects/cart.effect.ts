import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CartModule} from '../actions';
import ActionTypes = CartModule.ActionTypes;
import LoadInitCarts = CartModule.LoadInitCarts;
import {AlertService, ApiService} from '../../services';
import { Router } from '@angular/router';
import LoadAddFlatCart = CartModule.LoadAddFlatCart;
import LoadAddStuffCart = CartModule.LoadAddStuffCart;
import LoadAddLiftCart = CartModule.LoadAddLiftCart;
import LoadDeleteFlatCart = CartModule.LoadDeleteFlatCart;
import LoadDeleteStuffCart = CartModule.LoadDeleteStuffCart;
import LoadDeleteLiftCart = CartModule.LoadDeleteLiftCart;

@Injectable()
export class CartEffects {

  @Effect() LoadCarts$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_INIT_CARTS),
      map((action: LoadInitCarts) => action.payload),
      switchMap(payload => this.apiService.getCartOf(payload).pipe(
        map(cart => new CartModule.SuccessInitCarts(cart)),
        catchError((err) => of(new CartModule.ErrorLoadAction(err)))
      )),
    );

  @Effect() LoadAddFlat$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_ADD_FLAT_CART),
      map((action: LoadAddFlatCart) => action.payload),
      switchMap(payload => this.apiService.addFlatToCart(payload)
          .pipe(
            tap(() => new CartModule.SuccessAddToCart()),
            catchError(err => of(new CartModule.ErrorLoadAction(err)))
          )
      )
    );

  @Effect() LoadAddStuff$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_ADD_STUFF_CART),
      map((action: LoadAddStuffCart) => action.payload),
      switchMap(payload => this.apiService.addStuffToCart(payload)
          .pipe(
            tap(() => new CartModule.SuccessAddToCart()),
            catchError(err => of(new CartModule.ErrorLoadAction(err)))
          )
      )
    );

  @Effect() LoadAddLift$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_ADD_LIFT_CART),
      map((action: LoadAddLiftCart) => action.payload),
      switchMap(payload => this.apiService.addForfaitToCart(payload)
          .pipe(
            tap(() => new CartModule.SuccessAddToCart()),
            catchError(err => of(new CartModule.ErrorLoadAction(err)))
          )
      )
    );

  @Effect({dispatch: false})
    SuccessAddingElementToCart$: Observable<any> = this.actions$
      .pipe(
        ofType(ActionTypes.SUCCESS_ADD_CART),
        tap(() => this.router.navigate(['shoppingCart'])),
        catchError(err => of(new CartModule.ErrorLoadAction(err)))
      );

  @Effect() LoadDeleteFlat$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_DELETE_FLAT_CART),
      map((action: LoadDeleteFlatCart) => action.payload),
      switchMap(payload => this.apiService.deleteFlatInCart(payload).pipe(
        tap(cart => new CartModule.SuccessDeleteElementCart(cart)),
        catchError((err) => of(new CartModule.ErrorLoadAction(err)))
      )),
    );

  @Effect() LoadDeleteStuff$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_DELETE_STUFF_CART),
      map((action: LoadDeleteStuffCart) => action.payload),
      switchMap(payload => this.apiService.deleteStuffInCart(payload).pipe(
        tap(cart => new CartModule.SuccessDeleteElementCart(cart)),
        catchError((err) => of(new CartModule.ErrorLoadAction(err)))
      )),
    );

  @Effect() LoadDeleteLift$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_DELETE_LIFT_CART),
      map((action: LoadDeleteLiftCart) => action.payload),
      switchMap(payload => this.apiService.deleteForfaitInCart(payload).pipe(
        tap(cart => new CartModule.SuccessDeleteElementCart(cart)),
        catchError((err) => of(new CartModule.ErrorLoadAction(err)))
      )),
    );

  @Effect() LoadDeleteCart$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_DELETE_CART),
      switchMap(() => this.apiService.deleteCart().pipe(
        tap(cart => new CartModule.SuccessDeleteCart(cart)),
        catchError((err) => of(new CartModule.ErrorLoadAction(err)))
      )),
    );

  @Effect() ValidateCart$: Observable<any> = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_ADD_LIFT_CART),
      switchMap(() => this.apiService.validateCart()
          .pipe(
            tap(validate => {
              if (validate) {
                this.alertService.success('Paiement du panier validé');
                this.router.navigate(['']).catch(err => of(new CartModule.ErrorLoadAction(err)));
              }
            }),
            catchError(err => of(new CartModule.ErrorLoadAction(err)))
          )
      )
    );

  constructor(private apiService: ApiService, private  actions$: Actions, private router: Router, private alertService: AlertService) {}
}
