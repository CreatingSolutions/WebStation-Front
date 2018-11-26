import {Injectable} from '@angular/core';
import {Cart, User} from '../model';
import {Subject} from 'rxjs';
import {ApiService} from './api.service';

@Injectable()
export class UserService {
  private user = new Subject<User>();
  private cart = new Subject<Cart>();

  constructor(private api: ApiService) {
  }

  public setUser(user: User) {
    this.user.next(user);
  }
}
