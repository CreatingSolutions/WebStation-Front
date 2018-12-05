import {Injectable} from '@angular/core';
import {Cart, User} from '../model';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  private user: User;
  public carts: Observable<Cart>;

  constructor() {}

  public addCartToUser(cart: Observable<Cart>) {
    this.carts = cart;
  }

  public removeCurrentCart() {
    this.carts = null;
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }
}
