import { Component, OnInit } from '@angular/core';
import {
  AlertService,
  LoadingService
} from '../../services';
import {Router} from '@angular/router';
import {Cart, User} from '../../store/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {selectCarts$, selectUsers$} from 'src/app/store/selectors';
import { AppState } from 'src/app/store';
import {CartModule} from '../../store/actions';
import LoadInitCarts = CartModule.LoadInitCarts;
import Constantes from '../../../assets/label';

@Component({
  selector: 'shopping',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent {
  public shoppingCart$: Observable<Cart>;
  public users$: Observable<User>;

  constructor(
    private loader: LoadingService,
    private alertService: AlertService,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.shoppingCart$ = store.select(selectCarts$);

    this.store.dispatch(new LoadInitCarts());
  }

  public delete(type: string = '', id: number = -1) {
    switch (type) {
      case 'flat': {
        this.store.dispatch(new CartModule.LoadDeleteFlatCart(id));
        break;
      }
      case 'stuff': {
        this.store.dispatch(new CartModule.LoadDeleteStuffCart(id));
        break;
      }
      case 'lift': {
        this.store.dispatch(new CartModule.LoadDeleteLiftCart(id));
        break;
      }
      default : {
        this.store.dispatch(new CartModule.LoadDeleteCart());
        break;
      }
    }
  }

  public validateCart() {
      this.router.navigate(['/payment']).catch(err => console.error(err));
  }

  public keys(o: any): string[] {
    const values: string[] = [];
    const keys = Object.keys(o);
    const constantes = Object.keys(Constantes);
    keys.forEach(key => {
      const value = constantes.find(x => x === key);
      values.push(Constantes[value]);
    });
    return values;
  }

  public error(error) {
    this.loader.hide();
    this.alertService.error(error);
  }
}
