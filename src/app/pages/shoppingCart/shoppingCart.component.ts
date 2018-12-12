import {Component, OnInit} from '@angular/core';
import {ApiService, MockService, LoadingService, UserService} from '../../services';
import { ICart } from '../../model/Interface';

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
      return this.shoppingCart && (
        (Array.isArray(this.shoppingCart.flats) && this.shoppingCart.flats.length) ||
        (Array.isArray(this.shoppingCart.materiels) && this.shoppingCart.materiels.length) ||
        (Array.isArray(this.shoppingCart.mecas) && this.shoppingCart.mecas.length) ||
        (Array.isArray(this.shoppingCart.ecoles) && this.shoppingCart.ecoles.length)
      );
    }
}
