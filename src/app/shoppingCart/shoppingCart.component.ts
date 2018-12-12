import {Component, OnInit} from '@angular/core';
import {Cart} from '../model';
import {ApiService, MockService, LoadingService, UserService} from '../services';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'shopping',
    templateUrl: './shoppingCart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  private shoppingCart: Cart;
  noCartsMessage: string;
  isLinear: Boolean = true;

  constructor(private api: ApiService, private mock: MockService, private loading: LoadingService,
              private userService: UserService, private builder: FormBuilder) {
        this.noCartsMessage = 'Votre panier est vide';
  }

  ngOnInit(): void {
    this.getShoppingCarts();
  }

    private getShoppingCarts() {
      this.api.getCartOf(this.userService.getUser().userId).subscribe(cart => {
        if (cart) {
          this.shoppingCart = cart;
        }
      }, error => {
        console.log(error);
      });
    }
}
