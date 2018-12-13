import {Component, OnInit} from '@angular/core';
import {ApiService, MockService, LoadingService, UserService} from '../../services';
import { ICart } from '../../model/Interface';
import {Ecole, Flat, Materiel, Meca} from '../../model';

@Component({
    selector: 'shopping',
    templateUrl: './shoppingCart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ICart;
  noCartsMessage: string;
  isLinear = true;

  constructor(private api: ApiService, private mock: MockService, private loading: LoadingService,
              private userService: UserService) {
        this.noCartsMessage = 'Votre panier est vide';
  }

  ngOnInit(): void {
    this.shoppingCart = this.userService.getCart();
  }

    private getShoppingCarts() {
      /*this.api.getCartOf(this.userService.getUser().userId).subscribe(cart => {
        if (cart) {
          this.shoppingCart = cart;
        }
      }, error => {
        this.shoppingCart = this.userService.getCart();
      });*/
    }

    public clear(value: string = '') {
      if (value === 'flats') {

      } else if (value === '') {

      }
    }

    public shoppingCartExist() {
      return this.shoppingCart && this.shoppingCart.NotNullAndIsNotEmpty();
    }
}
