import { Injectable } from '@angular/core';
import { ICart } from '../model/Interface';
import { User, CartModel } from '../model';

@Injectable()
export class UserService {
  private user: User;
  private cart: CartModel;

  constructor() {
    this.cart = new CartModel();
  }

  public setCart(cart: CartModel) {
    this.cart = cart;
  }

  public getCart(): CartModel {
    return this.cart;
  }

  public getUser(): User {
    return <User>JSON.parse(localStorage.getItem('user'));
  }
}
