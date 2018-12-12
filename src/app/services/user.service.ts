import { Injectable } from '@angular/core';
import { ICart } from '../model/Interface';
import { User, CartModel } from '../model';

@Injectable()
export class UserService {
  private user: User;
  private cart: ICart;

  constructor() {
    this.cart = new CartModel();
  }

  public setCart(cart: ICart) {
    this.cart = cart;
  }

  public getCart(): ICart {
    return this.cart;
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }
}
