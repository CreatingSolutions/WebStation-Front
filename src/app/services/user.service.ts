import { Injectable } from '@angular/core';
import { User, CartModel } from '../model';

@Injectable()
export class UserService {

  constructor() {}

  public getCart(): CartModel {
    return <CartModel>JSON.parse(localStorage.getItem('cart'));
  }

  public getUser(): User {
    return <User>JSON.parse(localStorage.getItem('user'));
  }

  public userLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
