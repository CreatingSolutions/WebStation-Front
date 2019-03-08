import { Component, OnInit } from '@angular/core';
import {
  AlertService,
  ApiService,
  LoadingService
} from '../../services';
import {Router} from '@angular/router';
import {Cart, User} from '../../store/models';
import { Store } from '@ngrx/store';
import { CartModule } from 'src/app/store/actions';
import { Observable } from 'rxjs';
import { selectUsers$, selectCarts$ } from 'src/app/store/selectors';
import { AppState } from 'src/app/store';

@Component({
  selector: 'shopping',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: Cart;
  public flatDisabled = false;
  private user$: Observable<User>;
  public shoppingCart$: Observable<Cart>;

  constructor(
    private loader: LoadingService,
    private alertService: AlertService,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.user$ = store.select(selectUsers$);
    this.shoppingCart$ = store.select(selectCarts$);
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) {
        this.store.dispatch(new CartModule.LoadInitCarts(user));
      }
    });
  }

  public clear(value: string = '') {
    /*if (value === 'flats') {
      this.shoppingCart.clear();
    } else if (value === '') {
      this.shoppingCart.clear();
    }*/
  }

  public update(value: any) {
    this.flatDisabled = value.source.selectedOptions.selected.length > 0;
  }

  public validateCart() {
    const user = localStorage.getItem('user');
    if (user) {
      this.alertService.success('Votre panier a bien été enregistré', true);
      this.router.navigate(['/payment']);
    } else {
      this.router.navigate(['/']);
      this.alertService.error('Vous n\'etes pas connecté');
    }
  }

  public error(error) {
    this.loader.hide();
    this.alertService.error(error);
  }
}
